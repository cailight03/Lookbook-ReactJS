import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import QueryStatsIcon from '@mui/icons-material/QueryStats';

const RAAHero = () => {
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
                fontFamily: "'henkel-bold', sans-serif",
                fontSize: '4rem',
                lineHeight: 1,
              }}>
              REPORTING 
              <Box
                component="span"
                sx={{
                  fontFamily: "'henkel-thin-italic', sans-serif",
                  fontSize: '4rem',
                  marginLeft: '1rem', 
                }}>
              AND
              </Box>
              <br />
              <Box
                component="span"
                sx={{
                  fontFamily: "'henkel-medium-italic', sans-serif",
                  fontSize: '4rem',
                }}
              >
                ADVANCED
                <Box
                component="span"
                sx={{
                  fontFamily: "'henkel-regular', sans-serif",
                  fontSize: '4rem',
                  marginLeft: '1rem', 
                }}>
              ANALYTICS
              </Box>
              </Box>
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
              Providing standard reports and support to assist marketing and sales business 
              <br />
              decisions, together with ready to use solutions based on expert ad-hoc consultancy.
            </Typography>
          </Grid>
          <Grid item xs={12} md={5} textAlign="center">
          <QueryStatsIcon
              sx={{
                fontSize: 220, // size of the icon
                color: '#E1000F',
                marginLeft: '90px',
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default RAAHero;
