const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = 5000;

const mailTransporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'smtp.gmail.com',
  port: Number(process.env.EMAIL_PORT || 465),
  secure: process.env.EMAIL_SECURE ? process.env.EMAIL_SECURE === 'true' : true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ 
        message: 'Missing required fields: name, email, message' 
      });
    }

// Save to contacts.json
    const contactsFile = path.join(__dirname, 'contacts.json');
    let contacts = [];
    if (fs.existsSync(contactsFile)) {
      try {
        const data = fs.readFileSync(contactsFile, 'utf8');
        contacts = JSON.parse(data);
      } catch (err) {
        console.error('Error reading contacts:', err);
      }
    }
    
    const newContact = {
      name,
      email,
      message,
      timestamp: new Date().toISOString()
    };
    
    contacts.push(newContact);
    
    try {
      fs.writeFileSync(contactsFile, JSON.stringify(contacts, null, 2));
      console.log('📧 New contact saved:', newContact);
    } catch (err) {
      console.error('Error saving contact:', err);
      return res.status(500).json({ message: 'Failed to save contact data' });
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.warn('Email is not configured. Skipping email send.');
      return res.json({
        success: true,
        message: 'Message received successfully! Email not sent because SMTP is not configured.'
      });
    }

    const mailOptions = {
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to: 'siddhiconsultings@gmail.com',
      subject: 'New contact form submission from Siddhi Consulting',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br/>${message}</p>`,
      replyTo: email,
      attachments: [
        {
          filename: `contact-${Date.now()}.json`,
          content: JSON.stringify(newContact, null, 2),
          contentType: 'application/json'
        }
      ]
    };

    try {
      const info = await mailTransporter.sendMail(mailOptions);
      console.log('📨 Contact email sent:', info.messageId);
    } catch (err) {
      console.error('Error sending contact email:', err);
      return res.status(500).json({ message: 'Contact received but failed to send email' });
    }

    res.json({ 
      success: true, 
      message: 'Message received successfully and emailed to siddhiconsultings@gmail.com!' 
    });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ message: 'Server error processing contact form' });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`🚀 Backend running at http://localhost:${PORT}`);
  console.log(`📧 Contact endpoint: http://localhost:${PORT}/api/contact`);
});
