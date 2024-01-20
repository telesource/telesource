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
          <Typography variant="h1" gutterBottom>About Us</Typography>
          <Typography>
            Welcome to TelesourceNow we are global digital business services provider unfolding 
            future with limitless possibilities.
          </Typography>
          <Typography>
            We deliver the most advanced tech enabled, digitally powered business solutions to help the world’s 
            best brands streamline their businesses in meaningful & sustainable ways to achieve businesses goal.

          </Typography>
          {/* Add more text or other elements as needed */}
        </Grid>
        <Grid item xs={12} md={6}>
        <div>
        <Image 
            src="/images/banner-1.jpg" // Route of the image file
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
