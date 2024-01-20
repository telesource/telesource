/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Grid, Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import PageBanner from '@/components/PageBanner';
import Layout from '../components/Layout';

export default function IVerifier() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Layout>
      <PageBanner />
      <Box p={isSmallScreen ? 2 : 4}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <h1 gutterBottom>I-VERIFIER</h1>
            <h2>Solution for instant verification</h2>
            <p>
            I-Verifier is an intelligent solution that help in confirming the lead authenticity and ensure's that 
            the leads generated are genuine and trustworthy. This solutions brings more efficiency for the marketers 
            by narrowing their target funnel.
            </p>
          </Grid>
          <Grid item xs={12} md={6}>
            <div>
              <Image 
                src="/images/banner-1.jpg" // Route of the image file
                alt="Description of the image"
                width={500}  // Adjust width as needed
                height={300} // Adjust height as needed
                layout="responsive" // Makes the image responsive
              />
            </div>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
}
