import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import Header from '../Components/Header';

const blogPosts = [
  {
    title: 'How AI is Changing the Cargo Industry',
    date: 'April 12, 2025',
    location: 'Colombo, Sri Lanka',
    description:
      'Explore how artificial intelligence is optimizing logistics operations, predicting demand, and automating documentation in the cargo sector.',
  },
  {
    title: 'Top 5 Challenges in Global Freight',
    date: 'March 28, 2025',
    location: 'Dubai, UAE',
    description:
      'A breakdown of common issues in international freight forwarding and strategies that SafeCargo uses to overcome them.',
  },
  {
    title: 'Sustainable Cargo Practices',
    date: 'February 15, 2025',
    location: 'Hamburg, Germany',
    description:
      'Discover how the cargo industry is shifting toward greener practices and how SafeCargo contributes with eco-friendly solutions.',
  },
];

const BlogsPage = () => {
  return (
    <Box sx={{ bgcolor: '#0D0D0D', minHeight: '100vh', width: '100%' }}>
      <Header />

      <Box
        sx={{
          px: '10vw',
          py: 5,
        }}
      >
        <Typography
          variant="h3"
          align="center"
          color="#FFCC00"
          sx={{ fontWeight: 'bold', mb: 5 }}
        >
          Our Blogs
        </Typography>

        {blogPosts.map((post, index) => (
          <Card
            key={index}
            sx={{
              mb: 4,
              bgcolor: 'rgba(30,30,30,0.7)',
              color: 'white',
              borderRadius: 2,
              boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
              px: 2,
              py: 2,
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'scale(1.02)',
                boxShadow: '0 6px 18px rgba(0,0,0,0.8)',
              },
            }}
          >
            <CardContent>
              <Typography variant="h5" sx={{ color: '#FFCC00', fontWeight: 'bold' }}>
                {post.title}
              </Typography>

              <Typography variant="subtitle2" sx={{ mt: 1, fontStyle: 'italic' }}>
                {post.date} — {post.location}
              </Typography>

              <Typography variant="body1" sx={{ mt: 2 }}>
                {post.description}
              </Typography>

              <Typography
                sx={{
                  mt: 2,
                  color: '#4CAF50',
                  fontWeight: 500,
                  cursor: 'pointer',
                  display: 'inline-block',
                  transition: '0.3s',
                  '&:hover': {
                    fontWeight: 'bold',
                  },
                }}
              >
                Read More &rarr;
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default BlogsPage;
