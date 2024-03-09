/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Grid, Box, Container } from '@mui/material';
import PageBanner from '@/components/PageBanner';
import Layout from '../components/Layout';

export default function RetailAndEcommerce() {
  return (
    <Layout>
      <PageBanner />
      <Container>
      <Box display="flex" flexDirection="column"
      style={{ backgroundColor: '#eee', padding: '20px 10px', height: '40vh'}}>
      <Grid container spacing={2} >
        <Grid item xs={12} sm={12}>
          <Box display="flex" flexDirection="column">
            <h1>Retail & Ecommerce</h1>
            <ol>
                <li><strong>Order Assistance: </strong> Telecalling assists customers with placing orders,
                 tracking shipments, and resolving any issues related to their purchases.
                </li>
                <li><strong>Customer Service: </strong> Telecalling provides customer support for inquiries, returns, exchanges, 
                and product-related questions.
                </li>
                <li><strong>Sales and Promotions: </strong>Telecalling is used to promote sales, discounts, and new product launches 
                to customers, encouraging repeat purchases.
                </li>
                <li><strong>Feedback and Surveys: </strong>  Telecalling helps in collecting feedback from customers, 
                conducting satisfaction surveys, and improving products and services based on customer insights
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
