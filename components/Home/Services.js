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
        <Grid item xs={12} sm={4}>
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center">
            <WifiCallingIcon fontSize="large" />
            <Typography variant="h4">Tele-Calling Solutions</Typography>
            <Typography variant="p">
            India’s most secure and transparent Tele-calling partner, with no fixed seat costs, 100% productivity, 
            best-in-class connectivity and powerful analytics.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center">
            <MemoryIcon fontSize="large" />
            <Typography variant="h4">Digital Media Solutions</Typography>
            <Typography variant="p">
            Seamless omni-channel customer connect & digital marketing to engage, convert, and grow. Conquer every digital 
            touchpoint and orchestrate your brand's digital symphony.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center">
            <TipsAndUpdatesIcon fontSize="large" />
            <Typography variant="h4">Conversational Gen-AI</Typography>
            <Typography variant="p">
            Capture high-intent leads and drive more sales through automated conversations.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Services;
