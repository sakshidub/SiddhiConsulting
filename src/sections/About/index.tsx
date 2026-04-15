import { Container, Typography, Box, Grid } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import aboutImage from '../../assets/aboutimage.jpg'

function About() {
  const navigate = useNavigate()

  return (
    <Box id="about" className="about-animate" sx={{ py: 8, bgcolor: '#edce96' }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 4, textAlign: 'center', cursor: 'pointer' }} onClick={() => navigate('/about')}>
          <Typography variant="h3" component="h2" gutterBottom sx={{ color: '#2c6f7c' }}>
            About Us
          </Typography>
          <Typography variant="subtitle1" sx={{ color: '#291f08' }}>
            Building bridges between talent and opportunity, companies and growth
          </Typography>
        </Box>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box component="img" src={aboutImage} alt="About Siddhi Consulting" sx={{ width: '100%', borderRadius: 3, boxShadow: 6, border: '4px solid #ffca28' }} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 4, bgcolor: '#be9c4b', borderRadius: 3, boxShadow: 3, border: '1px solid #ffecb3' }}>
              <Typography variant="body1" paragraph sx={{ color: '#263238' }}>
                At Siddhi Consulting, we exist to help businesses thrive through strategic talent acquisition and smart company transactions. We believe that the right people and the right partnerships are the foundation of sustainable growth.
              </Typography>
              <Typography variant="body1" paragraph sx={{ color: '#020e14' }}>
                Since our founding, we have helped hundreds of companies find exceptional talent and navigate complex acquisitions. Our approach combines deep industry knowledge with personalized service, ensuring that every engagement delivers measurable value.
              </Typography>
              <Typography variant="body2" sx={{ color: '#bf360c', fontWeight: 600 }}>
                Trusted. Strategic. Forward-thinking.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default About