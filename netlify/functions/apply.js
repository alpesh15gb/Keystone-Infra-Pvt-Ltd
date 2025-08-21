const sgMail = require('@sendgrid/mail');

exports.handler = async (event, context) => {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const { fullName, email, phone, position, experience, coverLetter, resumeFile } = JSON.parse(event.body);

    // Validate required fields
    if (!fullName || !email || !position) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' })
      };
    }

    // Set SendGrid API key
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
      to: 'careers@keystoneinfra.com', // Replace with your email
      from: 'noreply@keystoneinfra.com', // Replace with verified sender
      subject: `Job Application: ${position}`,
      html: `
        <h2>New Job Application</h2>
        <p><strong>Position:</strong> ${position}</p>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Experience:</strong> ${experience || 'Not provided'}</p>
        <p><strong>Cover Letter:</strong></p>
        <p>${coverLetter ? coverLetter.replace(/\n/g, '<br>') : 'Not provided'}</p>
        ${resumeFile ? '<p><strong>Resume:</strong> File attached</p>' : '<p><strong>Resume:</strong> Not provided</p>'}
      `,
    };

    await sgMail.send(msg);

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify({ message: 'Application submitted successfully' })
    };

  } catch (error) {
    console.error('Error sending application:', error);
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify({ error: 'Failed to submit application' })
    };
  }
};