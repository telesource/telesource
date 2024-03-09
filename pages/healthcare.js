/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Grid, Box, Container } from '@mui/material';
import PageBanner from '@/components/PageBanner';
import Layout from '../components/Layout';

export default function Healthcare() {
  return (
    <Layout>
      <PageBanner />
    <Container>
    <Box display="flex" flexDirection="column" 
      style={{ backgroundColor: '#eee', padding: '20px 10px', height: '40vh'}}>
      <Grid container spacing={2} >
        <Grid item xs={12} sm={12}>
          <Box display="flex" flexDirection="column">
            <h1>Healthcare</h1>
            <ol>
              <li> <strong> Medication Refills: </strong>  Telecalling allows patients to request prescription refills from 
              pharmacies, improving medication adherence and convenience.
              </li>
              <li> <strong>Health Monitoring:  </strong> Telecalling facilitates remote monitoring of patient health metrics, 
              enabling timely interventions and better disease management.
              </li>
              <li> <strong>Patient Education:  </strong> Telecalling provides patients with information about medications, 
              dosage instructions, and potential side effects, improving medication compliance and health outcomes.
              </li>
              <li> <strong>Appointment Reminders: </strong>  Telecalling helps in reminding patients about upcoming
              appointments with healthcare providers or for medical tests, reducing no-show rates and ensuring timely care.</li>
            </ol>
          </Box>
        </Grid>
      </Grid>
    </Box>
    </Container>
    </Layout>
  );
}
