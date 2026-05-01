import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material'
import WorkOutlineIcon from '@mui/icons-material/WorkOutline'
import GroupsIcon from '@mui/icons-material/Groups'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import SchoolIcon from '@mui/icons-material/School'
import EventIcon from '@mui/icons-material/Event'
import LocationOnIcon from '@mui/icons-material/LocationOn'

const services = [
  { title: 'Permanent Staffing', icon: <WorkOutlineIcon fontSize="large" /> },
  { title: 'Contract Staffing', icon: <BusinessCenterIcon fontSize="large" /> },
  { title: 'Walk-ins', icon: <GroupsIcon fontSize="large" /> },
  { title: 'Campus Recruitment', icon: <SchoolIcon fontSize="large" /> },
  { title: 'Onsite Recruitment', icon: <LocationOnIcon fontSize="large" /> },
  { title: 'Job Fair', icon: <EventIcon fontSize="large" /> },
]

function Approach() {
  return (
    <Box
      sx={{
        position: 'relative',
        py: 10,
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          backgroundImage: `linear-gradient(to bottom, rgba(15,23,42,0.92), rgba(15,23,42,0.88)), url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        
        {/* TOP CONTENT */}
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="overline"
              sx={{ color: '#d4af37', fontWeight: 600, letterSpacing: 2, fontSize: '0.7rem' }}
            >
              How We Work
            </Typography>

            <Typography
              variant="h4"
              sx={{ color: '#fff', fontWeight: 700, mt: 1, fontSize: '1.4rem' }}
            >
              Collaborative approach to every engagement
            </Typography>

            <Typography sx={{ color: 'rgba(255,255,255,0.8)', mt: 2, fontSize: '0.8rem' }}>
              We believe the best results are achieved through true partnership. We work closely with clients to deliver scalable hiring solutions.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop"
              alt="Team"
              sx={{ width: '100%', borderRadius: 3 }}
            />
          </Grid>
        </Grid>

        {/* SERVICES SECTION */}
        <Box sx={{ mt: 10 }}>
          <Typography
            variant="h5"
            sx={{ color: '#fff', textAlign: 'center', fontWeight: 700, mb: 6 }}
          >
            Our Recruitment Services
          </Typography>

          <Grid container spacing={4}>
            {services.map((service, index) => (
<Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    textAlign: 'center',
                    p: 1.5,
                    borderRadius: 1.5,
                    background: 'rgba(255,255,255,0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: '#fff',
                    transition: 'all 0.4s ease',
                    '&:hover': {
                      transform: 'translateY(-10px) scale(1.03)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                    },
                  }}
                >
                  <CardContent sx={{ p: '6px !important' }}>
                    <Box
                      sx={{
                        mb: 0.5,
                        display: 'flex',
                        justifyContent: 'center',
                        color: '#d4af37',
                        '& svg': { fontSize: 22 },
                      }}
                    >
                      {service.icon}
                    </Box>

                    <Typography variant="caption" sx={{ fontWeight: 600, fontSize: '0.65rem' }}>
                      {service.title}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

      </Container>
    </Box>
  )
}

export default Approach