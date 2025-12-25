import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import { sendContactEmail } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      
      // Store the submission
      const submission = await storage.createContactSubmission(validatedData);
      
      // Send email notification
      const emailSent = await sendContactEmail(validatedData);
      
      if (!emailSent) {
        console.warn("Email notification failed, but submission was stored");
      }
      
      res.json({ 
        success: true, 
        data: submission,
        emailSent 
      });
    } catch (error) {
      console.error("Contact form submission error:", error);
      res.status(400).json({ 
        success: false, 
        message: "Invalid form data. Please check all fields and try again." 
      });
    }
  });

  // Get all contact submissions (for admin purposes)
  app.get("/api/contact", async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json({ success: true, data: submissions });
    } catch (error) {
      console.error("Error fetching contact submissions:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch contact submissions" 
      });
    }
  });

  // Save site content
  app.post("/api/content", async (req, res) => {
    try {
      const { id, content, filePath } = req.body;
      const saved = await storage.saveSiteContent({ id, content });
      
      // Write to file and commit to git
      if (filePath) {
        const fs = await import('fs/promises');
        const { exec } = await import('child_process');
        const { promisify } = await import('util');
        const execAsync = promisify(exec);
        
        await fs.writeFile(filePath, content, 'utf-8');
        await execAsync(`git add "${filePath}"`);
        await execAsync(`git commit -m "Update ${id} via visual editor"`);
        await execAsync('git push origin main');
      }
      
      res.json({ success: true, data: saved });
    } catch (error) {
      console.error("Error saving content:", error);
      res.status(500).json({ success: false, message: "Failed to save content" });
    }
  });

  // Get all site content
  app.get("/api/content", async (req, res) => {
    try {
      const content = await storage.getAllSiteContent();
      res.json({ success: true, data: content });
    } catch (error) {
      console.error("Error fetching content:", error);
      res.status(500).json({ success: false, message: "Failed to fetch content" });
    }
  });

  // Get file content for editing
  app.get("/api/file", async (req, res) => {
    try {
      const { id } = req.query;
      const fs = await import('fs/promises');
      const path = await import('path');
      
      const contentMap: Record<string, string> = {
        "hero-title": "client/src/components/hero-section.tsx",
        "hero-subtitle": "client/src/components/hero-section.tsx",
        "products-title": "client/src/components/products-section.tsx",
        "products-subtitle": "client/src/components/products-section.tsx",
        "features-title": "client/src/components/features-section.tsx",
        "features-subtitle": "client/src/components/features-section.tsx",
        "team-title": "client/src/components/team-section.tsx",
        "team-subtitle": "client/src/components/team-section.tsx",
        "projects-title": "client/src/components/projects-showcase.tsx",
        "projects-subtitle": "client/src/components/projects-showcase.tsx",
      };
      
      const filePath = contentMap[id as string];
      if (!filePath) {
        return res.status(404).json({ success: false, message: "File not found" });
      }
      
      const fullPath = path.resolve(process.cwd(), filePath);
      const content = await fs.readFile(fullPath, 'utf-8');
      
      res.json({ success: true, filePath: fullPath, content });
    } catch (error) {
      console.error("Error reading file:", error);
      res.status(500).json({ success: false, message: "Failed to read file" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
