import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid } from '@mui/material';

const Banner = () => {
  const [typingText, setTypingText] = useState('');
  const fullText = ' The Next Level Of Communication Platform. <br />Empowering Enterprises. ';
  const typingSpeed = 100; // Speed of typing in milliseconds
  const resetDelay = 3000; // Delay before resetting the text

  useEffect(() => {
    let index = 0;
    let isCancelled = false;

    const typeText = () => {
      if (isCancelled) return;

      if (index < fullText.length) {
        setTypingText((prev) => prev + fullText.charAt(index));
        index++;
        setTimeout(typeText, typingSpeed);
      } else {
        setTimeout(() => {
          if (isCancelled) return;
          setTypingText('');
          index = 0;
          typeText(); // Restart typing
        }, resetDelay);
      }
    };

    typeText();

    // Cleanup function
    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <Box
      sx={{
        position: 'relative',
        height: 500, // Adjust as needed
        backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.4)), url(/images/banner.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Grid container>
        <Grid item xs={12} md={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Typography variant="h4" 
          sx={{ p: 2 }} 
          dangerouslySetInnerHTML={{ __html: typingText }}  
          style={{ padding: '10px', color: '#FFF'}}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;

