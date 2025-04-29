import React from 'react';
import { Button, Box, Typography, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Container sx={{ mt: 10, textAlign: 'center' }}>
      <Typography variant="h3" fontWeight="bold" mb={4}>
        Select a Team
      </Typography>

      <Box display="flex" justifyContent="center" gap={4}>
      <Button
          variant="contained"
          color="secondary"
          onClick={() => navigate('/team/DigitalSupport')}
        >
          Digital Support
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => navigate('/team/MarketIntelligence')}
        >
          Market Intelligence
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/team/ConsumerCare')}
        >
          Consumer Care
        </Button>

        <Button
          variant="contained"
          color="secondary"
          onClick={() => navigate('/team/WebStudio')}
        >
          Web Studio
        </Button>

        <Button
          variant="contained"
          color="secondary"
          onClick={() => navigate('/team/OrderBudget')}
        >
          Order & Budget
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => navigate('/team/SalesExcellence')}
        >
          Sales Excellence Support
        </Button>
      </Box>
    </Container>
  );
};

export default HomePage;
