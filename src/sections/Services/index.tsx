import { Box, Container, Grid, Card, CardContent, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function Services() {
  const navigate = useNavigate()

  const handleCardClick = () => {
    navigate('/')
  }

  return (
    <Box sx={{ bgcolor: '#e8f4f8', py: 10 }}>
      <Container id="services" maxWidth="lg">
        <Typography variant="h3" component="h2" gutterBottom textAlign="center" sx={{ color: '#2d6f82', cursor: 'pointer', '&:hover': { opacity: 0.8 } }} onClick={() => navigate('/services')}>
          Our Services
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card onClick={handleCardClick} sx={{ bgcolor: '#ffffff', borderRadius: 3, boxShadow: '0 20px 45px rgba(0, 0, 0, 0.15)', cursor: 'pointer', transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 25px 50px rgba(0, 0, 0, 0.2)' } }}>
              <CardContent>
                <Typography variant="h5" component="h3" gutterBottom sx={{ color: '#0d47a1' }}>
                  Strategy Consulting
                </Typography>
                <Typography variant="body2" sx={{ color: '#424242' }}>
                  Develop comprehensive strategies to help your business grow and succeed in competitive markets.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card onClick={handleCardClick} sx={{ bgcolor: '#ffffff', borderRadius: 3, boxShadow: '0 20px 45px rgba(0, 0, 0, 0.15)', cursor: 'pointer', transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 25px 50px rgba(0, 0, 0, 0.2)' } }}>
              <CardContent>
                <Typography variant="h5" component="h3" gutterBottom sx={{ color: '#0d47a1' }}>
                  Technology Solutions
                </Typography>
                <Typography variant="body2" sx={{ color: '#424242' }}>
                  Implement cutting-edge technology solutions to streamline operations and enhance productivity.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card onClick={handleCardClick} sx={{ bgcolor: '#ffffff', borderRadius: 3, boxShadow: '0 20px 45px rgba(0, 0, 0, 0.15)', cursor: 'pointer', transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 25px 50px rgba(0, 0, 0, 0.2)' } }}>
              <CardContent>
                <Typography variant="h5" component="h3" gutterBottom sx={{ color: '#0d47a1' }}>
                  Business Development
                </Typography>
                <Typography variant="body2" sx={{ color: '#424242' }}>
                  Assist in expanding your business reach and building strong relationships with clients and partners.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Services