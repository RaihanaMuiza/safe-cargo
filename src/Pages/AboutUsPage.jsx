import { Box, Typography, Button } from '@mui/material';
import Header from '../Components/Header';
import img1 from '../Assets/service4.jpg'; 

const AboutUsPage = () => {
  return (
    <Box
      sx={{
        bgcolor: '#0D0D0D',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden'
      }}
    >
    
      <Header />

     
      <Box
        sx={{
          display: 'flex',
          height: 'calc(100vh - 70px)', 
          width: '100%',
          px: '5vw',
          mt: '70px', 
        }}
      >
      
        <Box sx={{ width: '50%' }}>
          <Box
            component="img"
            src={img1}
            alt="About SafeCargo"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            //   borderRadius: 2,
            }}
          />
        </Box>

    
        <Box
          sx={{
            width: '50%',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            px: 5,
             marginRight: '30px'
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: '#FFCC00',
              fontWeight: 'bold',
              mb: 2,
            }}
          >
            Welcome to SafeCargo
          </Typography>

          <Typography variant="body1" sx={{ fontSize: '1rem', lineHeight: 1.8}}>
            SafeCargo is committed to delivering trusted, efficient, and innovative cargo solutions worldwide. 
            From freight forwarding to real-time tracking, we serve with reliability and precision. 
            Our team ensures every delivery is smooth, secure, and timely — building trust one shipment at a time.
          </Typography>

          <Button
            variant="outlined"
            sx={{
              mt: 4,
              borderColor: '#FFCC00',
              color: '#FFCC00',
              width: 'fit-content',
              '&:hover': {
                bgcolor: '#FFCC00',
                color: '#0D0D0D',
              },
            }}
          >
            Learn More
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutUsPage;
