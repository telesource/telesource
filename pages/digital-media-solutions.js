/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Grid, Box, Container, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import PageBanner from '@/components/PageBanner';
import Layout from '../components/Layout';

export default function DigitalMediaSolutions() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Layout>
      <PageBanner />
      <Container>
      <Box p={isSmallScreen ? 2 : 4}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <h1 style={{ paddingBottom: "10px"}}>Digital Media Solutions </h1>
            <ol>
            <li> <strong> Omni-channel Customer Engagement: </strong>  Highlight how your solution enables businesses to 
            seamlessly connect with customers across various channels, providing a unified and consistent experience.
             </li>
             <li> <strong> Conversion-focused Digital Marketing: </strong>  Emphasize your focus on driving conversions 
             through digital marketing strategies, showcasing how you help businesses achieve their growth objectives.
            </li>
             <li> <strong>  Digital Symphony:  </strong> 
            Use this metaphor to illustrate how you orchestrate a harmonious and impactful digital presence for your clients, 
            creating a memorable brand experience for their customers.
             </li>
             <li> <strong> Social Media Storytelling:  </strong> 
              Highlight the power of storytelling in social media marketing, showcasing how you help businesses craft 
              compelling narratives that resonate with their audience.
             </li>
             <li> <strong> Conversation Ignition: </strong>Describe how you spark meaningful conversations on social media 
             platforms, driving engagement and fostering a community around the brand.
             </li>
             <li> <strong> Elevated Presence: </strong>Showcase how your social media marketing solution elevates a 
             brand's presence, helping them stand out in a crowded digital landscape.
             </li>
           </ol>
          </Grid>
          <Grid item xs={12} md={6}>
            <div>
              <Image 
                style={{ borderRadius: "100px"}}
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
      </Container>
    </Layout>
  );
}
