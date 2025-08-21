const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  // Handle CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, position, experience, resume } = req.body;

    if (!name || !email || !position) {
      return res.status(400).json({ error: 'Missing required fields' });
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
    console.error('SendGrid error:', error);
    res.status(500).json({ error: 'Failed to send application' });
  }
}