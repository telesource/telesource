import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid } from '@mui/material';

const Banner = () => {
  const [typedText, setTypedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const fullText = 'The Next Level Of Communication Platform. Empowering Enterprises.';
  const typingSpeed = 100; // Speed of typing in milliseconds
  const resetDelay = 3000; // Delay before starting to type again after the full text is displayed

  useEffect(() => {
    if (charIndex < fullText.length) {
      const timerId = setTimeout(() => {
        setTypedText((typed) => typed + fullText[charIndex]);
        setCharIndex((index) => index + 1);
      }, typingSpeed);

      return () => clearTimeout(timerId);
    } else {
      const timerId = setTimeout(() => {
        setTypedText('');
        setCharIndex(0);
      }, resetDelay);

      return () => clearTimeout(timerId);
    }
  }, [charIndex, typedText]);

  return (
    <Box
      sx={{
        position: 'relative',
        height: 500, // Adjust as needed
        backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.4)), url(/images/banner.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Grid container>
        <Grid item xs={12} md={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Typography variant="h4" sx={{ p: 2, color: '#FFF' }}>
            {typedText}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;
