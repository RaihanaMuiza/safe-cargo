import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import Header from '../Components/Header';
import img1 from '../Assets/LandingImage1.jpg';
import img2 from '../Assets/LandingImage2.jpg';
import img3 from '../Assets/LandingImage3.jpg';
import img4 from '../Assets/LandingImage4.jpg';

const images = [img1, img2, img3, img4];

const LandingPage = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 1500); // 1.5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        height: '100vh',
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Header />

      {/* Background Image Layer */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${images[index]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'background-image 1s ease-in-out',
          zIndex: 1,
        }}
      />

      {/* Overlay Content */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '33.33%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          px: 3,
          zIndex: 2, 
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
