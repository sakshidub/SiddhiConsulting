import { Container, Grid, Box, Typography, IconButton, TextField, Button } from '@mui/material'
import { Email, Phone, LocationOn, LinkedIn, Facebook, Instagram, WhatsApp } from '@mui/icons-material'

function Contact() {
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
          backgroundImage: `linear-gradient(to bottom, rgba(15,23,42,0.92) 0%, rgba(15,23,42,0.85) 100%), url('/src/assets/home4.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
<Typography
            variant="overline"
            sx={{
              color: '#d4af37',
              fontWeight: 600,
              letterSpacing: 2,
              fontSize: '0.7rem',
            }}
          >
            Get In Touch
          </Typography>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{
              color: '#fff',
              fontWeight: 700,
              mt: 1,
              textShadow: '0 2px 20px rgba(0,0,0,0.5)',
              fontSize: '1.1rem',
            }}
          >
            Contact Us
          </Typography>
        </Box>

        <Box
          sx={{
            bgcolor: 'rgba(255,255,255,0.05)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 4,
            p: { xs: 3, md: 5 },
            boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
          }}
        >
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
<Typography variant="body1" gutterBottom sx={{ color: '#fff', fontWeight: 600, fontSize: '0.85rem' }}>
                Get in Touch
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <IconButton
                  size="small"
                  sx={{
                    bgcolor: 'rgba(212,175,55,0.15)',
                    color: '#d4af37',
                    mr: 1.5,
                    '&:hover': { bgcolor: 'rgba(212,175,55,0.25)' },
                  }}
                >
                  <Email />
                </IconButton>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.75rem' }}>
                  siddhiconsultings@gmail.com
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <IconButton
                  size="small"
                  sx={{
                    bgcolor: 'rgba(212,175,55,0.15)',
                    color: '#d4af37',
                    mr: 1.5,
                    '&:hover': { bgcolor: 'rgba(212,175,55,0.25)' },
                  }}
                >
                  <Phone />
                </IconButton>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.75rem' }}>
                  +91 99050 64954
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <IconButton
                  size="small"
                  sx={{
                    bgcolor: 'rgba(212,175,55,0.15)',
                    color: '#d4af37',
                    mr: 1.5,
                    '&:hover': { bgcolor: 'rgba(212,175,55,0.25)' },
                  }}
                >
                  <LocationOn />
                </IconButton>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.75rem' }}>
                  G-31 first floor sector 3 Noida, UP 201301
                </Typography>
              </Box>

              <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.7)', mb: 2, mt: 1, display: 'block' }}>
                Follow us:
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <IconButton
                  href="https://www.linkedin.com/in/rakhi-jaiswal-79266a3b1?utm_source=share_via&utm_content=profile&utm_medium=member_androidhttps://meet.google.com/aaw-dmiy-zek"
                  target="_blank"
                  sx={{
                    bgcolor: 'rgba(0,119,181,0.15)',
                    color: '#0e76a8',
                    '&:hover': { bgcolor: 'rgba(0,119,181,0.25)' },
                  }}
                >
                  <LinkedIn />
                </IconButton>
                <IconButton
                  href="https://www.facebook.com/share/18WaSxD5yY/"
                  target="_blank"
                  sx={{
                    bgcolor: 'rgba(24,119,242,0.15)',
                    color: '#1877f2',
                    '&:hover': { bgcolor: 'rgba(24,119,242,0.25)' },
                  }}
                >
                  <Facebook />
                </IconButton>
                <IconButton
                  href="https://www.instagram.com/siddhiconsultings?utm_source=qr&igsh=bGxqa2d4djczZ3Fx"
                  target="_blank"
                  sx={{
                    bgcolor: 'rgba(225,48,108,0.15)',
                    color: '#e1356c',
                    '&:hover': { bgcolor: 'rgba(225,48,108,0.25)' },
                  }}
                >
                  <Instagram />
                </IconButton>
                <IconButton
                  href="https://wa.me/login"
                  target="_blank"
                  sx={{
                    bgcolor: 'rgba(37,211,102,0.15)',
                    color: '#25d366',
                    '&:hover': { bgcolor: 'rgba(37,211,102,0.25)' },
                  }}
                >
                  <WhatsApp />
                </IconButton>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                sx={{
                  mb: 2,
                  bgcolor: 'rgba(255,255,255,0.04)',
                  '& .MuiOutlinedInput-root': {
                    color: '#fff',
                    '& fieldset': { borderColor: 'rgba(255,255,255,0.15)' },
                    '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
                    '&.Mui-focused fieldset': { borderColor: '#d4af37' },
                  },
                  '& .MuiInputLabel-root': { color: 'rgba(255,255,255,0.5)' },
                }}
              />
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                sx={{
                  mb: 2,
                  bgcolor: 'rgba(255,255,255,0.04)',
                  '& .MuiOutlinedInput-root': {
                    color: '#fff',
                    '& fieldset': { borderColor: 'rgba(255,255,255,0.15)' },
                    '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
                    '&.Mui-focused fieldset': { borderColor: '#d4af37' },
                  },
                  '& .MuiInputLabel-root': { color: 'rgba(255,255,255,0.5)' },
                }}
              />
              <TextField
                fullWidth
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                sx={{
                  mb: 2,
                  bgcolor: 'rgba(255,255,255,0.04)',
                  '& .MuiOutlinedInput-root': {
                    color: '#fff',
                    '& fieldset': { borderColor: 'rgba(255,255,255,0.15)' },
                    '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
                    '&.Mui-focused fieldset': { borderColor: '#d4af37' },
                  },
                  '& .MuiInputLabel-root': { color: 'rgba(255,255,255,0.5)' },
                }}
              />
<Button
                variant="contained"
                fullWidth
                sx={{
                  bgcolor: '#d4af37',
                  color: '#0f172a',
                  fontWeight: 600,
                  py: 1.2,
                  fontSize: '0.75rem',
                  '&:hover': { bgcolor: '#c9a230' },
                }}
              >
                Send Message
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

export default Contact
