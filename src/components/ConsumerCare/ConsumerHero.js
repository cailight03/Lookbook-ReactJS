import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import headseticon from '../icons/headset-icon.png';

const ConsumerHero = () => {
  return (
    <Box sx={{ backgroundColor: '#28315A', py: 4, pt: '105px' }}>
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={9}>
            <Typography
              variant="h3"
              fontWeight="bold"
              color="#F9A700"
              sx={{
                fontFamily: "'henkel-black', sans-serif",
                fontSize: '5rem',
              }}>
              CONSUMER{' '}
              <Box
                component="span"
                sx={{
                  fontFamily: "'henkel-black-italic', sans-serif", 
                  fontSize: '5rem',
                }}>
                CARE
              </Box>
            </Typography>
            <Typography
              variant="body1"
              mt={2}
              color="#F9A700"
              sx={{
                fontFamily: "'Roboto Condensed', sans-serif",
                fontSize: '1.2rem',
              }}
            >
              Consumer Service has been Henkel’s first level contact for Henkel Consumer Brands. Our
              <br />
              specialists are the voice of the company with extensive portfolio knowledge handling our
              <br />
              end-users' concerns via the toll-free hotline and other channels.
            </Typography>
          </Grid>
          <Grid item xs={12} md={5} textAlign="center">
            <img
              src={headseticon}
              style={{ width: '100%', maxWidth: 205, marginLeft: '130px'  }}
              alt='Headset Icon'
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ConsumerHero;
