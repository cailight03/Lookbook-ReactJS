import React from 'react';
import {
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
  Box
} from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import orderbudget from '../icons/orderbudget.jpg'; 

const Services = () => {
  const serviceItems = [
    'Website Performance Analysis',
    'Campaign Performance Analysis',
    'Competitor Analysis',
    'SEO Audit and Analysis',
    'Keyword Research',
    'Link Building',
    'Project Coordination',
    'Campaign Calendar',
  ];

  return (
    <Grid container>
      <Grid item xs={12} md={12}>
        <img
          src={orderbudget}
          alt="Analytics"
          style={{
            width: '800px', 
            height: '450px',
            objectFit: 'cover',
            display: 'block',
            margin: '0 auto',
          }}
        />
      </Grid>
      <Grid item xs={12} md={6} sx={{ backgroundColor: '#fff', p: 4 }}>
        <Typography variant="h5" fontWeight="bold" color="#C32A2A">
          <Box component="span"sx={{fontFamily: "'henkel-bold', sans-serif", fontSize: '2.5rem',}}>
            SERVICES
          </Box>{' '}
          <Box component="span" sx={{ fontFamily: "'henkel-thin-italic', sans-serif", color: '#C32A2A', fontSize: '2.5rem', }}>
            OFFERED
          </Box>
        </Typography>
        <List>
        {serviceItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemText
              primary={`• ${item}`}
              primaryTypographyProps={{
                sx: {
                  color: '#C32A2A',
                  fontFamily: "'henkel-light', sans-serif", 
                  fontSize: '1.04rem'
                },
              }}
            />
          </ListItem>
        ))}
      </List>
        <Button
          variant="contained"
          color="error"
          endIcon={<ArrowForward />}
          sx={{
            mt: 2,
            px: 5, // horizontal padding (controls button width)
            borderRadius: '30px', // rounded corners
            fontFamily: "'henkel-bold', sans-serif", // optional custom font  
          }}
        >
          Learn More
        </Button>
      </Grid>
    </Grid>
  );
};

export default Services;
