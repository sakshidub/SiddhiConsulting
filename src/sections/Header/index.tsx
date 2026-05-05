import { AppBar, Toolbar, Typography, Button, Box, Drawer } from '@mui/material'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { useState } from 'react';
import logo from '../../assets/logo.jpeg';

function Header() {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isActive = (path: string) => location.pathname === path

  const handleMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

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
      <Toolbar
        sx={{
          minHeight: { xs: 56, md: 64 }, // responsive height
          px: { xs: 1, md: 3 }, // padding responsive
        }}
      >

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
            alt="logo"
            sx={{
              width: { xs: 24, md: 30 },
              height: { xs: 24, md: 30 },
              mr: 0.5,
            }}
          />

          {/* Text */}
          <Box sx={{ lineHeight: 1 }}>
            <Typography
              sx={{
                color: '#dff0e6',
                fontWeight: 700,
                fontSize: { xs: '0.6rem', md: '0.7rem' },
              }}
            >
              Siddhi Consulting
            </Typography>

            <Typography
              sx={{
                color: 'rgba(255,255,255,0.6)',
                fontSize: { xs: '0.3rem', md: '0.38rem' },
                letterSpacing: 0.6,
              }}
            >
              PEOPLE, PURPOSE, PROGRESS
            </Typography>
          </Box>
        </Box>

        {/* Nav Links - responsive hamburger on mobile */}
        <Box sx={{ display: 'flex', gap: 1.5, ml: 'auto' }}>
          {/* Desktop */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1.5 }}>
            {navLinks.map((link) => (
              <Button
                key={link.path}
                component={RouterLink}
                to={link.path}
                sx={{
                  fontSize: { xs: '0.65rem', md: '0.75rem' },
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

          {/* Mobile Menu Toggle */}
          <Button
            onClick={handleMenuToggle}
            sx={{
              display: { md: 'none' },
              minWidth: 'auto',
              p: 0.5,
              color: 'white',
              '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' },
            }}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </Button>

          {/* Mobile Menu Drawer */}
          <Drawer
            anchor="right"
            open={mobileMenuOpen}
            onClose={handleMenuToggle}
            sx={{
              display: { md: 'none' },
              '& .MuiDrawer-paper': {
                bgcolor: 'rgba(31, 41, 55, 0.98)',
                width: 280,
              },
            }}
          >
            <Box sx={{ p: 2 }}>
              {navLinks.map((link) => (
                <Button
                  key={link.path}
                  component={RouterLink}
                  to={link.path}
                  fullWidth
                  sx={{
                    justifyContent: 'flex-start',
                    color: isActive(link.path) ? '#d4af37' : 'rgba(255,255,255,0.9)',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    py: 1.2,
                    borderRadius: 1,
                    mb: 0.5,
                    '&::after': isActive(link.path) ? {
                      content: '""',
                      position: 'absolute',
                      right: 12,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: 4,
                      height: 4,
                      bgcolor: '#d4af37',
                      borderRadius: '50%',
                    } : {},
                    '&:hover': {
                      bgcolor: 'rgba(255,255,255,0.08)',
                      color: '#d4af37',
                    },
                  }}
                  onClick={handleMenuToggle}
                >
                  {link.label}
                </Button>
              ))}
            </Box>
          </Drawer>
        </Box>

      </Toolbar>
    </AppBar>
  )
}

export default Header