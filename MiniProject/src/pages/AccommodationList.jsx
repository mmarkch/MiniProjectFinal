import React from 'react';
import Navbar from './Navbar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Eden3 from '../assets/HotelPic/Eden3.jpg';
import { useNavigate } from 'react-router-dom';


const AccommodationList = () => {

  let navigate = useNavigate();
  const handleClick = (destination) => {
    navigate(destination);
  }
  
  return (
    <>
      <Navbar />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '1000',
          width: '1650',
          bgcolor: 'aliqua',
          border: '0.1px solid black',
          marginTop: '10px',
        }}
      >
        <Card sx={{ width: 600, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <CardContent>
            <Typography variant="h5" component="div">
              Accommodation Name
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            height="300px" // Change the height value here
            image={Eden3}
            alt="Accommodation Pic"
            width="100%"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Description of the accommodation.
            </Typography>
          </CardContent>
          <Box sx={{ flexGrow: 1 }} />
          <Button variant="contained" color="primary" onClick={() => handleClick("/ReviewPage")}>
            Review Page
          </Button>
        </Card>
      </Box>
    </>
  );
};

export default AccommodationList;
