import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import { sendContactEmail } from "./email";
import multer from "multer";
import path from "path";
import fs from "fs";

// Configure multer for file uploads
const storage_multer = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(process.cwd(), 'uploads');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ 
  storage: storage_multer,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['.pdf', '.doc', '.docx'];
    const fileExt = path.extname(file.originalname).toLowerCase();
    
    if (allowedTypes.includes(fileExt)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only PDF, DOC, and DOCX files are allowed.'));
    }
  }
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Job application submission endpoint
  app.post('/api/job-applications', upload.single('resume'), async (req, res) => {
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
        appliedAt: new Date().toISOString(),
        resumeFile: req.file ? req.file.filename : null
      };

      // Log the application (in a real app, save to database)
      console.log('New job application received:', {
        ...applicationData,
        resumeFile: req.file ? `${req.file.filename} (${req.file.size} bytes)` : 'No resume uploaded'
      });

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
