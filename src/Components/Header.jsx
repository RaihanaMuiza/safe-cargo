import  { useState } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import FullScreenNav from './FullScreenNav';

const Header = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate(); 

  return (
    <>
      <Box
        sx={{
          position: 'fixed',
          width: '100%',
          top: 0,
          left: 0,
          zIndex: 10,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          px: 3,
          py: 2,
          backgroundColor: 'transparent',
        }}
      >
        {}
        <Typography
          variant="h6"
          color="#FFCC00"
          fontWeight="bold"
          onClick={() => navigate('/')} 
          sx={{ cursor: 'pointer' }}
        >
          SafeCargo
        </Typography>

       
        <IconButton
          onClick={() => setOpen(true)}
          sx={{ color: '#FFCC00', marginRight: '4%' }} 
        >
          <MenuIcon fontSize="large" />
        </IconButton>
      </Box>

     
      <FullScreenNav open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default Header;
