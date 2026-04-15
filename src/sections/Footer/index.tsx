import { Box, Container, Typography } from '@mui/material'

function Footer() {
  return (
    <Box sx={{ bgcolor: '#2d6f82', color: '#ffffff', py: 2 }}>
      <Container maxWidth="md">
        <Typography variant="body2" textAlign="center">
          © 2026 Siddhi Consulting. All rights reserved.
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer