import { Box, Container, Typography } from '@mui/material'

function Footer() {
  return (
    <Box
      sx={{
        bgcolor: 'rgba(15, 23, 42, 0.9)',
        backdropFilter: 'blur(8px)',
        color: 'rgba(255,255,255,0.5)',
        py: 3,
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <Container maxWidth="md">
        <Typography variant="body2" textAlign="center" sx={{ letterSpacing: 0.5 }}>
          © 2026 Siddhi Consulting. All rights reserved.
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer
