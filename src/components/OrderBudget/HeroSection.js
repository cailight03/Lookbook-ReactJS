import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import oblogo from '../icons/orderbudget-logo.png'; 

const Hero = () => {
  return (
    <Box sx={{ backgroundColor: '#BDCDDA', py: 4, pt: '105px' }}>
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={9}>
            <Typography
              variant="h3"
              fontWeight="bold"
              color="#C32A2A"
              sx={{
                fontFamily: "'henkel-black', sans-serif",
                fontSize: '5rem',
              }}
            >
              ORDER & BUDGET
            </Typography>
            <Typography
              variant="body1"
              mt={2}
              color="#C32A2A"
              sx={{
                fontFamily: "'Roboto Condensed', sans-serif",
                fontSize: '1.2rem',
              }}
            >
              The Digital Support Team is a group of passionate and dynamic team of experts that helps
              <br />
              Henkel in achieving its goal of elevating its online presence and improve its digital landscape.
            </Typography>
          </Grid>
          <Grid item xs={12} md={5} textAlign="center">
            <img
              src={oblogo}
              style={{ width: '100%', maxWidth: 200, marginLeft: '130px'  }}
              alt='Order Budget Logo'
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
