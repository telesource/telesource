/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Grid, Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import PageBanner from '@/components/PageBanner';
import Layout from '../components/Layout';

export default function DataMiner() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Layout>
      <PageBanner />
      <Box p={isSmallScreen ? 2 : 4}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
          <h1 style={{ paddingBottom: "10px"}}>DATA MINER</h1>
            <h2>Utilizing Data Analytics and Visualization</h2>
            <p variant='p'>
              Introducing a platform that guarantees your data is utilized efficiently. This platform combines Excel 
              files featuring headers and empowers users to extract valuable analytics from the master file. It adds value, for the user.
            </p>
          </Grid>
          <Grid item xs={12} md={6}>
            <div>
              <Image 
              src="/images/Data Mining.jpeg" // Route of the image file
              alt="Data Mining"
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
