/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Grid, Box, Container } from '@mui/material';
import PageBanner from '@/components/PageBanner';
import Layout from '../components/Layout';

export default function Technology() {
  return (
    <Layout>
      <PageBanner />
    <Container>
    <Box display="flex" flexDirection="column" 
      style={{ backgroundColor: '#eee', padding: '20px 10px', height: '40vh'}}>
      <Grid container spacing={2} >
        <Grid item xs={12} sm={12}>
          <Box display="flex" flexDirection="column">
            <h1>Technology</h1>
            <ol>
              <li> <strong>Technical Support & Sales: </strong>  AI handles common inquiries, schedules demos, and qualifies
                leads, while human agents tackle complex issues and build customer relationships.
              </li>
              <li> <strong>24/7 Availability: </strong>  AI assistants provide instant support, answer basic questions, 
                and offer product recommendations anytime.
              </li>
              <li> <strong>Streamlined Operations: </strong>  AI automates tasks like password resets and troubleshooting, 
                freeing up specialists for complex issues.
              </li>
              <li> Ethical considerations and data privacy remain crucial areas of focus.</li>
            </ol>
          </Box>
        </Grid>
      </Grid>
    </Box>
    </Container>
    </Layout>
  );
}
