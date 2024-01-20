/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { TextField, FormControl, InputLabel, Select, MenuItem, Button, Box,Grid } from '@mui/material';

import PageBanner from '@/components/PageBanner';
import Layout from '../components/Layout';
import RoomIcon from '@mui/icons-material/Room';
export default function ContactUs() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    service: '',
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData); // You can replace this with your form submission logic
  };


  return (
    <Layout>
      <PageBanner />
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" 
      style={{ backgroundColor: '#eee', padding: '20px 10px'}}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center">
          <RoomIcon fontSize="large" />
            <h1>Address - Pune</h1>
            <h3>
            Office No: 102BB, Turning Point NX S.No: 206/3, Plot No: 17, behind Phoenix Marketcity, Viman Nagar, Pune.
            </h3>
          <div>
          <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2233539724675!2d73.91390477506332!3d18.563966482538028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c95861694675%3A0xbac360080a18183e!2sNetCom%20Business%20Solutions%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1682671717695!5m2!1sen!2sin"
            width="600"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          </div>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center">
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
      <TextField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        margin="normal"
        fullWidth
      />
      <TextField
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        margin="normal"
        fullWidth
      />
      <TextField
        label="Number"
        name="number"
        type="number"
        value={formData.number}
        onChange={handleChange}
        margin="normal"
        fullWidth
      />
      <FormControl fullWidth margin="normal">
        <InputLabel id="service-label">Service</InputLabel>
        <Select
          labelId="service-label"
          name="service"
          value={formData.service}
          label="Service"
          onChange={handleChange}
        >
          <MenuItem value="service1">Service 1</MenuItem>
          <MenuItem value="service2">Service 2</MenuItem>
        </Select>
      </FormControl>
      <Box textAlign="center" marginTop={2}>
        <Button type="submit" variant="contained" color="primary">
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
