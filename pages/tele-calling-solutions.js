/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Grid, Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import PageBanner from '@/components/PageBanner';
import Layout from '../components/Layout';

export default function TeleCallingSolutions() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Layout>
      <PageBanner />
      <Box p={isSmallScreen ? 2 : 4}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
          <h1 style={{ paddingBottom: "10px"}}>Tele-Calling Solutions</h1>
            <p>
            India’s most secure and transparent Tele-calling partner, with no fixed seat costs, 100% productivity, 
            best-in-class connectivity and powerful analytics.
            </p>
            <p>
            Scale your inbound and outbound calling capacity and make it variable with our remote & virtual call centre setup.
            </p>
          </Grid>
          <Grid item xs={12} md={6}>
            <div>
              <Image 
                src="/images/telecalling.jpeg" // Route of the image file
                alt=""
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
