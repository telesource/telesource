/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Grid, Box, Typography, useTheme } from '@mui/material';
import MissionIcon from '@mui/icons-material/Flag'; // Replace with your preferred icon
import VisionIcon from '@mui/icons-material/Visibility'; // Replace with your preferred icon

const MissionVision = () => {
  const theme = useTheme();

  return (
    <Box
      p={4}
      style={{
        color: 'white',
        backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.9)), url(/images/Whatssap.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        <Grid item xs={12} md={6} style={{ textAlign: 'center' }}>
          <VisionIcon fontSize="large" style={{ color: '#6837f5', backgroundColor: '#FFF', borderRadius: '50%'}}   />
          <h1>Our  Vision</h1>
          <p>
          To be the go-to partner for businesses seeking exceptional customer experiences, innovative  solutions, 
          and unparalleled corporate communication strategies.
          </p>
        </Grid>
        <Grid item xs={12} md={6} style={{ textAlign: 'center' }}>
          <MissionIcon fontSize="large"  style={{ color: '#6837f5', backgroundColor: '#FFF', borderRadius: '50%'}}  />
          <h1>Our  Mission</h1>
          <p>
          TelesourceNow is committed to redefining communication standards by providing customer-centric solutions, 
          fostering retail success, and enhancing corporate communication to empower businesses in today's dynamic market
          </p>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MissionVision;
