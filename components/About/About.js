import React from 'react';
import { Grid, Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';

export default function About() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box p={isSmallScreen ? 2 : 4}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <h1>About Us</h1>
          <h2>WE ARE DIFFERENT</h2>
          <p style={{ paddingBottom: '15px', paddingTop: '15px'}}>
          Welcome to TelesourceNow, a provider of business services that is shaping the future with boundless possibilities.
          </p>
          <p style={{ paddingBottom: '15px'}}>
          We offer cutting edge technology enabled solutions to empower the worlds brands, in optimizing their 
          operations in sustainable ways all with the aim of achieving their business objectives.
          </p>
          <p style={{ paddingBottom: '15px'}}>
          Our dedication to excellence permeates every aspect of our work positioning us as a driving force, for 
          businesses embracing a future characterized by AI innovation and unprecedented accomplishments.
          </p>
          {/* Add more text or other elements as needed */}
        </Grid>
        <Grid item xs={12} md={6}>
        <div>
        <Image 
            src="/images/home-about.jpg" // Route of the image file
            alt="Description of the image"
            width={100}  // Desired width
            height={100} // Desired height
            layout="responsive" // Makes the image responsive
        />
        </div>
        </Grid>
      </Grid>
    </Box>
  );
}
