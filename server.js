const express = require('express');
const path = require('path');
const sgMail = require('@sendgrid/mail');

const app = express();
const PORT = process.env.PORT || 80;

// Set SendGrid API key if available
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from dist/public directory
app.use(express.static(path.join(__dirname, 'dist/public')));

// Contact form API endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    if (!process.env.SENDGRID_API_KEY) {
      console.log('Contact form submission received:', { name, email, phone, message });
      return res.status(200).json({ 
        success: true, 
        message: 'Contact form received (SendGrid not configured)' 
      });
    }

    const msg = {
      to: 'contact@keystoneinfra.com', // Replace with your email
      from: 'noreply@keystoneinfra.com', // Replace with verified sender
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    await sgMail.send(msg);
    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ error: 'Failed to send message' });
  }
});

// Job application API endpoint
app.post('/api/apply', async (req, res) => {
  try {
    const { name, email, phone, position, experience, resume } = req.body;

    if (!name || !email || !position) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    if (!process.env.SENDGRID_API_KEY) {
      console.log('Job application received:', { name, email, phone, position, experience });
      return res.status(200).json({ 
        success: true, 
        message: 'Job application received (SendGrid not configured)' 
      });
    }

    const msg = {
      to: 'hr@keystoneinfra.com', // Replace with your HR email
      from: 'noreply@keystoneinfra.com', // Replace with verified sender
      subject: `New Job Application: ${position} - ${name}`,
      html: `
        <h3>New Job Application</h3>
        <p><strong>Position:</strong> ${position}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Experience:</strong> ${experience || 'Not provided'}</p>
        ${resume ? `<p><strong>Resume:</strong> Attached</p>` : ''}
      `,
    };

    await sgMail.send(msg);
    res.status(200).json({ success: true, message: 'Application sent successfully' });
  } catch (error) {
    console.error('Job application error:', error);
    res.status(500).json({ error: 'Failed to send application' });
  }
});

// Serve React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/public', 'index.html'));
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Keystone Infrastructure website running on http://localhost:${PORT}`);
  console.log(`Access your website at: http://localhost:${PORT}`);
  console.log('Contact form and job applications are working!');
  
  if (!process.env.SENDGRID_API_KEY) {
    console.log('\nNote: Set SENDGRID_API_KEY environment variable to enable email sending');
    console.log('For now, form submissions will be logged to console');
  }
});

// Handle graceful shutdown
process.on('SIGTERM', () => {
  console.log('Shutting down server...');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('Shutting down server...');
  process.exit(0);
});