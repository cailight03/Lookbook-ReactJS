import React from 'react';
import { Grid, Typography, List, Button, Box } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import analytics from '../icons/analytics.jpg';

const RAAServices = () => {
  const serviceItems = [
    {
      title: 'Export & Sales Support',
      subItems: [
        'Regional sales planning, promotions, and sample handling'
      ],
    },
    {
      title: 'Reporting',
      subItems: [
        'Sales reports and performance analytics'
      ],
    },
    {
      title: 'Operations & Closeout',
      subItems: [
        'Order processing and inventory sell-off'
      ],
    },
    {
      title: 'Market Research',
      subItems: [
        'Consumer insights, social listening, and customized studies',
      ],
    },
  ];

  return (
    <Grid container sx={{ backgroundColor: '#fff' }}>
      <Grid item xs={12} md={9}>
        <img
          src={analytics}
          alt="Analytics"
          style={{
            width: '800px', 
            height: '450px',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      </Grid>

      <Grid item xs={12} md={3} sx={{ backgroundColor: '#fff', p: 4, boxShadow: '-4px 0px 8px rgba(0, 0, 0, 0.1)', width: '456px'}}>
        <Typography variant="h5" fontWeight="bold" color="#E1000E">
          <Box component="span" sx={{ fontFamily: "'henkel-bold', sans-serif", fontSize: '2.5rem' }}>
            SERVICES
          </Box>{' '}
          <Box component="span" sx={{ fontFamily: "'henkel-thin-italic', sans-serif", color: '#E1000E', fontSize: '2.5rem' }}>
            OFFERED
          </Box>
        </Typography>

        <List>
          {serviceItems.map((item, index) => (
            <Box key={index} sx={{ mb: 2 }}>
              <Typography
                sx={{
                  fontWeight: 'bold',
                  color: '#E1000E',
                  fontFamily: "'henkel-light', sans-serif",
                  fontSize: '1rem',
                }}
              >
                • {item.title}
              </Typography>
              {item.subItems && (
                <ul style={{ marginLeft: '1.5rem', paddingLeft: 0 }}>
                  {item.subItems.map((subItem, subIndex) => (
                    <li key={subIndex} style={{ color: '#E1000E', fontFamily: "'henkel-light', sans-serif", fontSize: '1rem' }}>
                      {subItem}
                    </li>
                  ))}
                </ul>
              )}
            </Box>
          ))}
        </List>

        <Button
          variant="contained"
          color="error"
          endIcon={<ArrowForward />}
          sx={{
            mt: .5,
            px: 5,
            borderRadius: '30px',
            fontFamily: "'henkel-bold', sans-serif",
          }}
        >
          Learn More
        </Button>
      </Grid>
    </Grid>
  );
};

export default RAAServices;
