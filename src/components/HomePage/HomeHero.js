import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import people from '../icons/people.jpg';
import mshomepage from '../icons/ms-homepage.png';

const HomePage = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          height: '90vh',
          backgroundImage: 'url(/path-to-your-image/hero-image.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            bgcolor: 'rgba(0,0,0,0.4)',
            zIndex: 1,
          }}
        />
        <Box sx={{ zIndex: 2, px: 2 }}>
          <Typography variant="h2" fontWeight="bold" sx={{ lineHeight: 1.2 }}>
            <Box component="span" sx={{ color: 'red' }}>PIONEERS</Box> AT <Box component="span" sx={{ color: 'red' }}>HEART</Box><br />
            FOR THE <Box component="span" sx={{ color: 'red' }}>GOOD</Box><br />
            OF <Box component="span" sx={{ color: 'red' }}>GENERATIONS</Box>
          </Typography>
        </Box>
      </Box>

     {/* GBS+ Manila Section */}
      <Box sx={{ width: '100%' }}>
      <Grid
          container
          spacing={0}
          alignItems="stretch"
          wrap="nowrap"
          direction="row"
          sx={{
            minHeight: '450px', // Sets fixed height
            width: '100%',
          }}
        >
          {/* Image - Left */}
          <Grid item sx={{ flex: 1 }}>
            <Box
              component="img"
              src={people}
              alt="GBS+ Manila"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                boxShadow: 2,
              }}
            />
          </Grid>

          {/* Text - Right */}
          <Grid item sx={{ flex: 1 }}>
            <Box
              sx={{
                bgcolor: '#cddfea',
                height: '100%',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              {/* Move padding inside a child Box */}
              <Box sx={{ p: { xs: 3, md: 6 } }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'red', mb: 2 }}>
                  GBS+ MANILA
                </Typography>
                <Typography variant="body1">
                The Global Business Solutions+ Manila is located at the heart of the central business district of Makati, Philippines. 
                It began operations in 2003 and has grown over the years to support Henkel’s functions and business processes in regional 
                and global basis. Manila is a prime GBS+ site due to its uniquely service-oriented, creative, and technically proficient 
                workforce with excellent English communication skills and a particular closeness to Western culture.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>








      {/* What We Do Section */}
      <Box sx={{ width: '100%' }}>
      <Grid
          container
          spacing={0}
          alignItems="stretch"
          wrap="nowrap"
          direction="row"
          sx={{
            minHeight: '450px', // Sets fixed height
            width: '100%',
          }}
        >

{/* Text - Right */}
<Grid item sx={{ flex: 1 }}>
            <Box
              sx={{
                bgcolor: '#cddfea',
                height: '100%',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              {/* Move padding inside a child Box */}
              <Box sx={{ p: { xs: 3, md: 6 } }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'red', mb: 2 }}>
                  WHAT WE DO
                </Typography>
                <Typography variant="body1">
                The Global Business Solutions+ Manila is located at the heart of the central business district of Makati, Philippines. 
                It began operations in 2003 and has grown over the years to support Henkel’s functions and business processes in regional 
                and global basis. Manila is a prime GBS+ site due to its uniquely service-oriented, creative, and technically proficient 
                workforce with excellent English communication skills and a particular closeness to Western culture.
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Image - Left */}
          <Grid item sx={{ flex: 1 }}>
            <Box
              component="img"
              src={people}
              alt="GBS+ Manila"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                boxShadow: 2,
              }}
            />
          </Grid>

          
        </Grid>
      </Box>


      
{/* Marketing & Sales Section */}
<Box sx={{ width: '100%', bgcolor: 'white', py: 8 }}>
  <Container maxWidth="md">
    <Typography
      variant="h3"
      align="center"
      sx={{ fontWeight: 'bold', mb: 4 }}
    >
      <Box component="span" sx={{ color: 'black' }}>MARKETING</Box> <Box component="span" sx={{ color: 'black' }}>&</Box> <Box component="span" sx={{ color: 'red' }}>SALES</Box>
    </Typography>

    <Typography
      variant="body1"
      align="center"
      sx={{ fontWeight: 'bold' }}
    >
      From concept to aftersales, Marketing & Sales supports the different processes of product life cycle management
      particularly in new product development, packaging and digital content production, market report & analysis, sales
      support and consumer service. Marketing & Sales’ flagship service is the Inhouse Agency which specializes in
      supporting artworks development, pre-press, packshot design, as well as content creation for eCommerce and Social
      Media. The Inhouse Agency offers an internal, integrated alternative to expensive agencies which also includes the
      rollout and maintenance of websites.
    </Typography>
  </Container>
</Box>


 {/* Image Below Marketing & Sales Section */}
 <Box sx={{ display: 'flex', justifyContent: 'center'}}>
    <Box
      component="img"
      src={mshomepage} // Replace this with the desired image source
      alt="Marketing & Sales"
      sx={{
        width: '80%', // Adjust the size as needed
        maxWidth: '800px', // Optional: max width for responsiveness
        objectFit: 'cover',

      }}
    />
  </Box>
    </Box>

    
  );
};

export default HomePage;
