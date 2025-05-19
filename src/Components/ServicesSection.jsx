import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography, Card, CardMedia, CardContent } from '@mui/material';
import service1 from '../Assets/service1.jpg';
import service2 from '../Assets/service2.jpg';
import service3 from '../Assets/service3.jpg';
import service4 from '../Assets/service4.jpg';
import service5 from '../Assets/service5.jpg';
import service6 from '../Assets/service6.jpg';

const services = [
  {
    title: 'Freight Forwarding',
    image:  service1,
    description: 'Efficient global freight transport solutions.',
  },
  {
    title: 'Customs Clearance',
    image:  service2,
    description: 'Smooth and secure customs handling.',
  },
  {
    title: 'Warehousing',
   image:  service3,
    description: 'Safe and organized storage options.',
  },
  {
    title: 'Distribution',
  image:  service4,
    description: 'Reliable regional and last-mile delivery.',
  },
  {
    title: 'Logistics Consulting',
    image:  service5,
    description: 'Expert advice for optimized logistics.',
  },
  {
    title: 'Tracking & Visibility',
    image:  service6,
    description: 'Real-time cargo tracking solutions.',
  },
];

const ServicesSection = () => {
  const carouselRef = useRef(null);
  const [index, setIndex] = useState(0);

  // Auto-scroll every 1 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 2) % services.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const scrollAmount = index * 100;
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  }, [index]);

  return (
    <Box sx={{ bgcolor: '#0D0D0D', py: 10, px: '10vw', height: '100%', overflow: 'hidden' }}>
      <Typography
        variant="h3"
        align="center"
        color="#FFCC00"
        sx={{
          fontWeight: 'bold',
        //   fontFamily: `'Montserrat, sans-serif'`,
          mb: 6,
        }}
      >
        Global Solutions
      </Typography>

      {/* Card Carousel */}
      <Box
        ref={carouselRef}
        sx={{
          display: 'flex',
          overflowX: 'hidden',
          scrollBehavior: 'smooth',
        }}
      >
        {services.map((service, i) => (
          <Card
            key={i}
            sx={{
              minWidth: '35%',
              height: '60vh', 
              mr: 3,
              display: 'flex',
              bgcolor: 'rgba(31, 30, 30, 0.7)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
              color: 'white',
              borderRadius: 2,
              overflow: 'hidden',
            }}
          >
            <CardMedia
              component="img"
              image={service.image}
              alt={service.title}
              sx={{ width: '50%', objectFit: 'cover' }}
            />
            <CardContent sx={{ width: '50%' }}>
              <Typography variant="h6" fontWeight="bold">
                {service.title}
              </Typography>
              <Typography variant="body2" mt={1}>
                {service.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Pagination  */}
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        {Array.from({ length: services.length / 2 }).map((_, dotIndex) => (
          <Box
            key={dotIndex}
            component="span"
            sx={{
              display: 'inline-block',
              width: 10,
              height: 10,
              mx: 1,
              borderRadius: '50%',
              bgcolor: dotIndex === index / 2 ? '#FFCC00' : 'gray',
              transition: '0.3s',
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ServicesSection;
