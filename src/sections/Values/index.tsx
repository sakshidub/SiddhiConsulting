import { Box, Container, Typography, Grid, Paper } from '@mui/material'
import { Favorite, MilitaryTech, Groups, Radar } from '@mui/icons-material'

const values = [
  {
    icon: <Radar sx={{ fontSize: 36, color: '#cb8b23' }} />,
    title: 'Results-driven',
    description: 'We measure success by the tangible outcomes we deliver for our clients.',
  },
  {
    icon: <Favorite sx={{ fontSize: 36, color: '#cb8b23' }} />,
    title: 'Client-focused',
    description: 'Your goals become our goals. We prioritize understanding your unique needs.',
  },
  {
    icon: <MilitaryTech sx={{ fontSize: 36, color: '#cb8b23' }} />,
    title: 'Excellence',
    description: 'We maintain the highest standards in every aspect of our service delivery.',
  },
  {
    icon: <Groups sx={{ fontSize: 36, color: '#cb8b23' }} />,
    title: 'Partnership',
    description: 'We build lasting relationships based on trust, transparency, and mutual success.',
  },
]

function Values() {
  return (
    <Box sx={{ py: 10, bgcolor: '#2d6f82', color: '#fff' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 5 }}>
          <Typography variant="h3" component="h2" gutterBottom sx={{ color: '#fff', fontWeight: 700 }}>
            Our values
          </Typography>
          <Typography variant="subtitle1" sx={{ color: 'rgba(255,255,255,0.9)' }}>
            These principles guide everything we do
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {values.map((value) => (
            <Grid item xs={12} md={6} lg={3} key={value.title}>
              <Paper sx={{ p: 4, borderRadius: 4, minHeight: 280, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', bgcolor: '#f7fbfd', border: '1px solid rgba(255,255,255,0.18)' }} elevation={3}>
                <Box sx={{ width: 72, height: 72, borderRadius: 3, bgcolor: '#e8f2f7', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3 }}>
                  {value.icon}
                </Box>
                <Typography variant="h6" component="h3" gutterBottom sx={{ color: '#1f4f5f', fontWeight: 700 }}>
                  {value.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#4a6973' }}>
                  {value.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default Values
