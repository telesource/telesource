import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import MemoryIcon from '@mui/icons-material/Memory';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';

const Business = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" 
      style={{ backgroundColor: '#eee', padding: '20px 10px'}}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={4}>
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center">
            <AccountBalanceIcon fontSize="large" />
            <Typography variant="h4">Tele-Calling Solutions</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center">
            <MemoryIcon fontSize="large" />
            <Typography variant="h4">Digital Media Solutions</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center">
            <TipsAndUpdatesIcon fontSize="large" />
            <Typography variant="h4">Conversational Gen-AI</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
    </div>
  )
}

export default Business
