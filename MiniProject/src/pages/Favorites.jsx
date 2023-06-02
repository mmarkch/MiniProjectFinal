import React from 'react';
import Navbar from './Navbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useNavigate } from 'react-router-dom';


const FavoritesPage = () => {
  const favoriteAccommodations = [
    {
      id: 1,
      name: 'Cozy Retreat',
      location: 'City A',
    },
    {
      id: 2,
      name: 'Seaside Villa',
      location: 'City B',
    },
    {
      id: 3,
      name: 'Mountain Lodge',
      location: 'City C',
    },
  ];

  return (
    <>
      <Navbar />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: '20px',
        }}
      >
        <Typography variant="h5" gutterBottom sx={{fontFamily: 'readex-fonts-bold'}}>
          Favorites Page
        </Typography>
        {favoriteAccommodations.map((accommodation) => (
          <Box
            key={accommodation.id}
            sx={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '10px',
              padding: '10px',
              border: '1px solid gray',
              borderRadius: '4px',
              maxWidth: '400px',
            }}
          >
            <FavoriteIcon sx={{ marginRight: '10px', color: 'red' }} />
            <Typography variant="h6" sx={{fontFamily: 'readex-fonts-bold'}}>{accommodation.name}</Typography>
            <Typography variant="body1" sx={{ marginLeft: '10px',fontFamily: 'readex-fonts-bold' }}>
              Location: {accommodation.location}
            </Typography>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default FavoritesPage;
