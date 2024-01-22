/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Grid, Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import PageBanner from '@/components/PageBanner';
import Layout from '../components/Layout';

export default function ChatBot() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Layout>
      <PageBanner />
      <Box p={isSmallScreen ? 2 : 4}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
          <h1 style={{ paddingBottom: "10px"}}>Create Your Own Chatbot Flow</h1>
          <h2>Create Your Own Chatbot Flow</h2>
            <p variant='p'>
          Craft unique chatbot flows to enhance customer engagement and streamline conversations. Seamlessly collect 
          payments, through WhatsApp. Provide round the clock assistance to your customers and prospects. Our user 
          friendly chatbots are designed for efficiency making it effortless to interact with your audience at any time.
          </p>
          </Grid>
          <Grid item xs={12} md={6}>
            <div>
            <Image 
            src="/images/Chatbot.jpeg" // Route of the image file
            alt="Chatbot"
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
