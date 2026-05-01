import { Container, Typography, Box, Grid, Paper } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import backgroundImage from '../../assets/home3.jpg'
import contentImage from '../../assets/aboutimage.jpg'

function About() {
  const navigate = useNavigate()

  return (
    <Box
      id="about"
      sx={{
        position: 'relative',
        py: 8,
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          backgroundImage: `linear-gradient(to bottom, rgba(15,23,42,0.9) 0%, rgba(15,23,42,0.82) 100%), url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        
        {/* HEADER */}
        <Box sx={{ mb: 4, textAlign: 'center' }}>
          
          <Typography
            variant="overline"
            sx={{
              color: '#d4af37',
              fontWeight: 600,
              letterSpacing: 2,
              fontSize: '0.7rem',
              mb: 0.3,
            }}
          >
            WHO WE ARE
          </Typography>

          <Typography
            variant="h3"
            component="h2"
            onClick={() => navigate('/about')}
            sx={{
              color: '#fff',
              fontWeight: 700,
              mt: 0.3,
              mb: 0.5,
              fontSize: { xs: '1.5rem', md: '2rem' },
              cursor: 'pointer',
              '&:hover': { opacity: 0.85 },
            }}
          >
            About Us
          </Typography>

<Typography
            variant="subtitle1"
            sx={{
              color: 'rgba(255,255,255,0.7)',
              maxWidth: 600,
              mx: 'auto',
              lineHeight: 1.6,
              fontSize: '0.85rem',
            }}
          >
            Building bridges between talent and opportunity, companies and growth
          </Typography>
        </Box>

        {/* CONTENT */}
        <Grid container spacing={4} alignItems="center">
          
          {/* IMAGE */}
          <Grid item xs={12} md={7}>
            <Box
              component="img"
              src={contentImage}
              alt="About Siddhi Consulting"
              sx={{
                width: '100%',
                height: 420,
                objectFit: 'cover',
                borderRadius: 3,
                boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
                transition: 'all 0.4s ease',

                '&:hover': {
                  transform: 'scale(1.05) translateY(-8px)', // 🔥 zoom + lift
                  boxShadow: '0 30px 80px rgba(0,0,0,0.6)',
                },
              }}
            />
          </Grid>

{/* CARD */}
          <Grid item xs={12} md={5}>
            <Paper
              elevation={0}
              onClick={() => navigate('/about')}
              sx={{
                p: 3,
                borderRadius: 3,
                bgcolor: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.08)',
                cursor: 'pointer',
                transition: 'all 0.4s ease',

                '&:hover': {
                  transform: 'translateY(-8px)', // 🔥 lift
                  bgcolor: 'rgba(255,255,255,0.08)',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                  border: '1px solid rgba(212,175,55,0.4)', // 🔥 glow
                },
              }}
            >
              <Typography
                variant="body2"
                paragraph
                sx={{
                  color: 'rgba(255,255,255,0.85)',
                  lineHeight: 1.7,
                  fontSize: '0.8rem',
                }}
              >
                At Siddhi Consulting, we help businesses grow through smart talent acquisition and strategic business deals. We believe the right people and strong partnerships are the foundation of long-term success.
              </Typography>

              <Typography
                variant="body2"
                paragraph
                sx={{
                  color: 'rgba(255,255,255,0.85)',
                  lineHeight: 1.7,
                  fontSize: '0.8rem',
                }}
              >
                We have supported many companies in hiring exceptional talent and navigating complex acquisitions with ease. Our approach blends deep industry expertise with personalized service to deliver real, measurable results.
              </Typography>

              <Typography
                variant="caption"
                sx={{
                  color: '#d4af37',
                  fontWeight: 600,
                }}
              >
                Trusted. Strategic. Growth-focused.
              </Typography>
            </Paper>
          </Grid>

        </Grid>
      </Container>
    </Box>
  )
}

export default About