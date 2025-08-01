const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const formData = require('form-data');
const Mailgun = require('mailgun.js');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Mailgun config
const mailgun = new Mailgun(formData);
const client = mailgun.client({
  username: 'api',
  key: process.env.MAILGUN_API_KEY,
});

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

// Serve index.html at root "/"
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Send Welcome Email
app.post('/subscribe', async (req, res) => {
  const { email, firstName } = req.body;

  if (!email || !firstName) {
    return res.status(400).send('Missing required fields.');
  }

  try {
    const messageData = {
      from: `Dev@Deakin <postmaster@${process.env.MAILGUN_DOMAIN}>`,
      to: [email],
      subject: 'Welcome to Dev@Deakin',
      html: `
        <p>Dear ${firstName},</p>
        <p>Welcome to Dev@Deakin.</p>
        <p>This platform will help you develop full-stack web applications and explore secure frontend development with Node.js, Express, and Web APIs.</p>
        <p>Stay tuned for demo videos and updates.</p>
        <p>Best regards,<br>Dev@Deakin Team</p>
      `,
    };

    await client.messages.create(process.env.MAILGUN_DOMAIN, messageData);
    res.status(200).send('Welcome email sent successfully.');
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).send('Failed to send email.');
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});