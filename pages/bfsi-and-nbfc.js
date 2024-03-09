/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Grid, Box, Container } from '@mui/material';
import PageBanner from '@/components/PageBanner';
import Layout from '../components/Layout';

export default function BfsiAndNbfc() {
  return (
    <Layout>
    <PageBanner />
    <Container>
    <Box display="flex" flexDirection="column"
      style={{ backgroundColor: '#eee', padding: '20px 10px', height: '40vh'}}>
      <Grid container spacing={2} >
        <Grid item xs={12} sm={12}>
          <Box display="flex" flexDirection="column">
            <h1>BFSI & NBFC</h1>
            <ol>
              <li> <strong>Customer Acquisition: </strong>  Telecalling is used to reach out to potential customers, introduce 
                financial products, and convert leads into clients.
              </li>
              <li> <strong>Customer Service: </strong>  Telecalling provides personalized assistance for account management, 
                transaction queries, and issue resolution, enhancing customer satisfaction.
              </li>
              <li> <strong>Lead Generation: </strong>  Telecalling helps in identifying potential customers interested in 
                financial products and services, enabling targeted marketing efforts.
              </li>
              <li> <strong>Operational Efficiency: </strong>  Conversational AI automates routine inquiries, freeing up 
                resources for complex customer interactions and strategic tasks, improving overall efficiency.</li>
            </ol>
          </Box>
        </Grid>
      </Grid>
    </Box>
    </Container>
    </Layout>
  );
}
