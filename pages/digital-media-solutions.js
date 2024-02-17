/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Grid, Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import PageBanner from '@/components/PageBanner';
import Layout from '../components/Layout';

export default function DigitalMediaSolutions() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Layout>
      <PageBanner />
      <Box p={isSmallScreen ? 2 : 4}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <h1 style={{ paddingBottom: "10px"}}>Digital Media Solution </h1>
            <p>
            Seamless omni-channel customer connect & digital marketing to engage, convert, and grow. Conquer 
            every digital touchpoint and orchestrate your brand's digital symphony.
            </p>
            <p>
            Fuel your brand's rise with our Social Media Marketing solution. Craft compelling stories, ignite 
            conversations, and watch your business soar to new heights. Elevate your presence.
            </p>
          </Grid>
          <Grid item xs={12} md={6}>
            <div>
              <Image 
                src="/images/digitalmedia.webp" // Route of the image file
                alt="digitalmedia"
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
