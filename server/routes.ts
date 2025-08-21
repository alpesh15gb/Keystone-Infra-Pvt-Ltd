import type { Express, Request } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import { sendContactEmail } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  // Job application submission endpoint (simplified - no file upload for now)
  app.post('/api/job-applications', async (req, res) => {
    try {
      const {
        fullName,
        email,
        phone,
        experience,
        currentLocation,
        expectedSalary,
        coverLetter,
        jobTitle,
        jobId
      } = req.body;

      // Basic validation
      if (!fullName || !email || !phone || !experience || !currentLocation || !coverLetter || !jobTitle) {
        return res.status(400).json({ 
          error: 'Missing required fields. Please fill in all required information.' 
        });
      }

      // Prepare application data
      const applicationData = {
        fullName,
        email,
        phone,
        experience,
        currentLocation,
        expectedSalary: expectedSalary || 'Not specified',
        coverLetter,
        jobTitle,
        jobId,
        appliedAt: new Date().toISOString()
      };

      // Log the application (in a real app, save to database)
      console.log('New job application received:', applicationData);

      // In a real application, you would:
      // 1. Save to database
      // 2. Send email notification to HR
      // 3. Send confirmation email to applicant
      
      // For now, we'll just return success
      res.status(200).json({ 
        message: 'Application submitted successfully',
        applicationId: Date.now() // Simple ID for demo
      });

    } catch (error) {
      console.error('Error processing job application:', error);
      res.status(500).json({ 
        error: 'Failed to submit application. Please try again.' 
      });
    }
  });

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

  const httpServer = createServer(app);
  return httpServer;
}
