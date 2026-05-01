import { Box, Container, Typography, Grid } from '@mui/material'
import { Visibility, People, Lightbulb, Verified } from '@mui/icons-material'

const values = [
  {
    icon: <Visibility sx={{ fontSize: 36 }} />,
    title: 'Clarity',
    description:
      'We provide clear insights and actionable recommendations that cut through complexity and drive confident decision-making.',
  },
  {
    icon: <People sx={{ fontSize: 36 }} />,
    title: 'Partnership',
    description:
      'We treat every client relationship as a true partnership, invested in your success and committed to delivering exceptional value.',
  },
  {
    icon: <Lightbulb sx={{ fontSize: 36 }} />,
    title: 'Innovation',
    description:
      'We bring fresh perspectives and creative solutions to your most challenging business problems, helping you stay ahead of the curve.',
  },
  {
    icon: <Verified sx={{ fontSize: 36 }} />,
    title: 'Integrity',
    description:
      'We operate with the highest ethical standards, ensuring transparency and trust in every interaction and recommendation.',
  },
]

function Values() {
  return (
    <Box sx={{ bgcolor: '#0f172a', py: 10 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="overline"
            sx={{
              color: '#d4af37',
              fontWeight: 600,
              letterSpacing: 2,
              fontSize: '0.85rem',
            }}
          >
            Our Core Principles
          </Typography>
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            sx={{
              color: '#fff',
              fontWeight: 700,
              mt: 1,
              textShadow: '0 2px 20px rgba(0,0,0,0.5)',
            }}
          >
            Values That Drive Us
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {values.map((v) => (
            <Grid item xs={12} sm={6} md={3} key={v.title}>
              <Box
                sx={{
                  bgcolor: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: 3,
                  p: 4,
                  textAlign: 'center',
                  height: '100%',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    bgcolor: 'rgba(255,255,255,0.06)',
                    borderColor: 'rgba(212,175,55,0.2)',
                  },
                }}
              >
                <Box
                  sx={{
                    color: '#d4af37',
                    mb: 2,
                    display: 'inline-flex',
                    p: 1.5,
                    borderRadius: '50%',
                    bgcolor: 'rgba(212,175,55,0.1)',
                  }}
                >
                  {v.icon}
                </Box>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ color: '#fff', fontWeight: 600 }}
                >
                  {v.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>
                  {v.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default Values
