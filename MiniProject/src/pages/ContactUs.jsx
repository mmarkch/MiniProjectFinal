import React from 'react';
import Navbar from './Navbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { useNavigate } from 'react-router-dom';


const ContactUs = () => {
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
        <Typography variant="h4" component="div" gutterBottom sx={{fontFamily: 'readex-fonts-bold',mb:"100px"}}>
          Contact Us
        </Typography>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
          <PhoneIcon sx={{ marginRight: '8px' }} />
          <Typography variant="body1" gutterBottom sx={{fontFamily: 'readex-fonts'}}>
            Tel: 0985614651
          </Typography>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
          <EmailIcon sx={{ marginRight: '8px' }} />
          <Typography variant="body1" gutterBottom sx={{fontFamily: 'readex-fonts'}}>
            Email: mananchai.chan@mail.kmutt.ac.th
          </Typography>
        </div>
        <Typography variant="body1" gutterBottom sx={{width:1000,fontFamily: 'readex-fonts-light' ,mt:"50px"}}>
          We would love to hear from you! If you have any questions, comments, or feedback about our platform, please feel free to contact us by phone or email. Our team of experienced travel experts and developers is available to assist you with any questions or concerns you may have.
        </Typography>
        <Typography variant="body1" sx={{width:1000,fontFamily: 'readex-fonts-light'}}>
          Thank you for choosing CozyNook for your travel needs. We look forward to hearing from you and helping you find your perfect accommodation.
        </Typography>
      </Box>
    </>
  );
};

export default ContactUs;
