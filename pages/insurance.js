/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Grid, Box, Container } from '@mui/material';
import PageBanner from '@/components/PageBanner';
import Layout from '../components/Layout';

export default function Insurance() {
  return (
    <Layout>
    <PageBanner />
    <Container>
    <Box display="flex" flexDirection="column" 
      style={{ backgroundColor: '#eee', padding: '20px 10px', height: '40vh'}}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={12}>
          <Box display="flex" flexDirection="column">
            <h1>Insurance</h1>
            <ol>
            <li> <strong>Policy Sales: </strong>  Telecalling is crucial for selling insurance policies, explaining coverage 
              options, and helping customers choose the right plan for their needs.
            </li>
            <li> <strong>Claims Assistance: </strong>  Telecalling provides support during the claims process, helping 
              customers understand requirements, submit documentation, and track claim status.
            </li>
            <li> <strong>Customer Retention: </strong>  Telecalling helps in retaining customers by offering policy 
              upgrades, providing renewal reminders, and addressing customer concerns proactively.
            </li>
            <li> <strong>Cross-selling and Up-selling: </strong>  Telecalling is used to promote additional insurance 
              products or coverage options to existing customers based on their profiles and needs.</li>
            </ol>
          </Box>
        </Grid>
      </Grid>
    </Box>
    </Container>
    </Layout>
  );
}
