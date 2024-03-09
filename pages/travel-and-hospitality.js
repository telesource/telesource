/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Grid, Box, Container } from '@mui/material';
import PageBanner from '@/components/PageBanner';
import Layout from '../components/Layout';

export default function TravelAndHospitality() {
  return (
    <Layout>
      <PageBanner />
      <Container>
      <Box display="flex" flexDirection="column"
      style={{ backgroundColor: '#eee', padding: '20px 10px', height: '40vh'}}>
      <Grid container spacing={2} >
        <Grid item xs={12} sm={12}>
          <Box display="flex" flexDirection="column">
            <h1>Travel And Hospitality</h1>
            <ol>
            <li><strong>Booking Assistance:</strong> Telecalling helps customers with travel bookings, 
            including flights, hotels, and tours, providing personalized recommendations and assistance.
            </li>
            <li><strong>Customer Service: </strong> Telecalling provides customer support for travel-related inquiries, 
            changes to bookings, and assistance during travel disruptions.
            </li>
            <li><strong>Destination Information: </strong> Telecalling offers information about travel destinations, 
            attractions, local customs, and travel advisories to help customers plan their trips.
            </li>
            <li><strong>Feedback and Reviews:</strong> Telecalling is used to gather feedback from customers post-trip, 
            ensuring a positive experience and improving services based on reviews.
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
