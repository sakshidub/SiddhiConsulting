import {
  Container,
  Grid,
  Box,
  Typography,
  IconButton,
  TextField,
  Button,
  Alert
} from '@mui/material'

import {
  Email,
  Phone,
  LocationOn,
  LinkedIn,
  Facebook,
  Instagram
} from '@mui/icons-material'

import { useState } from 'react'
import bg from '../../assets/home4.webp'

function Contact() {
  const [loading, setLoading] = useState(false)
  const [successMsg, setSuccessMsg] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const form = e.currentTarget

    const elements = form.elements as unknown as {
      name: HTMLInputElement
      email: HTMLInputElement
      message: HTMLTextAreaElement
    }

    const formData = {
      name: elements.name.value,
      email: elements.email.value,
      message: elements.message.value
    }

    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const data = await res.json()

      if (res.ok) {
        setSuccessMsg('message send')
        form.reset()
        setTimeout(() => setSuccessMsg(''), 5000)
      } else {
        alert(data.message || 'Failed to send')
      }
    } catch (error) {
      console.error(error)
      alert('Server error')
    }

    setLoading(false)
  }

  return (
    <Box
      id="contact"
      sx={{
        position: 'relative',
        py: 10,
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          backgroundImage: `linear-gradient(to bottom, rgba(15,23,42,0.92), rgba(15,23,42,0.85)), url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          zIndex: 0
        }
      }}
    >
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        
        {/* Heading */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography sx={{ color: '#d4af37', fontSize: '0.7rem' }}>
            Get In Touch
          </Typography>
          <Typography sx={{ color: '#fff', fontWeight: 700 }}>
            Contact Us
          </Typography>
        </Box>

        <Box
          sx={{
            bgcolor: 'rgba(255,255,255,0.05)',
            backdropFilter: 'blur(12px)',
            borderRadius: 4,
            p: { xs: 3, md: 5 }
          }}
        >
          <Grid container spacing={4}>
            
            {/* LEFT */}
            <Grid item xs={12} md={6}>
              <Typography sx={{ color: '#fff', mb: 2 }}>
                Get in Touch
              </Typography>

              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <IconButton sx={{ color: '#d4af37' }}>
                  <Email />
                </IconButton>
                <Typography sx={{ color: '#fff' }}>
                  siddhiconsultings@gmail.com
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <IconButton sx={{ color: '#d4af37' }}>
                  <Phone />
                </IconButton>
                <Typography sx={{ color: '#fff' }}>
                  +91 99050 64954 , +91 79822 85012
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <IconButton sx={{ color: '#d4af37' }}>
                  <LocationOn />
                </IconButton>
                <Typography sx={{ color: '#fff' }}>
                  G-31 First Floor Sector 3 Noida, UP
                </Typography>
              </Box>

              <Box sx={{ mt: 2 }}>
<IconButton href="https://linkedin.com" target="_blank" sx={{ color: '#0A66C2' }}>
                  <LinkedIn />
                </IconButton>
                <IconButton href="https://facebook.com" target="_blank" sx={{ color: '#1877F2' }}>
                  <Facebook />
                </IconButton>
                <IconButton href="https://instagram.com" target="_blank" sx={{ color: '#E4405F' }}>
                  <Instagram />
                </IconButton>
              </Box>
            </Grid>

            {/* RIGHT FORM */}
            <Grid item xs={12} md={6}>
              <form onSubmit={handleSubmit}>
                
                <TextField
                  fullWidth
                  name="name"
                  label="Name"
                  required
                  sx={{ mb: 2 }}
                />

                <TextField
                  fullWidth
                  name="email"
                  label="Email"
                  type="email"
                  required
                  sx={{ mb: 2 }}
                />

                <TextField
                  fullWidth
                  name="message"
                  label="Message"
                  multiline
                  rows={4}
                  required
                  sx={{ mb: 2 }}
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  disabled={loading}
                  sx={{
                    bgcolor: '#43a249',
                    '&:hover': { bgcolor: '#2e7d32' }
                  }}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </Button>

                {successMsg && (
                  <Alert 
                    severity="success" 
                    sx={{ mt: 2, animation: 'fadeIn 0.5s' }}
                  >
                    {successMsg}
                  </Alert>
                )}

              </form>
            </Grid>

          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

export default Contact