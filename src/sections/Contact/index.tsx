import {
  Container,
  Grid,
  Box,
  Typography,
  IconButton,
  TextField,
  Button,
  Alert,
  Snackbar
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
import { send } from '@emailjs/browser'
import bg from '../../assets/home4.webp'

function Contact() {
  const [loading, setLoading] = useState(false)
  const [successMsg, setSuccessMsg] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const [sentOk, setSentOk] = useState(false)
  const [statusText, setStatusText] = useState('')
  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error' | 'warning'>('success')
  const [snackbarMessage, setSnackbarMessage] = useState('')

  const emailjsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const emailjsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const emailjsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

  const isPlaceholderValue = (value: string | undefined) => {
    if (!value) return true
    const lower = value.toLowerCase()
    return lower.includes('your_') || lower.includes('your') || lower.includes('placeholder') || lower.includes('xxxx')
  }

  const emailjsConfigured =
    !!emailjsServiceId &&
    !!emailjsTemplateId &&
    !!emailjsPublicKey &&
    !isPlaceholderValue(emailjsServiceId) &&
    !isPlaceholderValue(emailjsTemplateId) &&
    !isPlaceholderValue(emailjsPublicKey)

  const emailjsStatusMessage = emailjsConfigured
    ? 'EmailJS is configured and ready to send to siddhiconsultings@gmail.com.'
    : 'EmailJS is not configured correctly. Please set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in .env.'

  const showAlerts = import.meta.env.VITE_SHOW_CONTACT_ALERTS === 'true'
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || (import.meta.env.DEV ? 'http://localhost:5000/api' : '/api')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setSuccessMsg('')
    setErrorMsg('')
    setStatusText('')

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

    const emailjsReady =
      !!emailjsServiceId &&
      !!emailjsTemplateId &&
      !!emailjsPublicKey &&
      !isPlaceholderValue(emailjsServiceId) &&
      !isPlaceholderValue(emailjsTemplateId) &&
      !isPlaceholderValue(emailjsPublicKey)

    let backendSaved = false
    try {
      const saveRes = await fetch(`${apiBaseUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      if (saveRes.ok) {
        backendSaved = true
        console.log('Contact saved to backend')
      } else {
        const errorText = await saveRes.text().catch(() => '')
        console.warn('Failed to save contact to backend:', saveRes.status, errorText)
      }
    } catch (saveError) {
      console.warn('Backend save error:', saveError)
    }

    if (!emailjsReady) {
      const mailto = `mailto:siddhiconsultings@gmail.com?subject=${encodeURIComponent(
        `Contact from ${formData.name}`
      )}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`)}`
      window.location.href = mailto
      const message = backendSaved
        ? 'Saved to contact.json and opening your email client.'
        : 'Opening your email client. Backend save failed.'
      setStatusText(message)
      setSnackbarSeverity(backendSaved ? 'success' : 'warning')
      setSnackbarMessage(message)
      setSnackbarOpen(true)
      setLoading(false)
      return
    }

    try {
      await send(
        emailjsServiceId,
        emailjsTemplateId,
        {
          user_name: formData.name,
          user_email: formData.email,
          message: formData.message,
          from_name: formData.name,
          from_email: formData.email,
          to_email: 'siddhiconsultings@gmail.com'
        },
        emailjsPublicKey
      )

      const successMessage = backendSaved
        ? 'Email sent and saved to contact.json.'
        : 'Email sent, but saving to contact.json failed.'
      setSuccessMsg('Message sent successfully to siddhiconsultings@gmail.com')
      setStatusText(successMessage)
      setSnackbarSeverity('success')
      setSnackbarMessage(successMessage)
      setSnackbarOpen(true)
      form.reset()
      setSentOk(true)
      setTimeout(() => setSentOk(false), 5000)
      setTimeout(() => setSuccessMsg(''), 7000)
    } catch (error) {
      console.error('Contact form submit failed:', error)
      const message =
        error instanceof Error
          ? error.message
          : typeof error === 'string'
          ? error
          : error && typeof error === 'object'
          ? JSON.stringify(error)
          : 'Failed to send message'
      setErrorMsg(message)
      setStatusText(message)
      setSnackbarSeverity('error')
      setSnackbarMessage(message)
      setSnackbarOpen(true)
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
                  info@siddhiconsulting.com
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
                    bgcolor: sentOk ? '#2e7d32' : '#43a249',
                    '&:hover': { bgcolor: sentOk ? '#1b5e20' : '#2e7d32' }
                  }}
                >
                  {loading ? 'Sending...' : sentOk ? 'Sent ✓' : 'Send Message'}
                </Button>

                {(showAlerts || statusText) && (
                  <Typography
                    variant="body2"
                    sx={{ mt: 2, color: statusText ? '#fff' : '#f5c518' }}
                  >
                    {statusText || emailjsStatusMessage}
                  </Typography>
                )}

                {showAlerts && successMsg && (
                  <Alert 
                    severity="success" 
                    sx={{ mt: 2, animation: 'fadeIn 0.5s', position: 'relative', zIndex: 'auto' }}
                  >
                    {successMsg}
                  </Alert>
                )}

                {showAlerts && successMsg && (
                  <Alert 
                    severity="success" 
                    sx={{ mt: 2, animation: 'fadeIn 0.5s', position: 'relative', zIndex: 'auto' }}
                  >
                    {successMsg}
                  </Alert>
                )}

                {showAlerts && errorMsg && (
                  <Alert 
                    severity="error" 
                    sx={{ mt: 2, animation: 'fadeIn 0.5s', position: 'relative', zIndex: 'auto' }}
                  >
                    {errorMsg}
                  </Alert>
                )}

                <Snackbar
                  open={snackbarOpen}
                  autoHideDuration={5000}
                  onClose={() => setSnackbarOpen(false)}
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                >
                  <Alert
                    onClose={() => setSnackbarOpen(false)}
                    severity={snackbarSeverity}
                    sx={{ width: '100%' }}
                  >
                    {snackbarMessage}
                  </Alert>
                </Snackbar>

              </form>
            </Grid>

          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

export default Contact