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
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
          <h1 style={{ paddingBottom: "10px"}}>WhatsApp Solutions</h1>
          <h2>A WhatsApp Marketing solution</h2>
            <p variant='p'>
          Discover a WhatsApp marketing solution that enables businesses to connect with an audience, foster strong 
          customer relationships and boost sales. Streamline message automation, through integration and empower agent 
          live chats, for efficient customer support.
          </p>
          </Grid>
          <Grid item xs={12} md={6}>
            <div>
            <Image 
            style={{ borderRadius: "100px"}}
            src="/images/Whatssap.webp" // Route of the image file
            alt="Whatssap"
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
