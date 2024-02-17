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
        <Grid container spacing={4} >
          <Grid item xs={12} md={6}>
          <h1 style={{ paddingBottom: "10px"}}>I-VERIFIER</h1>
            <h2>Instant Verification Solution</h2>
            <p>
            I Verifier is a tool that assists in verifying the authenticity of leads and ensures that the generated 
            leads are genuine and reliable. This solution enhances marketers efficiency by narrowing down their target audience.
            </p>
          </Grid>
          <Grid item xs={12} md={6}>
            <div>
            <Image 
            src="/images/i-Verifier.webp" // Route of the image file
            alt="i-Verifier"
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
