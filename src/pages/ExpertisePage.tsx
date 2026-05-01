import Header from '../sections/Header'
import Expertise from '../sections/Expertise'
import Footer from '../sections/Footer'
import { Box, Container, Typography, Grid, Paper } from '@mui/material'
import {
  Verified,
  EmojiEvents,
  Speed,
  Security,
} from '@mui/icons-material'

const differentiators = [
  {
    icon: <Verified sx={{ fontSize: 22, color: '#d4af37' }} />,
    title: 'Growing Track Record',
    description: 'Successfully supporting startups and small businesses with the right talent to scale quickly and efficiently.',
  },
  {
    icon: <EmojiEvents sx={{ fontSize: 22, color: '#d4af37' }} />,
    title: 'Client-Focused Approach',
    description: 'We work closely with every client to understand their needs and deliver tailored hiring solutions that actually work.',
  },
  {
    icon: <Speed sx={{ fontSize: 22, color: '#d4af37' }} />,
    title: 'Fast & Flexible Hiring',
    description: 'Quick turnaround times to help you hire the right people without delays or complex processes.',
  },
  {
    icon: <Security sx={{ fontSize: 22, color: '#d4af37' }} />,
    title: 'Trusted & Transparent',
    description: 'We believe in clear communication, honest processes, and building long-term relationships.',
  },
]

const industries = [
  'Information Technology',
  'BPO / KPO / RPO',
  'Software & Networking',
  'Telecommunications',
  'Human Resource / Recruitment',
  'Training',
  'Admin & Support',
  'Infrastructure',
  'FMCG',
  'Insurance',
  'Real Estate',
]

function ExpertisePage() {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />

      <Box sx={{ flex: 1 }}>

        {/* 🔥 INDUSTRIES HERO SECTION */}
        <Box
          sx={{
            position: 'relative',
            height: { xs: 320, md: 420 },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            color: '#fff',
            overflow: 'hidden',
          }}
        >
          {/* Background Image */}
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url('/src/assets/imagehome.jpg')`, // 👉 replace with your image
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'blur(3px)',
              transform: 'scale(1.05)',
            }}
          />

          {/* Overlay */}
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(0,0,0,0.65)',
            }}
          />

          {/* Content */}
          <Container sx={{ position: 'relative', zIndex: 2 }}>
            <Typography
              variant="h4"
              sx={{ fontWeight: 700, mb: 4 }}
            >
              Industries We Serve
            </Typography>

            {/* ✅ PERFECT ALIGNMENT GRID */}
            <Grid container spacing={2} justifyContent="center">
              {industries.map((item, index) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={3}
                  key={index}
                  sx={{ textAlign: 'center' }}
                >
                  <Typography
                    sx={{
                      fontSize: '0.95rem',
                      opacity: 0.95,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    • {item}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Page Intro */}
        <Box sx={{ py: 6, textAlign: 'center' }}>
          <Container maxWidth="md">
            <Typography
              variant="overline"
              sx={{
                color: '#d4af37',
                fontWeight: 600,
                letterSpacing: 2,
                fontSize: '0.7rem',
              }}
            >
              Our Core Competencies
            </Typography>

            <Typography
              variant="h4"
              sx={{
                color: '#0f172a',
                fontWeight: 700,
                mt: 1,
                fontSize: '1.4rem',
              }}
            >
              Why Clients Trust Siddhi Consulting
            </Typography>

            <Typography
              sx={{
                color: 'rgba(15,23,42,0.8)',
                maxWidth: 540,
                mx: 'auto',
                fontSize: '0.85rem',
                mt: 1,
              }}
            >
              We help businesses grow faster by connecting them with the right talent using smart, flexible hiring solutions.
            </Typography>
          </Container>
        </Box>

        {/* Differentiators */}
        <Container maxWidth="lg" sx={{ pb: 6 }}>
          <Grid container spacing={2}>
            {differentiators.map((item) => (
              <Grid item xs={12} md={6} key={item.title}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 2,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    borderRadius: 2,
                    bgcolor: 'rgba(15,23,42,0.4)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(15,23,42,0.5)',
                    transition: '0.3s',
                    '&:hover': {
                      bgcolor: 'rgba(15,23,42,0.5)',
                      borderColor: 'rgba(212,175,55,0.3)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 36,
                      height: 36,
                      borderRadius: 1.5,
                      bgcolor: 'rgba(212,175,55,0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {item.icon}
                  </Box>

                  <Box>
                    <Typography
                      sx={{ color: '#0f172a', fontWeight: 600, fontSize: '0.85rem' }}
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      sx={{ color: 'rgba(15,23,42,0.8)', fontSize: '0.75rem' }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>

        <Expertise />
      </Box>

      <Footer />
    </Box>
  )
}

export default ExpertisePage