/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Grid, Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import PageBanner from '@/components/PageBanner';
import Layout from '../components/Layout';

export default function EcommercePlugIn() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Layout>
      <PageBanner />
      <Box p={isSmallScreen ? 2 : 4}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
          <h1 style={{ paddingBottom: "10px"}}>E-Commerce Plugin</h1>
          <h2>Customisable E-Commerce plugin</h2>
            <p variant='p'>
          E Commerce Plugin is a versatile WordPress plugin that allows you to customize and enhance your WordPress 
          website with e commerce capabilities. By clicking a buttons your WordPress site can transform into a complete 
          online store providing you with all the functionality you need for successful online selling.
          </p>
          </Grid>
          <Grid item xs={12} md={6}>
            <div>
            <Image 
            src="/images/Ecommerce plugin.webp" // Route of the image file
            alt="Ecommerce Plugin"
            width={100}  // Desired width
            height={100} // Desired height
            layout="responsive" // Makes the image responsive
            />
            </div>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
}
