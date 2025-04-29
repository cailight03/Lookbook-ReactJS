import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
} from '@mui/material';
import { Email, LocationOn } from '@mui/icons-material';
import logo2 from '../icons/henkel-logo-2.png'; 

const DigitalFooter = () => {
  return (
    <Box sx={{ backgroundColor: '#A2ECBA', p: 4 }}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <img src={logo2} alt="Henkel Logo" width={100} />
            <Box mt={2}>
              <Box display="flex" alignItems="center" mb={1} mt={4}>
                <Email sx={{ mr: 1, color: '#C32A2A' }} />
                <Typography color="#C32A2A" sx={{fontFamily: "'Montserrat', sans-serif", fontSize: '.9rem', fontWeight: 'medium',}}>
                  contact@henkel.com
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" mb={1}>
                <LocationOn sx={{ mr: 1, color: '#C32A2A' }} />
                <Typography color="#C32A2A" sx={{fontFamily: "'Montserrat', sans-serif", fontSize: '.9rem', fontWeight: 'medium',}}>
                  25th Floor, NEX Tower, 6786 Ayala Ave,<br /> Makati, 1223 Metro Manila
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              mt={11}
              sx={{
                color: '#C32A2A',
                ml: 30, // Move the whole box to the far right
                mr: 4,      // Add more space from the center if needed
              }}
            >
              <Button
                sx={{
                  color: 'inherit',
                  fontFamily: "'Montserrat', sans-serif",
                  textTransform: 'none',
                  fontSize: '.9rem'
                }}
              >
                Home
              </Button>
              <Button
                sx={{
                  color: 'inherit',
                  fontFamily: "'Montserrat', sans-serif",
                  textTransform: 'none',
                  fontSize: '.9rem'
                }}
              >
                Teams
              </Button>
              <Button
                sx={{
                  color: 'inherit',
                  fontFamily: "'Montserrat', sans-serif",
                  textTransform: 'none',
                  fontSize: '.9rem'
                }}
              >
                About Us
              </Button>
              <Button
                sx={{
                  color: 'inherit',
                  fontFamily: "'Montserrat', sans-serif",
                  textTransform: 'none',
                  fontSize: '.9rem'
                }}
              >
                Contact Us
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default DigitalFooter;
