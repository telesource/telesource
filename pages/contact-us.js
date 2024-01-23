import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Box, Card, CardContent, TextField, Button, Typography, Grid } from '@mui/material';
import Layout from '../components/Layout';
import PageBanner from '@/components/PageBanner';

import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

export default function ContactPage() {
  const form = useRef();
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_qbqgv0q', 'template_e0hdxji', form.current, 'tAougbi2rsI1RqftQ')
      .then(
        (result) => {
          console.log(result.text);
          setMessage('Message Sent');
          e.target.reset(); // Reset the form fields
        },
        (error) => {
          console.log(error.text);
          setMessage('Failed to send message'); // You can handle error message similarly
        }
      );
  };


  return (
    <Layout>
      <PageBanner />
      <Box
        sx={{
          position: 'relative',
          height: '80vh', // Adjust as needed
          backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(/images/banner.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Grid container spacing={2} justifyContent="center" style={{ color: '#FFF'}}>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" gutterBottom component="div">
              Contact Info
            </Typography>
            <Box mt={2} style={{ paddingLeft: '20px'}}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom  style={{ color: '#6837f5'}}>
                <PhoneIcon /> Phone Number
                </Typography>
                <Typography variant="body1">
                  <a href="tel:+91 80808 76443">+91 80808 76443</a>
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom style={{ color: '#6837f5'}}>
                <EmailIcon /> Email ID
                </Typography>
                <Typography variant="body1">
                  <a href="mailto:info@telesourcenow.com">info@telesourcenow.com</a>
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom style={{ color: '#6837f5'}}>
                <RoomIcon /> Pune Address
                </Typography>
                <Typography variant="body1">
                  Office No: 102BB, Turning Point NX S.No: 206/3, Plot No: 17, behind Phoenix Marketcity, Viman Nagar,
                  Pune - 411014
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom style={{ color: '#6837f5'}}>
                <RoomIcon /> Bangalore Address
                </Typography>
                <Typography variant="body1">
                 Office no. 404A Arvind Shambabhin Devrachikenhalli Sennappa Layout Bommanahalli Bangalore - 560068                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom style={{ color: '#6837f5'}}>
                <RoomIcon /> Gurugram Address
                </Typography>
                <Typography variant="body1">
                Office no.201, New Office Bajghera Road, Ward No.7, Rajendra Park, Palam Vihar, Gurugram, Haryana 122006
                </Typography>
              </Grid>
            </Grid>
          </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card raised sx={{ maxWidth: 450, mx: 'auto' }}>
              <CardContent>
                <Typography variant="h4" gutterBottom component="div">
                  Send Us a Message
                </Typography>
                <form ref={form} onSubmit={sendEmail}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField label="First Name" fullWidth margin="normal" name="first_name" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField label="Last Name" fullWidth margin="normal" name="last_name" />
                    </Grid>
                  </Grid>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField label="Company Name" fullWidth margin="normal" name="first_name" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField label="Work Email" fullWidth margin="normal" name="last_name" />
                    </Grid>
                  </Grid>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField label="Mobile Number" fullWidth margin="normal" name="first_name" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField label="Services & Product" fullWidth margin="normal" name="last_name" />
                    </Grid>
                  </Grid>
                  <TextField
                    label="Notes"
                    fullWidth
                    margin="normal"
                    multiline
                    rows={2}
                    name="Notes"
                  />
                  <Box display="flex" justifyContent="center" marginTop={2}>
                  <Button
                    type="submit"
                    value="Send"
                    variant="contained"
                    size="large"
                    style={{ backgroundColor: '#6837f5', marginTop: '20px' }}
                  >
                    Send Message
                  </Button>
                </Box>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
}
