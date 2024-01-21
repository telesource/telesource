/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Grid, Box, Typography, Paper } from '@mui/material';
import Image from 'next/image';

const ProductPage = () => {
  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <Grid container style={{ backgroundColor: '#FFFFFF', padding: '10px' }}>
          <Grid item xs={12} md={6}>
          <h1>I Verifier</h1>
          <h2>Instant Verification Solution</h2>
          <p variant='p'>
          I Verifier is a tool that assists in verifying the authenticity of leads and ensures that the generated 
          leads are genuine and reliable. This solution enhances marketers efficiency by narrowing down their target audience.
          </p>
          </Grid>
          <Grid item xs={12} md={6} style={{ padding: '10px', paddingTop: '40px'}}>
            <Image 
            src="/images/i-Verifier.jpeg" // Route of the image file
            alt="i-Verifier"
            width={100}  // Desired width
            height={100} // Desired height
            layout="responsive" // Makes the image responsive
            />
          </Grid>
        </Grid>
        <Grid container style={{ backgroundColor: '#eee', padding: '10px'}}>          
        <Grid item xs={12} md={6} style={{ padding: '10px', paddingTop: '40px'}}>
            <Image 
            src="/images/Data Mining.jpeg" // Route of the image file
            alt="Data Mining"
            width={100}  // Desired width
            height={100} // Desired height
            layout="responsive" // Makes the image responsive
            />
          </Grid>
          <Grid item xs={12} md={6} style={{ padding: '10px', paddingTop: '40px'}}>
          <h1 variant="h4">DATA MINER</h1>
          <h2 variant='h6'>Utilizing Data Analytics and Visualization</h2>
          <p variant='p'>
          Introducing a platform that guarantees your data is utilized efficiently. This platform combines Excel 
          files featuring headers and empowers users to extract valuable analytics from the master file. It adds value, for the user.
          </p>
          </Grid>
        </Grid>
        <Grid container style={{ backgroundColor: '#fff', padding: '10px'}}>
          <Grid item xs={12} md={6} style={{ padding: '10px', paddingTop: '40px'}}>
          <h1 variant="h4">E Commerce Plugin</h1>
          {/* <Typography variant='h6'>Customisable E-Commerce plugin</Typography> */}
          <p variant='p'>
          E Commerce Plugin is a versatile WordPress plugin that allows you to customize and enhance your WordPress 
          website with e commerce capabilities. By clicking a buttons your WordPress site can transform into a complete 
          online store providing you with all the functionality you need for successful online selling.
          </p>
          </Grid>
          <Grid item xs={12} md={6} style={{ padding: '10px', paddingTop: '40px'}}>
            <Image 
            src="/images/Ecommerce plugin.png" // Route of the image file
            alt="Ecommerce Plugin"
            width={100}  // Desired width
            height={100} // Desired height
            layout="responsive" // Makes the image responsive
            />
          </Grid>
        </Grid>
        <Grid container  style={{ backgroundColor: '#eee', padding: '10px'}}>
         <Grid item xs={12} md={6} style={{ padding: '10px', paddingTop: '40px'}}>
            <Image 
            src="/images/Whatssap.png" // Route of the image file
            alt="Whatssap"
            width={100}  // Desired width
            height={100} // Desired height
            layout="responsive" // Makes the image responsive
            />
          </Grid>
          <Grid item xs={12} md={6} style={{ padding: '10px', paddingTop: '40px'}}>
          <h1 variant="h4">WhatsApp Solutions</h1>
          {/* <Typography variant='h6'>A WhatsApp Marketing solution</Typography> */}
          <p variant='p'>
          Discover a WhatsApp marketing solution that enables businesses to connect with an audience, foster strong 
          customer relationships and boost sales. Streamline message automation, through integration and empower agent 
          live chats, for efficient customer support.
          </p>
          </Grid>
        </Grid>
        <Grid container  style={{ backgroundColor: '#fff', padding: '10px'}}>
          <Grid item xs={12} md={6} style={{ padding: '10px', paddingTop: '40px'}}>
          <h1 variant="h4">Create Your Own Chatbot Flow</h1>
          {/* <Typography variant='h6'>Design your own chatbot flow</Typography> */}
          <p variant='p'>
          Craft unique chatbot flows to enhance customer engagement and streamline conversations. Seamlessly collect 
          payments, through WhatsApp. Provide round the clock assistance to your customers and prospects. Our user 
          friendly chatbots are designed for efficiency making it effortless to interact with your audience at any time.
          </p>
          </Grid>
          <Grid item xs={12} md={6} style={{ padding: '10px', paddingTop: '40px'}}>
            <Image 
            src="/images/Chatbot.jpeg" // Route of the image file
            alt="Chatbot"
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
