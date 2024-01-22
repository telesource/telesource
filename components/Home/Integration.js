import React from 'react';
import { Grid, Box } from '@mui/material';
import MemoryIcon from '@mui/icons-material/Memory';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import Image from 'next/image';

const Integration = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" 
      style={{ backgroundColor: '#eee', padding: '20px 20px'}}>
        <div>
            <h1 style={{ paddingBottom: '25px'}}> Integrations</h1>
        </div>
      <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12} sm={2}  style={{ padding: '10px'}}>
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center">
          <Image 
            src="/images/slack.svg" // Route of the image file
            alt="Whatssap"
            width={100}  // Desired width
            height={100} // Desired height
            layout="responsive" // Makes the image responsive
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={2} style={{ padding: '10px'}}>
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center">
            <Image 
            src="/images/hubspot.svg" // Route of the image file
            alt="Whatssap"
            width={100}  // Desired width
            height={100} // Desired height
            layout="responsive" // Makes the image responsive
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={2}  style={{ padding: '10px'}}>
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center">
          <Image 
            src="/images/calendly.svg" // Route of the image file
            alt="Whatssap"
            width={100}  // Desired width
            height={100} // Desired height
            layout="responsive" // Makes the image responsive
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={2}  style={{ padding: '10px'}}>
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center">
          <Image 
            src="/images/airtable.svg" // Route of the image file
            alt="Whatssap"
            width={100}  // Desired width
            height={100} // Desired height
            layout="responsive" // Makes the image responsive
            />
          </Box>
        </Grid>

        <Grid item xs={12} sm={2}  style={{ padding: '10px'}}>
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center">
          <Image 
            src="/images/googlecalender.svg" // Route of the image file
            alt="Whatssap"
            width={100}  // Desired width
            height={100} // Desired height
            layout="responsive" // Makes the image responsive
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={2}  style={{ padding: '10px'}}>
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center">
          <Image 
            src="/images/googlesheet.svg" // Route of the image file
            alt="Whatssap"
            width={100}  // Desired width
            height={100} // Desired height
            layout="responsive" // Makes the image responsive
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={2}  style={{ padding: '10px'}}>
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center">
          <Image 
            src="/images/slaesforce.svg" // Route of the image file
            alt="Whatssap"
            width={100}  // Desired width
            height={100} // Desired height
            layout="responsive" // Makes the image responsive
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={2}  style={{ padding: '10px'}}>
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center">
          <Image 
            src="/images/zapier.svg" // Route of the image file
            alt="Whatssap"
            width={100}  // Desired width
            height={100} // Desired height
            layout="responsive" // Makes the image responsive
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={2}  style={{ padding: '10px'}}>
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center">
          <Image 
            src="/images/zoho.svg" // Route of the image file
            alt="Whatssap"
            width={100}  // Desired width
            height={100} // Desired height
            layout="responsive" // Makes the image responsive
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
    </div>
  )
}

export default Integration
