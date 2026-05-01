import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import logo from '../../assets/logo.jpeg'

function Header() {
  const location = useLocation()
  const isActive = (path: string) => location.pathname === path

  const navLinks = [
    { label: 'HOME', path: '/' },
    { label: 'ABOUT', path: '/about' },
    { label: 'SERVICES', path: '/services' },
    { label: 'EXPERTISE', path: '/expertise' },
    { label: 'CONTACT', path: '/contact' },
  ]

  return (
    <AppBar
      position="static"
      sx={{
        background: 'rgba(31, 41, 55, 0.85)',
        backdropFilter: 'blur(10px)',
        boxShadow: 'none',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
      }}
    >
      <Toolbar sx={{ minHeight: 64 }}>

        {/* Logo + Text */}
        <Box
          component={RouterLink}
          to="/"
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexGrow: 1,
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          {/* Logo */}
          <Box
            component="img"
            src={logo}
            alt="Siddhi Consulting logo"
            sx={{
              width: 30,
              height: 30,
              mr: 0.3,
            }}
          />

          {/* Text */}
          <Box sx={{ lineHeight: 1 }}>
            <Typography
              sx={{
                color: '#dff0e6',
                fontWeight: 700,
                fontSize: '0.7rem',
                lineHeight: 1.1,
                m: 0,
              }}
            >
              Siddhi Consulting
            </Typography>

            <Typography
              sx={{
                color: 'rgba(255,255,255,0.6)',
                fontSize: '0.38rem', // 👈 reduced tagline size
                letterSpacing: 0.6,
                m: 0,
              }}
            >
              PEOPLE, PURPOSE, PROGRESS
            </Typography>
          </Box>
        </Box>

        {/* Nav Links */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1.5 }}>
          {navLinks.map((link) => (
            <Button
              key={link.path}
              component={RouterLink}
              to={link.path}
              sx={{
                fontSize: '0.75rem',
                color: isActive(link.path)
                  ? '#d4af37'
                  : 'rgba(255,255,255,0.85)',
                fontWeight: 600,
                letterSpacing: 0.4,
                position: 'relative',

                '&::after': isActive(link.path)
                  ? {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '100%',
                      height: '2px',
                      backgroundColor: '#d4af37',
                    }
                  : {},

                '&:hover': {
                  color: '#d4af37',
                  backgroundColor: 'transparent',
                },
              }}
            >
              {link.label}
            </Button>
          ))}
        </Box>

      </Toolbar>
    </AppBar>
  )
}

export default Header