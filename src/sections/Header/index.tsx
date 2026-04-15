import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import logo from '../../assets/logo.jpeg'

function Header() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: '#2d6f82',
        boxShadow: 'none'
      }}
    >
      <Toolbar>
        <Box component={RouterLink} to="/" sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
          <Box component="img" src={logo} alt="Siddhi Consulting logo" sx={{ width: 40, height: 40, mr: 1 }} />
          <Typography variant="h6" component="div" sx={{ color: '#ffc107' }}>
            Siddhi Consulting
            <Typography variant="h5" component="div" sx={{ fontSize: '0.45rem', ml: 0.3, color: '#35310d' }}>
              PEOPLE, PURPOSE, PROGRESS
            </Typography>
          </Typography>
        </Box>
        <Button color="inherit" component={RouterLink} to="/">
          Home
        </Button>
        <Button color="inherit" component={RouterLink} to="/about">
          About
        </Button>
        <Button color="inherit" component={RouterLink} to="/services">
          Services
        </Button>
        <Button color="inherit" component={RouterLink} to="/#contact">
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Header