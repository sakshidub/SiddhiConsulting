import { Box, Container, Typography, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.jpeg'
import heroImg from '../../assets/imagehome.jpg'

function Hero() {
  const navigate = useNavigate()

  return (
    <Box
      id="home"
      sx={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${heroImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        color: 'white'
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: 'center', zIndex: 1 }}>
        <Box sx={{ display: 'inline-flex', alignItems: 'center', bgcolor: 'rgba(255,255,255,0.16)', px: 2, py: 1, borderRadius: 2, mb: 3, mx: 'auto' }}>
          <Box component="img" src={logo} alt="Siddhi Consulting logo" sx={{ width: 32, height: 32, mr: 1 }} />
          <Typography variant="subtitle1">Siddhi Consulting</Typography>
        </Box>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to Siddhi Consulting
        </Typography>
        <Typography variant="h5" component="p" gutterBottom>
          Your trusted partner for innovative solutions and expert consulting services.
        </Typography>
        <Button variant="contained" color="secondary" size="large" onClick={() => navigate('/about')}>
          Learn More
        </Button>
      </Container>
    </Box>
  )
}

export default Hero