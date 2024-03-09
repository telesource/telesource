/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Grid, Link, Box, Button, container, Container } from '@mui/material';
import WifiCallingIcon from '@mui/icons-material/WifiCalling';
import MemoryIcon from '@mui/icons-material/Memory';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';

const Services = () => {
  return (
   <Container style={{ paddingTop: '20px', paddingBottom: '20px'}}>
     <Box display="flex" flexDirection="column"
      style={{ backgroundColor: '#eee', padding: '20px 10px'}}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={4}  style={{ padding: '20px'}}>
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center">
            <TipsAndUpdatesIcon fontSize="large"  style={{ color: '#6837f5'}}  />
            <h2>Conversational AI</h2>
            <ol>
              <li> 
                <strong>Understanding Human Language: </strong> 
                Conversational AI systems utilize Natural Language Understanding (NLU) to 
                grasp the meaning and context of human language inputs enabling them to comprehend user intentions and 
                extract information from speech.
              </li>
            </ol>
            <Link href='/conversational-ai' passHref>
            <Button variant="contained" style={{ backgroundColor: '#6837f5', marginTop: '20px' }}>
              Read More
            </Button>
          </Link>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4} style={{ padding: '20px'}}>
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center">
            <WifiCallingIcon fontSize="large" style={{ color: '#6837f5'}} />
            <h2 >Telecalling Solution</h2>
            <ol>
              <li> 
                <strong>Security and Transparency: </strong> 
                 Highlight your robust security measures and transparent operations to assure clients of their data's 
                 safety and the integrity of your services.
              </li>
            </ol>
            <br />
            <Link href='/tele-calling-solutions' passHref>
            <Button variant="contained" style={{ backgroundColor: '#6837f5', marginTop: '20px' }}>
              Read More
            </Button>
          </Link>
          </Box>
        </Grid>

        <Grid item xs={12} sm={4} style={{ padding: '20px'}}>
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center">
            <MemoryIcon fontSize="large" style={{ color: '#6837f5'}}  />
            <h2>Digital media Solution</h2>
            <ol>
              <li> 
                <strong>Omni-channel Customer Engagement: </strong> 
                Highlight how your solution enables businesses to seamlessly connect with customers across various 
                channels, providing a unified and consistent experience.
              </li>
            </ol>
            <br />
            <Link href='/digital-media-solutions' passHref>
            <Button variant="contained" style={{ backgroundColor: '#6837f5', marginTop: '20px' }}>
              Read More
            </Button>
          </Link>
          </Box>
        </Grid>

      </Grid>
    </Box>
   </Container>
  );
};

export default Services;
