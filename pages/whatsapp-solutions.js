/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Grid, Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import PageBanner from '@/components/PageBanner';
import Layout from '../components/Layout';

export default function WhatsappSolutions() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Layout>
      <PageBanner />
      <Box p={isSmallScreen ? 2 : 4}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <h1 gutterBottom>WhatsApp Solutions</h1>
            <h2>A WhatsApp Marketing solution</h2>
            <p>
            A WhatsApp Marketing solution, helps brands reach an enormous audience, build strong relationships with 
            customers, and increase sales. Automate Messages via Integration and Enable Multi-Agent Live Chat for 
            Customer Support.
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
