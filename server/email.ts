import { MailService } from '@sendgrid/mail';

if (!process.env.SENDGRID_API_KEY || process.env.SENDGRID_API_KEY === 'placeholder_key_for_testing') {
  console.warn("⚠️  SendGrid API key not configured. Email functionality will be disabled.");
}

const mailService = new MailService();
if (process.env.SENDGRID_API_KEY && process.env.SENDGRID_API_KEY !== 'placeholder_key_for_testing') {
  mailService.setApiKey(process.env.SENDGRID_API_KEY);
}

interface ContactEmailParams {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  helpType: string;
  message: string;
}

export async function sendContactEmail(params: ContactEmailParams): Promise<boolean> {
  // Check if SendGrid is properly configured
  if (!process.env.SENDGRID_API_KEY || process.env.SENDGRID_API_KEY === 'placeholder_key_for_testing' || process.env.SENDGRID_API_KEY === 'your_sendgrid_key_here') {
    console.log('📧 Contact form submitted (email disabled - no SendGrid key):');
    console.log(`Name: ${params.firstName} ${params.lastName}`);
    console.log(`Email: ${params.email}`);
    console.log(`Company: ${params.company}`);
    console.log(`Help Type: ${params.helpType}`);
    console.log(`Message: ${params.message}`);
    return false; // Indicate email wasn't sent but don't crash
  }

  try {
    const emailContent = {
      to: 'your-email@example.com', // TODO: Replace with your actual email address
      from: 'verified-sender@yourdomain.com', // TODO: Replace with your verified SendGrid sender email
      subject: `New Contact Form Submission - ${params.helpType}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e40af; border-bottom: 2px solid #f97316; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${params.firstName} ${params.lastName}</p>
            <p><strong>Email:</strong> <a href="mailto:${params.email}">${params.email}</a></p>
            <p><strong>Company:</strong> ${params.company}</p>
            <p><strong>Help Type:</strong> ${params.helpType}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h3 style="color: #374151; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6; white-space: pre-wrap;">${params.message}</p>
          </div>
          
          <div style="margin-top: 30px; padding: 15px; background-color: #fef3c7; border-radius: 8px;">
            <p style="margin: 0; color: #92400e; font-size: 14px;">
              <strong>Next Steps:</strong> Please respond to this inquiry within 24 hours for the best customer experience.
            </p>
          </div>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
          <p style="color: #6b7280; font-size: 12px; text-align: center;">
            This email was sent from the Keystone Infra website contact form.
          </p>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${params.firstName} ${params.lastName}
Email: ${params.email}
Company: ${params.company}
Help Type: ${params.helpType}

Message:
${params.message}

Please respond to this inquiry within 24 hours.
      `,
    };

    await mailService.send(emailContent);
    console.log('Contact email sent successfully');
    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    return false;
  }
}