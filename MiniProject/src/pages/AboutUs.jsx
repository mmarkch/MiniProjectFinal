import React from 'react';
import Navbar from './Navbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';


const AboutUs = () => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: 550,
          width: 1650,
          bgcolor: 'aliqua',
          padding: '16px',
        }}
      >
        <Typography variant="h4" component="div" gutterBottom sx={{fontFamily: 'readex-fonts-bold'}}>
          About Us
        </Typography>
        <Typography variant="body1" gutterBottom sx={{width:1500,fontFamily: 'readex-fonts',marginTop:"20px"}}>
          Welcome to CozyNook, the ultimate destination for travelers looking for the perfect accommodations for their next trip. Our mission is to help you find comfortable, safe, and affordable accommodations that meet your unique needs and preferences. With our advanced search and filter options, you can find the best places to stay that fit your budget and style.
        </Typography>
        <Typography variant="body1" gutterBottom sx={{width:1500,fontFamily: 'readex-fonts',marginTop:"15px"}}>
          At CozyNook, we pride ourselves on our commitment to transparency, accuracy, and user-friendliness. Our platform provides up-to-date and reliable information about accommodations worldwide, using advanced algorithms and user-generated reviews to provide objective ratings and rankings.
        </Typography>
        <Typography variant="body1" gutterBottom sx={{width:1500,fontFamily: 'readex-fonts',marginTop:"15px"}}>
          Whether you're looking for a cozy bed and breakfast in the countryside, a luxury hotel in the city, or a budget-friendly hostel for your backpacking adventure, CozyNook has got you covered. Our team of experienced travel experts and developers work tirelessly to ensure that our platform is easy to use, reliable, and accessible to everyone.
        </Typography>
        <Typography variant="body1" gutterBottom sx={{width:1500,fontFamily: 'readex-fonts',marginTop:"15px"}}>
          Thank you for choosing CozyNook for your travel needs. We look forward to helping you find your perfect accommodation and creating unforgettable travel memories.
        </Typography>
      </Box>
    </>
  );
};

export default AboutUs;
