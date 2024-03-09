/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Grid, Box, Container } from '@mui/material';
import PageBanner from '@/components/PageBanner';
import Layout from '../components/Layout';

export default function Automotive() {
  return (
    <Layout>
      <PageBanner />
    <Container>
    <Box display="flex" flexDirection="column"  
      style={{ backgroundColor: '#eee', padding: '20px 10px', height: '40vh'}}>
      <Grid container spacing={2} >
        <Grid item xs={12} sm={12}>
          <Box display="flex" flexDirection="column">
            <h1>Automotive</h1>
            <ol>
              <li> <strong>Personalized Guidance: </strong>  AI assistants answer basic car questions, suggest models, and 
                schedule test drives, while agents handle complex inquiries and build rapport.
              </li>
              <li> <strong>24/7 Support: </strong>  Chatbots are always available for roadside assistance, service booking, 
                and general inquiries.
              </li>
              <li> <strong>Streamlined Services: </strong>  AI automates tasks like service reminders and appointment 
                scheduling, boosting efficiency.
              </li>
              <li> Ethical considerations and data privacy remain key along with ongoing AI development. </li>
            </ol>
          </Box>
        </Grid>
      </Grid>
    </Box>
    </Container>
    </Layout>
  );
}
