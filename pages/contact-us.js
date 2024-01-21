/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { TextField, Typography, InputLabel, Select, MenuItem, Button, Box,Grid } from '@mui/material';

import PageBanner from '@/components/PageBanner';
import Layout from '../components/Layout';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
export default function ContactUs() {

  // Form submission handler (to be implemented)
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };


  return (
    <Layout>
      <PageBanner />
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" 
      style={{ backgroundColor: '#eee', padding: '40px 50px'}}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
        <h1 variant="h4" gutterBottom>Contact Us</h1>
        <h1 variant="h3" gutterBottom style={{ marginTop: '40px', fontSize: '18px' }}>  <RoomIcon /> Pune Address:-</h1>
          <p variant="body1">
            Office No: 102BB, Turning Point NX S.No: 206/3, Plot No: 17, 
            behind Phoenix Marketcity, Viman Nagar, Pune - 411014
          </p>
          <h1 variant="h3" gutterBottom style={{ marginTop: '40px', fontSize: '18px' }}> <RoomIcon /> Bangalore Address: -</h1>
          <p variant="body1">
            Office no. 404A Arvind Shambabhin
            Devrachikenhalli Sennappa Layout
            Bommanahalli Bangalore - 560068
          </p>
          <h1 variant="h3" gutterBottom style={{ marginTop: '40px', fontSize: '18px' }}><RoomIcon /> Gurgaon Address:-</h1>
          <p variant="body1">
            office no.201, New office Bajghera Road, Ward No.7, Rajendra Park, 
            Palam Vihar, Gurugram, Haryana 122006
          </p>
          <h1 variant="h3" gutterBottom style={{ marginTop: '40px', fontSize: '18px' }}><PhoneIcon /> Phone Number:-</h1>
          <p> <a href="tel:+91 80808 76443">+91 80808 76443</a>  </p>
          <h1 variant="h3" gutterBottom style={{ marginTop: '40px', fontSize: '18px' }}><EmailIcon /> Email ID:-</h1>
          <p>
          <a href="mailto:info@telesourcenow.com">info@telesourcenow.com</a>
          </p>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center">
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
            <TextField label="First Name" fullWidth margin="normal" required />
            <TextField label="Last Name" fullWidth margin="normal" required />
            <TextField label="Company Name" fullWidth margin="normal" required />
            <TextField label="Work Email" fullWidth margin="normal" required />
            <TextField label="Mobile Number" fullWidth margin="normal" required />
            <TextField label="Services & Product" fullWidth margin="normal" />
            <TextField label="Notes" fullWidth margin="normal" multiline rows={4} />
            <Box display="flex" justifyContent="center" marginTop={2} >
              <Button type="submit" variant="contained" size="large" style={{ backgroundColor: '#6837f5', marginTop: '20px' }}>
                Submit
              </Button>
            </Box>
          </form>
          </Box>
        </Grid>
      </Grid>
    </Box>
    </Layout>
  );
}
