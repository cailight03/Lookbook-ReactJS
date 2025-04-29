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
import call from '../icons/call.png'; 

const ConsumerServices = () => {
  const serviceItems = [
    'Attends to consumer’s inquiry, complaints, requests and feedbacks',
    'Provides recommendations as solutions to consumer’s complaints',
    'Process coupons & check payments',
    'Respond to consumers’ reviews via Brand & Retailer Site',
    'Record medical interactions (SCI)',
    'Reporting & Analysis'
  ];

  return (
    <Grid container sx={{ backgroundColor: '#F5E67C'}}>
      <Grid item xs={12} md={12}>
        <img
          src={call}
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
      <Grid item xs={12} md={6} sx={{ backgroundColor: '#F5E67C', p: 4, boxShadow: '-4px 0px 8px rgba(0, 0, 0, 0.1)' }}>
        <Typography variant="h5" fontWeight="bold" color="#E1000E">
          <Box component="span"sx={{fontFamily: "'henkel-bold', sans-serif", fontSize: '2.5rem',}}>
            SERVICES
          </Box>{' '}
          <Box component="span" sx={{ fontFamily: "'henkel-thin-italic', sans-serif", color: '#E1000E', fontSize: '2.5rem', }}>
            OFFERED
          </Box>
        </Typography>
        <List>
        {serviceItems.map((item) => (
    <ListItem key={item} sx={{ py: .3 }}> {/* ✅ Add vertical padding here */}
      <ListItemText
        primary={`• ${item}`}
        primaryTypographyProps={{
          sx: {
            color: '#E1000E',
            fontFamily: "'henkel-light', sans-serif",
            fontSize: '1.04rem',
            maxWidth: '320px',
            maxHeight: '40px',
            wordWrap: 'break-word',
            whiteSpace: 'normal',       
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
              mt: 1,
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

export default ConsumerServices;
