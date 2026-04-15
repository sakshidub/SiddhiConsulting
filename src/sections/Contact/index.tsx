import { Container, Grid, Box, Typography, IconButton, TextField, Button } from '@mui/material'
import { Email, Phone, LocationOn } from '@mui/icons-material'

function Contact() {
  return (
    <Container id="contact" maxWidth="md" sx={{ py: 8, bgcolor: '#eaf5f8', borderRadius: 4, boxShadow: '0 20px 45px rgba(45, 111, 130, 0.12)' }}>
      <Typography variant="h3" component="h2" gutterBottom textAlign="center" sx={{ color: '#2d6f82' }}>
        Contact Us
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom sx={{ color: '#1f4f5f' }}>
            Get in Touch
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <IconButton sx={{ bgcolor: '#2d6f82', color: '#ffffff', mr: 1, '&:hover': { bgcolor: '#254f64' } }}>
              <Email />
            </IconButton>
            <Typography variant="body1" sx={{ color: '#1f4f5f' }}>siddhiconsultings@gmail.com</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <IconButton sx={{ bgcolor: '#2d6f82', color: '#ffffff', mr: 1, '&:hover': { bgcolor: '#254f64' } }}>
              <Phone />
            </IconButton>
            <Typography variant="body1" sx={{ color: '#1f4f5f' }}>+91 99050 64954</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <IconButton sx={{ bgcolor: '#2d6f82', color: '#ffffff', mr: 1, '&:hover': { bgcolor: '#254f64' } }}>
              <LocationOn />
            </IconButton>
            <Typography variant="body1" sx={{ color: '#1f4f5f' }}>B-8 second floor, Sector-2, Noida, UP 201301</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField fullWidth label="Name" variant="outlined" sx={{ mb: 2, bgcolor: '#ffffff' }} />
          <TextField fullWidth label="Email" variant="outlined" sx={{ mb: 2, bgcolor: '#ffffff' }} />
          <TextField fullWidth label="Message" variant="outlined" multiline rows={4} sx={{ mb: 2, bgcolor: '#ffffff' }} />
          <Button variant="contained" sx={{ bgcolor: '#2d6f82', '&:hover': { bgcolor: '#254f64' } }} fullWidth>
            Send Message
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Contact