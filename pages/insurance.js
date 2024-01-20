/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Grid, Box } from '@mui/material';
import PageBanner from '@/components/PageBanner';
import Layout from '../components/Layout';

export default function Insurance() {
  return (
    <Layout>
      <PageBanner />
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" 
      style={{ backgroundColor: '#eee', padding: '20px 10px', height: '40vh'}}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={12}>
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center">
            <h1>Insurance</h1>
            <p>Details will be updated soon.......</p>
          </Box>
        </Grid>
      </Grid>
    </Box>
    </Layout>
  );
}
