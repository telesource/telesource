import { Container, Typography, Box } from '@mui/material';

export default function Footer() {
  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'white', p: 3 }} className='footer'>
      <Container maxWidth="lg">
        <Typography variant="body1" align="center">
          © {new Date().getFullYear()} TelesourceNow
        </Typography>
      </Container>
    </Box>
  );
}
