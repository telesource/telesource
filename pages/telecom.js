/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Grid, Box, Container } from '@mui/material';
import PageBanner from '@/components/PageBanner';
import Layout from '../components/Layout';

export default function Telecom() {
  return (
    <Layout>
      <PageBanner />
    <Container>
    <Box display="flex" flexDirection="column" 
      style={{ backgroundColor: '#eee', padding: '20px 10px', height: '40vh'}}>
      <Grid container spacing={2} >
        <Grid item xs={12} sm={12}>
          <Box display="flex" flexDirection="column">
            <h1>Telecom</h1>
            <ol>
              <li> <strong>Customer Service: </strong>  Telecalling is essential for telecom companies to provide customer 
                support, address service issues, and handle billing inquiries.
              </li>
              <li> <strong>Sales and Promotions: </strong>  Telecalling is used to promote new plans, upgrades, and
                special offers to existing and potential customers.
              </li>
              <li> <strong>Technical Support: </strong>  Telecalling provides technical assistance for setting up services, 
                troubleshooting connectivity issues, and resolving network problems.
              </li>
              <li> <strong>Feedback and Surveys: </strong>  Telecalling helps telecom companies gather feedback from customers, 
                conduct satisfaction surveys, and improve service quality based on insights gathered.
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
