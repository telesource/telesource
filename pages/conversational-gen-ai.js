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
          <h1 style={{ paddingBottom: "10px"}}>Conversational Gen-AI </h1>
            <p>
            Conversational AI enhances user experience by enabling natural, real-time interactions with 
            machines, improving customer satisfaction and efficiency in various applications, from 
            customer support to virtual assistants. It also streamlines processes, reducing response times 
            and facilitating personalized communication for businesses.        
            </p>
          </Grid>
          <Grid item xs={12} md={6}>
            <div>
              <Image 
                src="/images/conversationalai.jpg" // Route of the image file
                alt="conversationalai"
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
