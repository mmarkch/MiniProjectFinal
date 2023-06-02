import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Maldives2 from '../assets/HotelPic/Maldives2.jpg';
import Navbar from './Navbar';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';



const SearchResultCard = ({ title, description, imageUrl }) => {

  let navigate = useNavigate();
  const handleClick = (destination) => {
    navigate(destination);
  }

  return (
    <>
      <Navbar />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px' }}>
        <TextField
          id="search"
          label="Search"
          variant="outlined"
          size="small"
          sx={{ width: '300px' }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </div>
      
        <Card sx={{ margin: '20px', borderRadius: '30px', border: '0.1px solid #BD7E4A' }} onClick={() => handleClick("/AccommodationList")}>

          <Typography sx={{ margin: '10px', fontFamily: 'readex-fonts-bold', marginLeft: '50px' }}>Maldives</Typography>
          <CssBaseline />
          <Grid
              container
              spacing={0.5}
              justifyContent="center"
              alignItems="center"
              style={{ height: '30vh' }}
            >
              <Grid item xs={12}>
                {/* First line */}
                <Grid container justifyContent="flex-start">
                  <Grid item>
                    <CardMedia
                      component="img"
                      sx={{ width: 140, height: 133, marginLeft: '50px' }}
                      src={Maldives2}
                      alt="Image"
                    />
                  </Grid>
                  <Grid item>
                    <CardMedia
                      component="img"
                      sx={{ width: 140, height: 133, marginLeft: '1px' }}
                      src={Maldives2}
                      alt="Image"
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                {/* Second line */}
                <Grid container justifyContent="flex-start" alignItems="center">
                  <Grid item>
                    <CardMedia
                      component="img"
                      sx={{ width: 140, height: 133, marginLeft: '50px' }}
                      src={Maldives2}
                      alt="Image"
                    />
                  </Grid>
                  <Grid item>
                    <CardMedia
                      component="img"
                      sx={{ width: 140, height: 133, marginLeft: '1px' }}
                      src={Maldives2}
                      alt="Image"
                    />
                  </Grid>
                  
                  <Box item sx={{width:1100 }}>
                    
                    <Typography variant="body1" sx={{ fontFamily: 'readex-fonts',marginLeft:'20px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                    deserunt mollit anim id est laborum.</Typography>
                    <FavoriteBorderIcon sx={{marginLeft:'20px'}}/>
                  </Box>
                </Grid>
              </Grid>
            </Grid>


          <CardContent>
            <Typography variant="h6" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </Card>
      
    </>
  );
};

export default SearchResultCard;


