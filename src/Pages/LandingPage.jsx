import { Box, Typography } from '@mui/material';
import Header from '../Components/Header';
import landingImage from '../Assets/LandingImage4.jpg';

const LandingPage = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        backgroundImage: `url(${landingImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
      }}
    >
      <Header />

      <Box
        sx={{
          width: '33.33%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          px: 3,
        }}
      >
        <Typography
          variant="h2"
          color="#FFCC00"
          sx={{
            fontWeight: 'bold',
            fontFamily: 'Montserrat, sans-serif',
            textAlign: 'center',
          }}
        >
          Safe Cargo
        </Typography>

        <Typography
          variant="h6"
          color="white"
          sx={{
            // fontStyle: 'italic',
            fontFamily: 'Montserrat, sans-serif', 
            mt: 2,
            textAlign: 'center',
          }}
        >
          Driven to Deliver, Powered by Trust!
        </Typography>
      </Box>
    </Box>
  );
};

export default LandingPage;
