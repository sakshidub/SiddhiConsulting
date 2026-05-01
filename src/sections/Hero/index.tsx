import { Box, Container, Typography, Button, Stack } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import heroImg from '../../assets/home1.jpg'
import foregroundImg from '../../assets/home5.jpg'

function Hero() {
  const navigate = useNavigate()

  return (
    <Box
      id="home"
      sx={{
        position: 'relative',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        color: 'white',
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          backgroundImage: `linear-gradient(to right, rgba(15,23,42,0.88) 0%, rgba(15,23,42,0.55) 50%, rgba(15,23,42,0.25) 100%), url(${heroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, py: 8 }}>
        
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          alignItems="center"   // 🔥 main fix (same line alignment)
          justifyContent="space-between"
          spacing={4}
        >

          {/* LEFT SIDE */}
          <Box
            sx={{
              maxWidth: 620,
              textAlign: { xs: 'center', md: 'left' },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center', // 🔥 vertical centering
              height: '100%',
            }}
          >

            {/* Heading */}
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: 700,
                lineHeight: 1.2,
                fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.6rem' },
                textShadow: '0 2px 14px rgba(0,0,0,0.45)',
                animation: 'fadeSlideUp 0.9s ease-out 0.15s forwards',
                opacity: 0,
              }}
            >
              Welcome to Siddhi Consulting <br />
              <Box
                component="span"
                sx={{
                  background: 'linear-gradient(90deg, #2d7a4e, #5cb85c)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontSize: '0.9rem',
                }}
              >
                Inspiring Growth, Delivering Results
              </Box>
            </Typography>

            {/* Subheadline */}
            <Typography
              variant="h6"
              component="p"
              gutterBottom
              sx={{
                color: 'rgba(255,255,255,0.82)',
                fontWeight: 400,
                lineHeight: 1.6,
                maxWidth: 520,
                mx: { xs: 'auto', md: 0 },
                textShadow: '0 1px 8px rgba(0,0,0,0.35)',
                animation: 'fadeSlideUp 1s ease-out 0.3s forwards',
                opacity: 0,
                fontSize: { xs: '0.75rem', sm: '0.85rem', md: '0.9rem' },
              }}
            >
              Transforming ideas into actionable strategies that deliver results.
              Supporting your journey toward continuous growth and success.
            </Typography>

            {/* Buttons */}
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={1.5}
              sx={{
                mt: 3,
                justifyContent: { xs: 'center', md: 'flex-start' },
                animation: 'fadeSlideUp 1.05s ease-out 0.45s forwards',
                opacity: 0,
              }}
            >
              <Button
                variant="contained"
                color="primary"
                size="small"
                onClick={() => navigate('/about')}
                sx={{
                  px: 2,
                  py: 0.6,
                  fontWeight: 500,
                  fontSize: '0.8rem',
                  boxShadow: '0 4px 14px rgba(212,175,55,0.35)',
                  '&:hover': {
                    boxShadow: '0 6px 20px rgba(212,175,55,0.5)',
                  },
                }}
              >
                Learn More
              </Button>

              <Button
                variant="outlined"
                size="small"
                onClick={() => navigate('/services')}
                sx={{
                  px: 2,
                  py: 0.6,
                  fontWeight: 500,
                  fontSize: '0.8rem',
                  color: 'white',
                  borderColor: 'rgba(255,255,255,0.45)',
                  '&:hover': {
                    borderColor: 'rgba(255,255,255,0.85)',
                    bgcolor: 'rgba(255,255,255,0.08)',
                  },
                }}
              >
                Our Services
              </Button>
            </Stack>
          </Box>

          {/* RIGHT SIDE IMAGE */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              position: 'relative',
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
              pt: 2,
              animation: 'fadeSlideUp 1.1s ease-out 0.55s forwards',
              opacity: 0,
            }}
          >
            <Box
              component="img"
              src={foregroundImg}
              alt="Consulting"
              sx={{
                width: '100%',
                maxWidth: 900, // 🔥 bigger image
                borderRadius: 3,
                boxShadow: '0 10px 40px rgba(0,0,0,0.4)',
              }}
            />
          </Box>

        </Stack>
      </Container>

      {/* Animation */}
      <style>{`
        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </Box>
  )
}

export default Hero