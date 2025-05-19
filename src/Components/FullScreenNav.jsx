import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';

const pages = [
  'Home',
  'About Us',
  'Our Services',
  'Blogs',
  'Our Clients',
  'Footer',
];

const FullScreenNav = ({ open, onClose }) => {
  const navigate = useNavigate();

  const handleClick = (label) => {
    onClose();

    if (label === 'Our Services') {
      navigate('/services');
    }

    if (label === 'Home') {
      navigate('/');
    }

    // Add more navigation routes here if needed
  };

  if (!open) return null;

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 100,
        width: '100%',
        height: '100%',
        bgcolor: 'rgba(0, 0, 0, 0.95)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        transform: open ? 'translateX(0)' : 'translateX(-100%)',
        transition: 'transform 0.5s ease-in-out',
      }}
    >
      {/* Close Button */}
      <IconButton
        onClick={onClose}
        sx={{
          position: 'absolute',
          top: 20,
          right: 20,
          color: 'white',
        }}
      >
        <CloseIcon fontSize="large" />
      </IconButton>

      {/* Navigation Items */}
      {pages.map((page, index) => (
        <Typography
          key={index}
          onClick={() => handleClick(page)}
          sx={{
            cursor: 'pointer',
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '2rem',
            my: 1,
          }}
        >
          {page}
        </Typography>
      ))}
    </Box>
  );
};

export default FullScreenNav;
