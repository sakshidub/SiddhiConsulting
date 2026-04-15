import Header from '../sections/Header'
import About from '../sections/About'
import Values from '../sections/Values'
import Footer from '../sections/Footer'
import { Box, Container, Typography } from '@mui/material'

function AboutPage() {
  return (
    <>
      <Header />
      <About />
      <Values />
      <Box sx={{ py: 8, bgcolor: '#f7fafc' }}>
        <Container maxWidth="md">
          <Typography variant="h4" component="h2" gutterBottom sx={{ color: '#2c6f7c', fontWeight: 700 }}>
            Our story
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: '#425665', lineHeight: 1.8 }}>
            Siddhi Consulting was founded with a simple observation: businesses needed a partner who truly understood both the human side of talent acquisition and the strategic complexity of company transactions.
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: '#425665', lineHeight: 1.8 }}>
            What started as a small consulting practice has grown into a trusted advisor for companies across multiple industries. Our success comes from staying true to our core belief that every client deserves personalized attention and expert guidance.
          </Typography>
          <Typography variant="body1" sx={{ color: '#425665', lineHeight: 1.8 }}>
            Today, we continue to expand our capabilities while maintaining the boutique service quality that our clients value. We measure our success not just in completed transactions, but in the lasting relationships we build and the positive impact we create.
          </Typography>
        </Container>
      </Box>
      <Footer />
    </>
  )
}

export default AboutPage
