import { Box, Container, Typography, Grid } from '@mui/material'

function Approach() {
  return (
    <Box sx={{ py: 10, bgcolor: '#ffffff' }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h3" component="h2" gutterBottom sx={{ color: '#2c6f7c', fontWeight: 700 }}>
              Collaborative approach<br />to every engagement
            </Typography>
            <Typography variant="body1" paragraph sx={{ color: '#425665', lineHeight: 1.8, mt: 2 }}>
              We believe the best results come from true partnership. Our team works closely with you to understand your unique challenges and objectives.
            </Typography>
            <Typography variant="body1" paragraph sx={{ color: '#425665', lineHeight: 1.8 }}>
              From initial consultation through successful completion, we maintain transparent communication and provide regular updates on progress and milestones.
            </Typography>
            <Typography variant="h6" sx={{ color: '#2c6f7c', fontWeight: 700, mt: 3 }}>
              Let's start collaborating 🤝
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
              alt="Team collaboration"
              sx={{ width: '100%', borderRadius: 3, boxShadow: 6 }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Approach
