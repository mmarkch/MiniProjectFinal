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
  // Sample data for reviews
  const reviews = [
    { name: 'John Doe', review: 'Great experience, highly recommended!' },
    { name: 'Jane Smith', review: 'The accommodation exceeded my expectations.' },
    { name: 'Mike Johnson', review: 'Had a pleasant stay. Will come back again.' },
  ];

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
          height: '100vh',
          width: '100vw',
          bgcolor: 'aliqua',
        }}
      >
        <Card sx={{ maxWidth: 400 }}>
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
          <CardContent>
            <Typography variant="h6" component="div">
              Reviews
            </Typography>
            {reviews.map((review, index) => (
              <Typography key={index} variant="body2" color="text.secondary">
                <strong>{review.name}:</strong> {review.review}
              </Typography>
            ))}
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default AccommodationList;
