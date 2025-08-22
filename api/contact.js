import { insertContactSubmissionSchema } from "./shared/schema.js";

// Simple in-memory storage for Vercel deployment
let contactSubmissions = [];
let submissionIdCounter = 1;

// SendGrid email functionality
async function sendContactEmail(formData) {
  try {
    if (!process.env.SENDGRID_API_KEY) {
      console.warn("SENDGRID_API_KEY not configured, skipping email");
      return false;
    }

    const sgMail = await import('@sendgrid/mail');
    sgMail.default.setApiKey(process.env.SENDGRID_API_KEY);

    const emailContent = `
      New Contact Form Submission:
      
      Name: ${formData.firstName} ${formData.lastName}
      Email: ${formData.email}
      Company: ${formData.company}
      Help Type: ${formData.helpType}
      Message: ${formData.message}
      
      Submitted at: ${new Date().toLocaleString()}
    `;

    const msg = {
      to: 'contact@keystoneinfra.in',
      from: 'contact@keystoneinfra.in',
      subject: `New Contact Form Submission from ${formData.firstName} ${formData.lastName}`,
      text: emailContent,
      html: emailContent.replace(/\n/g, '<br>')
    };

    await sgMail.default.send(msg);
    return true;
  } catch (error) {
    console.error('Email sending failed:', error);
    return false;
  }
}

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    if (req.method === 'POST') {
      // Handle contact form submission
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      
      // Store the submission
      const submission = {
        id: submissionIdCounter++,
        ...validatedData,
        createdAt: new Date().toISOString()
      };
      contactSubmissions.push(submission);
      
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
    } else if (req.method === 'GET') {
      // Get all contact submissions
      res.json({ success: true, data: contactSubmissions });
    } else {
      res.status(405).json({ success: false, message: 'Method not allowed' });
    }
  } catch (error) {
    console.error("Contact API error:", error);
    res.status(400).json({ 
      success: false, 
      message: "Invalid form data. Please check all fields and try again." 
    });
  }
}