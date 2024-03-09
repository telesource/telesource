/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Grid, Box, Container } from '@mui/material';
import PageBanner from '@/components/PageBanner';
import Layout from '../components/Layout';

export default function RenewalPower() {
  return (
    <Layout>
      <PageBanner />
      <Container>
      <Box display="flex" flexDirection="column"  
      style={{ backgroundColor: '#eee', padding: '20px 10px', height: '40vh'}}>
      <Grid container spacing={2} >
        <Grid item xs={12} sm={12}>
          <Box display="flex" flexDirection="column" >
            <h1>Renewal Power</h1>
            <ol>
              <li> <strong>Personalized Guidance: </strong>  AI assistants answer basic questions, recommend solutions, and 
                connect customers with specialists, while agents handle complex inquiries and build trust.
              </li>
              <li> <strong>24/7 Availability: </strong>  Chatbots provide instant support for troubleshooting, billing inquiries,
                and information access.
              </li>
              <li> <strong>Streamlining Operations: </strong>  AI automates tasks like appointment scheduling and field data 
                collection, boosting efficiency.
              </li>
            </ol>
          </Box>
        </Grid>
      </Grid>
    </Box>
      </Container>
    </Layout>
  );
}
