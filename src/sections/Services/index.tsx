import { Box, Container, Grid, Paper, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import {
  Lightbulb,
  Computer,
  TrendingUp,
} from '@mui/icons-material'
import backgroundImage from '../../assets/home3.jpg'

const services = [
  {
    icon: <Lightbulb sx={{ fontSize: 28, color: '#2d7a4e' }} />,
    title: 'Strategy Consulting',
    description:
      'Develop comprehensive strategies to help your business grow and succeed in competitive markets.',
  },
  {
    icon: <Computer sx={{ fontSize: 28, color: '#2d7a4e' }} />,
    title: 'Technology Solutions',
    description:
      'Implement cutting-edge technology solutions to streamline operations and enhance productivity.',
  },
  {
    icon: <TrendingUp sx={{ fontSize: 28, color: '#2d7a4e' }} />,
    title: 'Business Development',
    description:
      'Assist in expanding your business reach and building strong relationships with clients and partners.',
  },
]

function Services() {
  const navigate = useNavigate()

  return (
    <Box
      id="services"
      sx={{
        position: 'relative',
        py: 10,
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          backgroundImage: `linear-gradient(to bottom, rgba(15,23,42,0.92) 0%, rgba(15,23,42,0.85) 100%), url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
<Typography
            variant="overline"
            sx={{
              color: '#2d7a4e',
              fontWeight: 600,
              letterSpacing: 2,
              fontSize: '0.85rem',
            }}
          >
            Solutions We Deliver
          </Typography>
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            onClick={() => navigate('/services')}
            sx={{
              color: '#fff',
              fontWeight: 700,
              mt: 1,
              textShadow: '0 2px 20px rgba(0,0,0,0.5)',
              cursor: 'pointer',
              '&:hover': { opacity: 0.85 },
            }}
          >
            Our Services
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: 'rgba(255,255,255,0.7)',
              maxWidth: 640,
              mx: 'auto',
              lineHeight: 1.7,
            }}
          >
            Comprehensive consulting services tailored to your unique challenges
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {services.map((service) => (
            <Grid item xs={12} md={4} key={service.title}>
<Paper
                elevation={0}
                onClick={() => navigate('/services')}
                sx={{
                  p: 3,
                  height: '100%',
                  minHeight: 260,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  borderRadius: 3,
                  cursor: 'pointer',
                  bgcolor: 'rgba(255,255,255,0.06)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    bgcolor: 'rgba(255,255,255,0.1)',
                    borderColor: 'rgba(212,175,55,0.4)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                  },
                }}
              >
                <Box
                  sx={{
                    width: 52,
                    height: 52,
                    borderRadius: 3,
                    bgcolor: 'rgba(212,175,55,0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2,
                  }}
                >
                  {service.icon}
                </Box>
                <Typography
                  variant="h5"
                  component="h3"
                  gutterBottom
                  sx={{ color: '#fff', fontWeight: 600, fontSize: '1rem' }}
                >
                  {service.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.65, flex: 1 }}
                >
                  {service.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default Services

