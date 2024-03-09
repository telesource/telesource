/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Grid, Box, Container, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import PageBanner from '@/components/PageBanner';
import Layout from '../components/Layout';

export default function TeleCallingSolutions() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Layout>
    <PageBanner />
    <Container>
    <Box p={isSmallScreen ? 2 : 4}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
          <h1 style={{ paddingBottom: "10px"}}>Telecalling Solutions</h1>
          <ol>
            <li> <strong> Security and Transparency: </strong> Highlight your robust security measures and transparent 
            operations to assure clients of their data's safety and the integrity of your services.
             </li>
             <li> <strong> Variable Cost Structure: </strong> Emphasize the cost-effectiveness of your solution by offering 
             variable costs based on usage, eliminating the need for businesses to commit to fixed seat costs.
            </li>
             <li> <strong> 100% Productivity:  </strong> 
             Explain how your setup ensures maximum productivity, possibly by leveraging technology or efficient workflows.
             </li>
             <li> <strong> Best-in-class Connectivity:  </strong> 
             Detail your high-quality communication infrastructure, ensuring seamless connectivity for uninterrupted calling operations.
             </li>
             <li> <strong> Powerful Analytics: </strong>Describe the analytics tools you provide to help businesses gain 
             insights into their calling operations and improve performance.
             </li>
             <li> <strong> Remote & Virtual Setup: </strong>Highlight the flexibility and convenience of your remote and 
             virtual call center setup, enabling businesses to scale their calling capacity as needed.
             </li>
           </ol>
          </Grid>
          <Grid item xs={12} md={6}>
            <div>
              <Image 
              style={{ borderRadius: "100px"}}
                src="/images/telecalling.webp" // Route of the image file
                alt=""
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
