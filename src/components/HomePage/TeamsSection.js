import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';
import code from '../icons/code.jpg';
import dsimage from '../icons/digitalsupportimage.jpg';
import miimage from '../icons/marketintelligenceimage.png';
import raaimage from '../icons/raaimage.png';
import sesimage from '../icons/sesimage.jpg';
import obimage from '../icons/obimage.png';
import csimage from '../icons/csimage.png';
import cmimage from '../icons/cmimage.jpg';
import rmimage from '../icons/rmimage.png';

const cards = [
  { title: 'Card-1', text: 'DIGITAL SUPPORT', image: dsimage },
  { title: 'Card-2', text: 'WEBSTUDIO', image: code },
  { title: 'Card-3', text: 'MARKET INTELLIGENCE', image: miimage },
  { title: 'Card-4', text: 'REPORTING AND ADVANCED ANALYTICS', image: raaimage },
  { title: 'Card-5', text: 'SALES EXCELLENCE SUPPORT', image: sesimage },
  { title: 'Card-6', text: 'ORDER & BUDGET', image: obimage },
  { title: 'Card-7', text: 'CONSUMER CARE', image: csimage },
  { title: 'Card-8', text: 'COMMUNITY MANAGEMENT', image: cmimage },
  { title: 'Card-9', text: 'REVIEW MANAGEMENT', image: rmimage },
];

const TeamsSection = () => {
  return (
    <Box sx={{ py: 8, px: 2}}>
      <Typography variant="h3" align="center" sx={{ fontWeight: 'bold', mb: 6 }}>
        Meet Our <Box component="span" sx={{ color: 'red' }}>Team</Box>
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 4,
          maxWidth: '1000px',
          mx: 'auto',
        }}
      >
        {cards.map((card, i) => (
          <Card key={i} sx={{ width: '80%', mx: 'auto', boxShadow: 3 }}>
            <CardMedia
              component="img"
              height="200"
              image={card.image}
              alt={card.title}
              sx={{ objectFit: 'cover' }}
            />
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                {card.text}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default TeamsSection;
