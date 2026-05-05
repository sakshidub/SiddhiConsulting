const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Contact form endpoint
app.post('/api/contact', (req, res) => {
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
    }

    res.json({ 
      success: true, 
      message: 'Message received successfully!' 
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
