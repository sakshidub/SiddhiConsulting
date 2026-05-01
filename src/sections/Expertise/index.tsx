import { Box, Container, Grid, Paper, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import WorkIcon from "@mui/icons-material/Work";
import {
  PersonSearch,
  Group,
  RocketLaunch,
  Description,
  Campaign,
  Event,
  Assignment,
} from '@mui/icons-material'

const expertiseAreas = [
  {
    icon: <PersonSearch sx={{ fontSize: 18, color: '#2d7a4e' }} />,
    title: 'Talent Acquisition',
    description: 'We help you hire the right talent quickly, from entry-level to leadership roles.',
  },
  {
    icon: <Group sx={{ fontSize: 18, color: '#2d7a4e' }} />,
    title: 'Bulk Hiring',
    description: 'Fast and efficient hiring for companies looking to scale their teams quickly.',
  },
  {
    icon: <RocketLaunch sx={{ fontSize: 18, color: '#2d7a4e' }} />,
    title: 'Startup Hiring',
    description: 'Helping startups build their first strong team with the right culture fit.',
  },
  {
    icon: <WorkIcon sx={{ fontSize: 18, color: '#2d7a4e' }} />,
    title: 'HR Consulting',
    description: 'Basic HR setup, hiring process design, and onboarding support for growing companies.',
  },
  {
    icon: <Description sx={{ fontSize: 18, color: '#2d7a4e' }} />,
    title: 'Resume Screening',
    description: 'We filter and shortlist the best candidates to save your time and effort.',
  },
  {
    icon: <Campaign sx={{ fontSize: 18, color: '#2d7a4e' }} />,
    title: 'Employer Branding',
    description: 'Helping companies present themselves better to attract top talent.',
  },
  {
    icon: <Event sx={{ fontSize: 18, color: '#2d7a4e' }} />,
    title: 'Interview Coordination',
    description: 'End-to-end interview scheduling and candidate coordination.',
  },
  {
    icon: <Assignment sx={{ fontSize: 18, color: '#2d7a4e' }} />,
    title: 'Contract Staffing',
    description: 'Flexible staffing solutions for short-term and project-based needs.',
  },
]

function Expertise() {
  const navigate = useNavigate()

  return (
    <Box
      id="expertise"
      sx={{
        position: 'relative',
        py: 10,
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.85) 100%), url('/src/assets/imagehome.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          zIndex: 0,
        },

      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
<Box sx={{ textAlign: 'center', mb: 4 }}>
<Typography
            variant="overline"
            sx={{
              color: '#2d7a4e',
              fontWeight: 600,
              letterSpacing: 2,
              fontSize: '0.7rem',
            }}
          >
            What We Do Best
          </Typography>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{
              color: '#0f172a',
              fontWeight: 700,
              mt: 0.5,
              fontSize: '1.1rem',
            }}
          >
            Our Expertise
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: 'rgba(15,23,42,0.8)',
              maxWidth: 540,
              mx: 'auto',
              lineHeight: 1.5,
              fontSize: '0.75rem',
            }}
          >
            Decades of combined experience across industries, delivering
            transformative results for businesses at every stage of growth.
          </Typography>

        </Box>

        <Grid container spacing={3}>
          {expertiseAreas.map((area) => (
<Grid item xs={12} sm={6} lg={3} key={area.title}>
<Paper
                elevation={0}
                onClick={() => navigate('/expertise')}
                sx={{
                  p: 1.5,
                  height: '100%',
                  minHeight: 180,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  borderRadius: 2,
                  cursor: 'pointer',
                  bgcolor: 'rgba(15,23,42,0.3)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(15,23,42,0.4)',

                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    bgcolor: 'rgba(15,23,42,0.4)',
                    borderColor: 'rgba(212,175,55,0.4)',

                    boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
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
                    mb: 1,
                  }}
                >
                  {area.icon}
                </Box>
                <Typography
                  variant="body2"
                  component="h3"
                  gutterBottom
                  sx={{ color: '#0f172a', fontWeight: 600, fontSize: '0.7rem' }}
                >
                  {area.title}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: 'rgba(15,23,42,0.8)', lineHeight: 1.4, flex: 1, fontSize: '0.6rem' }}
                >
                  {area.description}
                </Typography>
              </Paper>

            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default Expertise

