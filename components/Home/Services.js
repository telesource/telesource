/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import WifiCallingIcon from '@mui/icons-material/WifiCalling';
import MemoryIcon from '@mui/icons-material/Memory';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';

const Services = () => {
  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" 
      style={{ backgroundColor: '#eee', padding: '20px 10px'}}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={4} style={{ padding: '10px'}}>
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center">
            <WifiCallingIcon fontSize="large" style={{ color: '#6837f5'}} />
            <h2 >Tele-Calling Solutions</h2>
            <p>
            India’s most secure and transparent Tele-calling partner, with no fixed seat costs, 100% productivity, 
            best-in-class connectivity and powerful analytics.
            </p>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4} style={{ padding: '10px'}}>
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center">
            <MemoryIcon fontSize="large" style={{ color: '#6837f5'}}  />
            <h2>Digital Media Solutions</h2>
            <p>
            Seamless omni-channel customer connect & digital marketing to engage, convert, and grow. Conquer every digital 
            touchpoint and orchestrate your brand's digital symphony.
            </p>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}  style={{ padding: '10px'}}>
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center">
            <TipsAndUpdatesIcon fontSize="large"  style={{ color: '#6837f5'}}  />
            <h2>Conversational Gen-AI</h2>
            <p>
            Conversational AI enhances user experience by enabling natural, real-time interactions with 
            machines, improving customer satisfaction and efficiency in various applications, from 
            customer support to virtual assistants. It also streamlines processes, reducing response times 
            and facilitating personalized communication for businesses.
            </p>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Services;
