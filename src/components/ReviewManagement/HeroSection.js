import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import reviewlogo from '../icons/review-logo.png'; 

const ReviewHero = () => {
  return (
    <Box sx={{ backgroundColor: '#BDCDDA', py: 4, pt: '105px' }}>
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={9}>
            <Typography
              variant="h3"
              fontWeight="bold"
              color="#E1000F"
              sx={{
                fontFamily: "'henkel-black', sans-serif",
                fontSize: '5rem',
              }}
            >
              REVIEW <br/>MANAGEMENT
            </Typography>
            <Typography
              variant="body1"
              mt={2}
              color="#E1000F"
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
              src={reviewlogo}
              style={{ width: '100%', maxWidth: 200, marginLeft: '130px'  }}
              alt='review Logo'
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ReviewHero;
