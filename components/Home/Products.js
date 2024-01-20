/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Grid, Box, Typography, Paper } from '@mui/material';
import Image from 'next/image';

const ProductPage = () => {
  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" 
    style={{ padding: '20px 10px'}}>
        <Grid container>
          <Grid item xs={12} md={6}>
          <Typography variant="h4">I-Verifier</Typography>
          <Typography variant='h6'>Solution for instant verification</Typography>
          <Typography variant='p'>
          I-Verifier is an intelligent solution that help in confirming the lead authenticity and ensure's that the 
          leads generated are genuine and trustworthy. This solutions brings more efficiency for the marketers by
           narrowing their target funnel.
          </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Image 
            src="/images/banner-1.jpg" // Route of the image file
            alt="Description of the image"
            width={100}  // Desired width
            height={100} // Desired height
            layout="responsive" // Makes the image responsive
            />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Image 
            src="/images/banner-1.jpg" // Route of the image file
            alt="Description of the image"
            width={100}  // Desired width
            height={100} // Desired height
            layout="responsive" // Makes the image responsive
            />
          </Grid>
          <Grid item xs={12} md={6}>
          <Typography variant="h4">Data Miner</Typography>
          <Typography variant='h6'>Data analytics and visualisation</Typography>
          <Typography variant='p'>
          A Platform that ensures your data not get waste in any sense, This platform bundle the high volume excel files 
          with multiple header and enable the user to fetch the analytics out of the master file that add more value for 
          the user.
          </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} md={6}>
          <Typography variant="h4">E-Commerce Plugin</Typography>
          <Typography variant='h6'>Customisable E-Commerce plugin</Typography>
          <Typography variant='p'>
          E-Commerce plugin is a customisable WordPress plugin that adds e-commerce functionality to your WordPress 
          website so you can have an online store. With just a few clicks, your WordPress website turns into a 
          fully-functional e-commerce website.
          </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Image 
            src="/images/banner-1.jpg" // Route of the image file
            alt="Description of the image"
            width={100}  // Desired width
            height={100} // Desired height
            layout="responsive" // Makes the image responsive
            />
          </Grid>
        </Grid>
        <Grid container>
         <Grid item xs={12} md={6}>
            <Image 
            src="/images/banner-1.jpg" // Route of the image file
            alt="Description of the image"
            width={100}  // Desired width
            height={100} // Desired height
            layout="responsive" // Makes the image responsive
            />
          </Grid>
          <Grid item xs={12} md={6}>
          <Typography variant="h4">WhatsApp Solutions</Typography>
          <Typography variant='h6'>A WhatsApp Marketing solution</Typography>
          <Typography variant='p'>
          A WhatsApp Marketing solution, helps brands reach an enormous audience, build strong relationships with 
          customers, and increase sales. Automate Messages via Integration and Enable Multi-Agent Live Chat for 
          Customer Support.
          </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} md={6}>
          <Typography variant="h4">Chat Bot</Typography>
          <Typography variant='h6'>Design your own chatbot flow</Typography>
          <Typography variant='p'>
          Design your own chatbot flows! Engage customers, Collect payment on your WhatsApp seamlessly. 
          Make conversation workflows more efficient and serve customers. Our chatbots are simple and easy 
          to use to engage your customers and prospects around the clock.
          </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Image 
            src="/images/banner-1.jpg" // Route of the image file
            alt="Description of the image"
            width={100}  // Desired width
            height={100} // Desired height
            layout="responsive" // Makes the image responsive
            />
          </Grid>
        </Grid>
    </Box>
  );
};

export default ProductPage;
