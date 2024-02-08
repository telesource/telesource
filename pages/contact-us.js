import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { TextField, Button, Box, Grid } from '@mui/material';

import PageBanner from '@/components/PageBanner';
import Layout from '../components/Layout';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

export default function ContactUs() {
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
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        style={{ backgroundColor: '#eee', padding: '40px 20px' }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <h1 variant="h4" gutterBottom>
              Contact Us
            </h1>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div style={{ flex: 1 }}>
                <h1 variant="h3" gutterBottom style={{ marginTop: '40px', fontSize: '18px' }}>
                  <RoomIcon /> Pune Address:-
                </h1>
                <p style={{ padding: '2px 5px'}}>
                  Office No: 102BB, Turning Point NX S.No: 206/3, Plot No: 17, behind Phoenix Marketcity, Viman Nagar,
                  Pune - 411014
                </p>
              </div>
              <div style={{ flex: 1 }}>
                <h1 variant="h3" gutterBottom style={{ marginTop: '40px', fontSize: '18px' }}>
                  <RoomIcon /> Bangalore Address: -
                </h1>
                <p style={{ padding: '2px 5px'}}>
                  Office no. 404A Arvind Shambabhin Devrachikenhalli Sennappa Layout Bommanahalli Bangalore - 560068
                </p>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div style={{ flex: 1 }}>
                <h1 variant="h3" gutterBottom style={{ marginTop: '40px', fontSize: '18px' }}>
                <RoomIcon /> Gurugram Address:-
                </h1>
                <p style={{ padding: '2px 5px'}}>
                Office no.201, New Office Bajghera Road, Ward No.7, Rajendra Park, Palam Vihar, Gurugram, Haryana 122006
                </p>
              </div>
              <div style={{ flex: 1 }}>
              <h1 variant="h3" gutterBottom style={{ marginTop: '40px', fontSize: '18px' }}>
              <PhoneIcon /> Phone Number:-
            </h1>
            <p>
              <a href="tel:+91 80808 76443">+91 80808 76443</a>
            </p>
            <h1 variant="h3" gutterBottom style={{ marginTop: '10px', fontSize: '18px' }}>
              <EmailIcon /> Email ID:-
            </h1>
            <p>
              <a href="mailto:sales@telesourcenow.com">sales@telesourcenow.com</a>
            </p>
              </div>
            </div>

          </Grid>
          <Grid item xs={12} sm={6}>
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center">
              <h1 style={{ paddingBottom: '15px'}}>Contact Us</h1>
              <form ref={form} onSubmit={sendEmail}>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <TextField label="First Name" name="first_name" fullWidth required size="small" style={{ marginLeft: '3px', marginRight: '3px'}} />
                  <TextField label="Last Name" name="last_name" fullWidth required size="small" style={{ marginLeft: '3px', marginRight: '3px'}} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <TextField label="Company Name" name="company_name" fullWidth margin="normal" required size="small" style={{ marginLeft: '3px', marginRight: '3px'}} />
                  <TextField label="Work Email" name="work_email" fullWidth margin="normal" required size="small" style={{ marginLeft: '3px', marginRight: '3px'}} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <TextField label="Mobile Number" name="mobile_number" fullWidth margin="normal" required  size="small" style={{ marginLeft: '3px', marginRight: '3px'}}/>
                  <TextField label="Services & Product" name="service_and_product" fullWidth margin="normal" size="small" style={{ marginLeft: '3px', marginRight: '3px'}} />
                </div>
                <TextField label="Notes" name="notes" fullWidth margin="normal" multiline rows={1} style={{ marginLeft: '3px', marginRight: '3px'}} />
                <Box display="flex" justifyContent="center" marginTop={2}>
                  <Button
                    type="submit"
                    value="Send"
                    variant="contained"
                    size="large"
                    style={{ backgroundColor: '#6837f5', marginTop: '20px' }}
                  >
                    Submit
                  </Button>
                </Box>
                {message && (
                  <div style={{ color: message === 'Message Sent Successfully' ? 'green' : 'red' }}>{message}</div>
                )}
              </form>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
}
