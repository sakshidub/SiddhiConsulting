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
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()

    setLoading(true)
    setSuccess(false)
    setError(false)

    const form = e.currentTarget

    const formData = new FormData(form)

    // Disable captcha
    formData.append('_captcha', 'false')

    try {
      const response = await fetch(
        'https://formsubmit.co/ajax/sakshidubey1225@gmail.com',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json'
          },
          body: formData
        }
      )

      const data = await response.json()

      console.log(data)

      // SUCCESS
      if (data.success) {
        setSuccess(true)

        alert('Mail Sent Successfully!')

        form.reset()
      } else {
        setError(true)

        alert('Failed to send message')
      }
    } catch (err) {
      console.error(err)

      setError(true)

      alert('Failed to send message')
    } finally {
      setLoading(false)
    }
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

          backgroundImage: `
            linear-gradient(
              to bottom,
              rgba(15,23,42,0.92),
              rgba(15,23,42,0.85)
            ),
            url(${bg})
          `,

          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          zIndex: 0
        }
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          position: 'relative',
          zIndex: 1
        }}
      >
        {/* HEADING */}
        <Box
          sx={{
            textAlign: 'center',
            mb: 6
          }}
        >
          <Typography
            sx={{
              color: '#d4af37',
              fontSize: '0.8rem',
              letterSpacing: 2,
              mb: 1
            }}
          >
            GET IN TOUCH
          </Typography>

          <Typography
            variant="h4"
            sx={{
              color: '#fff',
              fontWeight: 700
            }}
          >
            Contact Us
          </Typography>
        </Box>

        {/* MAIN BOX */}
        <Box
          sx={{
            bgcolor: 'rgba(255,255,255,0.05)',
            backdropFilter: 'blur(12px)',
            borderRadius: 4,
            p: { xs: 3, md: 5 }
          }}
        >
          <Grid container spacing={4}>
            {/* LEFT SIDE */}
            <Grid item xs={12} md={6}>
              <Typography
                variant="h6"
                sx={{
                  color: '#fff',
                  mb: 3,
                  fontWeight: 600
                }}
              >
                Get in Touch
              </Typography>

              {/* EMAIL */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  mb: 2
                }}
              >
                <IconButton sx={{ color: '#d4af37' }}>
                  <Email />
                </IconButton>

                <Typography sx={{ color: '#fff' }}>
                  info@siddhiconsulting.com
                </Typography>
              </Box>

              {/* PHONE */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  mb: 2
                }}
              >
                <IconButton sx={{ color: '#d4af37' }}>
                  <Phone />
                </IconButton>

                <Typography sx={{ color: '#fff' }}>
                  +91 99050 64954, +91 79822 85012
                </Typography>
              </Box>

              {/* ADDRESS */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  mb: 2
                }}
              >
                <IconButton sx={{ color: '#d4af37' }}>
                  <LocationOn />
                </IconButton>

                <Typography sx={{ color: '#fff' }}>
                  G-31 First Floor Sector 3 Noida, UP
                </Typography>
              </Box>

              {/* SOCIAL ICONS */}
              <Box sx={{ mt: 3 }}>
                <IconButton
                  href="https://linkedin.com"
                  target="_blank"
                  sx={{ color: '#0A66C2' }}
                >
                  <LinkedIn />
                </IconButton>

                <IconButton
                  href="https://facebook.com"
                  target="_blank"
                  sx={{ color: '#1877F2' }}
                >
                  <Facebook />
                </IconButton>

                <IconButton
                  href="https://instagram.com"
                  target="_blank"
                  sx={{ color: '#E4405F' }}
                >
                  <Instagram />
                </IconButton>
              </Box>
            </Grid>

            {/* RIGHT SIDE FORM */}
            <Grid item xs={12} md={6}>
              <form onSubmit={handleSubmit}>
                {/* NAME */}
                <TextField
                  fullWidth
                  name="name"
                  label="Name"
                  required
                  sx={{ mb: 2 }}
                />

                {/* EMAIL */}
                <TextField
                  fullWidth
                  name="email"
                  label="Email"
                  type="email"
                  required
                  sx={{ mb: 2 }}
                />

                {/* MESSAGE */}
                <TextField
                  fullWidth
                  name="message"
                  label="Message"
                  multiline
                  rows={4}
                  required
                  sx={{ mb: 2 }}
                />

                {/* BUTTON */}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  disabled={loading}
                  sx={{
                    bgcolor: '#43a249',
                    py: 1.3,
                    fontWeight: 600,

                    '&:hover': {
                      bgcolor: '#2e7d32'
                    }
                  }}
                >
                  {loading
                    ? 'SENDING...'
                    : 'SEND MESSAGE'}
                </Button>

                {/* SUCCESS ALERT */}
                {success && (
                  <Alert
                    severity="success"
                    sx={{ mt: 2 }}
                  >
                    Message sent successfully!
                  </Alert>
                )}

                {/* ERROR ALERT */}
                {error && (
                  <Alert
                    severity="error"
                    sx={{ mt: 2 }}
                  >
                    Failed to send message.
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