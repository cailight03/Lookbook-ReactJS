import React from 'react';
import { Link } from 'react-router-dom'; 
import { AppBar, Toolbar, Button, Box, Typography } from '@mui/material';
import logo from '../icons/henkel-logo.png';
import { useNavigate } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';  // Import the dropdown icon

const Header = () => {
  const navigate = useNavigate();
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: 'rgba(59, 59, 59, 0.37)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        color: 'white',
        fontFamily: "'Moulpali', sans-serif",
        boxShadow: '0 4px 12px rgba(0, 0, 0, .5)',
      }}>
      <Toolbar sx={{ justifyContent: 'space-between', height: '50px' }}>
        <Box display="flex" alignItems="center" gap={2}>
          <img src={logo} alt="Henkel Logo" height={40} />
        </Box>

        <Box display="flex" gap={5}>
          <Button
            sx={{
              color: 'white',
              fontFamily: "'Moulpali', sans-serif",
              fontSize: '1rem',
              transition: 'all 0.3s ease-in-out',
              borderBottom: '2px solid transparent',
              borderRadius: 0,  // Ensures no curve on the button itself
              '&:hover': {
                color: '#fff',
                textShadow: '0 0 1px rgba(255,255,255,0.8)',
                borderBottom: '2px solid #C32A2A',
              },
            }} onClick={() => navigate('/')}>
            Home
          </Button>

          <Button
            sx={{
              color: 'white',
              fontFamily: "'Moulpali', sans-serif",
              fontSize: '1rem',
              transition: 'all 0.3s ease-in-out',
              borderBottom: '2px solid transparent',
              borderRadius: 0,  // Ensures no curve on the button itself
              '&:hover': {
                color: '#fff',
                textShadow: '0 0 1px rgba(255,255,255,0.8)',
                borderBottom: '2px solid #C32A2A',
              },
            }}>
            About Us
          </Button>

          {/* Teams with dropdown */}
          <Box
            sx={{
              position: 'relative',
              '&:hover .dropdown': {
                display: 'block',
              },
            }}>
            <Button
              sx={{
                color: 'white',
                fontFamily: "'Moulpali', sans-serif",
                fontSize: '1rem',
                transition: 'all 0.3s ease-in-out',
                borderBottom: '2px solid transparent',
                borderRadius: 0,  // Ensures no curve on the button itself
                '&:hover': {
                  color: '#fff',
                  textShadow: '0 0 1px rgba(255,255,255,0.8)',
                  borderBottom: '2px solid #C32A2A',
                },
              }}>
              Teams <ArrowDropDownIcon sx={{ fontSize: 20, ml: .01 }} />
            </Button>

            <Box
              className="dropdown"
              sx={{
                display: 'none',
                position: 'absolute',
                top: '100%',
                left: 0,
                bgcolor: 'rgba(59, 59, 59, 0.37)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                fontFamily: "'Moulpali', sans-serif",
                boxShadow: '0 4px 12px rgba(0, 0, 0, .3)',
                px: 2,
                py: 1,
                borderRadius: 1,
                zIndex: 1,
                minWidth: '175px',
              }}>
              {[
                  { name: 'Digital Support', path: '/' },
                  { name: 'WebStudio', path: '#' },
                  { name: 'Market Intelligence', path: '#' },
                  { name: 'Reporting & Advanced Analytics', path: '#' },
                  { name: 'Sales Excellence Support', path: '#' },
                  { name: 'Order & Budget', path: '#' },
                  { name: 'Consumer Care', path: '/consumer-care' },
                  { name: 'Community Management', path: '#' },
                  { name: 'Review Management', path: '#' },
              ].map((team) => (
                <Typography
                  key={team.name}
                  component={Link}
                  to={team.path}
                  sx={{
                    fontSize: '0.9rem',
                    py: 1,
                    display: 'block', // ⬅️ Ensures each item takes a full line
    color: 'inherit',
    textDecoration: 'none',
                    '&:hover': {
                      color: '#C32A2A',
                      cursor: 'pointer',
                    },
                  }}
                >
                  {team.name}
                </Typography>
              ))}
            </Box>
          </Box>

          <Button
            sx={{
              color: 'white',
              fontFamily: "'Moulpali', sans-serif",
              fontSize: '1rem',
              transition: 'all 0.3s ease-in-out',
              borderBottom: '2px solid transparent',
              borderRadius: 0,  // Ensures no curve on the button itself
              '&:hover': {
                color: '#fff',
                textShadow: '0 0 1px rgba(255,255,255,0.8)',
                borderBottom: '2px solid #C32A2A',
              },
            }}>
            Contact Us
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
