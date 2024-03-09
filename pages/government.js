/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Container, Grid, Box } from '@mui/material';
import PageBanner from '@/components/PageBanner';
import Layout from '../components/Layout';


export default function Government() {
  return (
    <Layout>
      <PageBanner />
      <Container display="flex" flexDirection="column" alignItems="center" 
      style={{ backgroundColor: '#eee', padding: '20px 10px', height: '40vh'}}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={12}>
          <Box display="flex" flexDirection="column">
            <h1>Government</h1>
            <ol>
                <li><strong>Property Sales and Rentals: </strong> Telecalling is used to promote and sell real estate properties, as well as to 
                    facilitate rental agreements and leases.
                </li>
                <li><strong>Customer Inquiries: </strong> Telecalling assists customers inquiring about properties, providing information on 
                    availability, pricing, and amenities.
                </li>
                <li><strong>Appointment Scheduling: </strong> Telecalling helps in scheduling property viewings, meetings with real estate 
                    agents, and appointments for property inspections.
                </li>
                <li><strong>Customer Support: </strong> Telecalling provides post-sales support, assisting customers with documentation, 
                    payments, and resolving any issues or concerns they may have.
                </li>
            </ol>
          </Box>
        </Grid>
      </Grid>
    </Container>
    </Layout>
  );
}
