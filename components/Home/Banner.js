import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid } from '@mui/material';

const Banner = () => {
  const [typedSegments, setTypedSegments] = useState([]);
  const segments = [
    { type: 'text', content: 'The Next Level Of Communication Platform. Empowering Enterprises.' },
  ];
  const typingSpeed = 100; // Speed of typing in milliseconds
  const resetDelay = 3000; // Delay before starting to type again

  useEffect(() => {
    let segmentIndex = 0;
    let charIndex = 0;
    let isCancelled = false;

    const typeSegment = () => {
      if (isCancelled) return;

      if (segments[segmentIndex].type === 'text' && charIndex < segments[segmentIndex].content.length) {
        setTypedSegments((prev) =>
          prev.map((seg, idx) => 
            idx === segmentIndex ? { ...seg, content: segments[segmentIndex].content.slice(0, charIndex + 1) } : seg
          )
        );
        charIndex++;
        setTimeout(typeSegment, typingSpeed);
      } else if (charIndex === segments[segmentIndex].content.length) {
        setTimeout(() => { // After finishing a segment, wait for a bit before resetting
          if (isCancelled) return;
          setTypedSegments([]); // Clear the typed segments
          segmentIndex = 0; // Reset segment index to start from the first segment
          charIndex = 0; // Reset character index
          typeSegment(); // Start typing again
        }, resetDelay);
      }
    };

    // Initialize typedSegments with the same structure as segments but empty text content
    setTypedSegments(segments.map((seg) => (seg.type === 'text' ? { ...seg, content: '' } : seg)));

    typeSegment();

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
        backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.4)), url(/images/banner.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Grid container>
        <Grid item xs={12} md={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Typography variant="h4" sx={{ p: 2, color: '#FFF' }}>
            {typedSegments.map((segment, index) =>
              segment.type === 'text' ? segment.content : segment.content
            )}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;
