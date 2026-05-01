import Header from '../sections/Header'
import About from '../sections/About'
import Footer from '../sections/Footer'
import { Box, Container, Typography, Grid, Paper } from '@mui/material'

function AboutPage() {
  const values = [
    {
      icon: '👁️',
      title: 'Clarity',
      desc: 'Clear insights and actionable recommendations.',
    },
    {
      icon: '👥',
      title: 'Partnership',
      desc: 'Strong client relationships with real value.',
    },
    {
      icon: '💡',
      title: 'Innovation',
      desc: 'Creative solutions for business growth.',
    },
    {
      icon: '✔️',
      title: 'Integrity',
      desc: 'Trust and transparency in everything.',
    },
  ]

  return (
    <>
      <Header />
      <About />

      {/* VALUES SECTION */}
      <Box sx={{ py: 6, bgcolor: '#0f172a' }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={5}>
            <Typography
              sx={{
                color: '#d4af37',
                fontSize: '0.7rem',
                letterSpacing: 2,
              }}
            >
              OUR CORE PRINCIPLES
            </Typography>

            <Typography
              variant="h4"
              sx={{
                color: '#fff',
                fontWeight: 600,
                mt: 1,
              }}
            >
              Values That Drive Us
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {values.map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Paper
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    textAlign: 'center',
                    bgcolor: '#1e293b',
                    transition: '0.3s',
                    cursor: 'pointer',

                    '&:hover': {
                      transform: 'translateY(-10px)',
                      boxShadow: '0 15px 40px rgba(0,0,0,0.5)',
                    },
                  }}
                >
                  {/* ICON */}
                  <Box
                    sx={{
                      width: 50,
                      height: 50,
                      mx: 'auto',
                      mb: 2,
                      borderRadius: '50%',
                      bgcolor: 'rgba(212,175,55,0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 22,
                      color: '#d4af37',
                    }}
                  >
                    {item.icon}
                  </Box>

                  {/* TITLE */}
                  <Typography
                    sx={{
                      color: '#fff',
                      fontSize: '1rem',
                      mb: 1,
                    }}
                  >
                    {item.title}
                  </Typography>

                  {/* DESC */}
                  <Typography
                    sx={{
                      color: 'rgba(255,255,255,0.7)',
                      fontSize: '0.85rem',
                      lineHeight: 3,
                    }}
                  >
                    {item.desc}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* OUR STORY SECTION */}
      <Box
        sx={{
          position: 'relative',
          py: 6,
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            backgroundImage: `linear-gradient(to bottom, rgba(15,23,42,0.93), rgba(15,23,42,0.88)), url('/src/assets/home2.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            zIndex: 0,
          },
        }}
      >
        <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 1 }}>
          <Box
            sx={{
              bgcolor: 'rgba(255,255,255,0.04)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 3,
              p: { xs: 3, md: 4 },
              boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
              transition: '0.3s',

              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
              },
            }}
          >
            <Typography
              sx={{
                color: '#d4af37',
                fontSize: '0.7rem',
                letterSpacing: 1.5,
              }}
            >
              OUR JOURNEY
            </Typography>

            <Typography
              variant="h4"
              sx={{
                color: '#fff',
                fontWeight: 600,
                mt: 1,
              }}
            >
              Our Story
            </Typography>

            <Typography
              sx={{
                color: 'rgba(255,255,255,0.75)',
                fontSize: '0.9rem',
                lineHeight: 1.6,
                mt: 2,
              }}
            >
              Siddhi Consulting is a trusted, results-driven firm that helps businesses grow, adapt, and stay competitive in a dynamic market. We provide tailored strategic solutions aligned with each client's unique goals and challenges.
            </Typography>

            <Typography
              sx={{
                color: 'rgba(255,255,255,0.75)',
                fontSize: '0.9rem',
                lineHeight: 1.6,
              }}
            >
             Our experienced consultants combine deep industry knowledge with practical expertise to identify opportunities, solve complex problems, and deliver actionable strategies that create real, measurable impact.
            </Typography>

            <Typography
              sx={{
                color: 'rgba(255,255,255,0.75)',
                fontSize: '0.9rem',
                lineHeight: 1.6,
              }}
            >
              We go beyond planning by supporting clients through execution, ensuring effective implementation and sustainable results. Focused on trust, transparency, and collaboration, we aim to build long-term partnerships and support your business at every stage of its growth.
            </Typography>
          </Box>
        </Container>
      </Box>

      <Footer />
    </>
  )
}

export default AboutPage