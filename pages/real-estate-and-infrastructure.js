/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Grid, Box, Container } from '@mui/material';
import PageBanner from '@/components/PageBanner';
import Layout from '../components/Layout';

export default function RealEstateAndInfrastructure() {
  return (
    <Layout>
      <PageBanner />
    <Container>
    <Box display="flex" flexDirection="column" 
      style={{ backgroundColor: '#eee', padding: '20px 10px', height: '40vh'}}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <Box display="flex" flexDirection="column">
            <h1>Real Estate And Infrastructure</h1>
            <ol>
              <li> <strong> </strong> Property Sales and Rentals: Telecalling is used to promote and sell real estate properties,
                as well as to facilitate rental agreements and leases.
              </li>
              <li> <strong> </strong> Customer Inquiries: Telecalling assists customers inquiring about properties, providing 
                information on availability, pricing, and amenities.
              </li>
              <li> <strong> </strong> Appointment Scheduling: Telecalling helps in scheduling property viewings, meetings 
                with real estate agents, and appointments for property inspections.
              </li>
              <li> <strong> </strong> Customer Support: Telecalling provides post-sales support, assisting customers with
                documentation, payments, and resolving any issues or concerns they may have.
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
