import Header from '../sections/Header'
import Contact from '../sections/Contact'
import Footer from '../sections/Footer'
import { Box, Container, Typography } from '@mui/material'

function ContactPage() {
  return (
    <>
      <Header />
      <Box sx={{ py: 8, bgcolor: '#f5f5f5', textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h3" component="h1" gutterBottom sx={{ color: '#2c6f7c', fontWeight: 700 }}>
            Let's start a conversation
          </Typography>
          <Typography variant="h6" sx={{ color: '#425665', fontWeight: 400 }}>
            Share your needs and we'll get back to you within one business day
          </Typography>
        </Container>
      </Box>
      <Contact />
      <Footer />
    </>
  )
}

export default ContactPage
