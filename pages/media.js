/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Grid, Box, Container } from '@mui/material';
import PageBanner from '@/components/PageBanner';
import Layout from '../components/Layout';

export default function Media() {
  return (
    <Layout>
    <PageBanner />
    <Container>
    <Box display="flex" flexDirection="column"  
      style={{ backgroundColor: '#eee', padding: '20px 10px', height: '40vh'}}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <Box display="flex" flexDirection="column">
            <h1>Media</h1>
            <ol>
              <li> <strong>Audience Engagement: </strong>  Telecalling helps media companies engage with their audience 
              through surveys, feedback collection, and promotional offers.
              </li>
              <li> <strong>Subscription and Membership Sales: </strong>  Telecalling is used to promote and sell 
              subscriptions, memberships, and premium content packages to audiences.
              </li>
              <li> <strong>Event Promotion: </strong>  Telecalling assists in promoting events such as concerts, 
              movie releases, and shows, helping in ticket sales and audience turnout.
              </li>
              <li> <strong>Customer Support: </strong>  Telecalling provides customer support for media products such 
              as TV services, streaming platforms, and publications, assisting with account management, technical issues, and content inquiries.</li>
            </ol>
          </Box>
        </Grid>
      </Grid>
    </Box>
    </Container>
    </Layout>
  );
}
