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
          <h1 style={{ paddingBottom: "10px"}}>Conversational Gen-AI </h1>
           <ol>
            <li> <strong> Understanding Human Language: </strong>Conversational AI systems utilize Natural Language 
            Understanding (NLU) to grasp the meaning and context of human language inputs enabling them to comprehend user
             intentions and extract information from speech.
             </li>
             <li> <strong> Awareness of Context: </strong> These systems maintain an understanding, throughout 
             conversations recalling interactions and leveraging that knowledge to offer more personalized and pertinent responses.
            </li>
             <li> <strong> Integration Across Platforms:  </strong> 
             Conversational AI is crafted to operate on platforms and channels such as websites, mobile applications, 
             messaging platforms and voice assistants.
             </li>
             <li> <strong> Continuous Improvement: </strong> 
             Leveraging machine learning algorithms AI systems can enhance their performance over time by learning from 
             interactions and user feedback resulting in precise and efficient responses.
             </li>
             <li> <strong> pplication, in Diverse Sectors: </strong>A Conversational AI is currently being implemented across a 
             broad spectrum of industries including customer service, healthcare, finance and education to streamline 
             processes and enrich user experiences. 
             </li>
           </ol>
          </Grid>
          <Grid item xs={12} md={6}>
            <div>
              <Image 
              style={{ borderRadius: "100px"}}
                src="/images/conversationalai.webp" // Route of the image file
                alt="conversationalai"
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
