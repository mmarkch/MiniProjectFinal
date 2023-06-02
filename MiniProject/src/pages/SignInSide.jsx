import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Logo from '../assets/Logo.png'
import LogoNoBackground from '../assets/LogoNoBackground.png'
import NewLogo from '../assets/NewLogo.png'
import { useNavigate } from 'react-router-dom';


const theme = createTheme();

export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      users: data.get('users'),
      password: data.get('password'),
    });
  };

  let navigate = useNavigate();
  const handleClick = (destination) => {
    navigate(destination);
  }

  return (
    <ThemeProvider theme={theme}>
    <Grid mt={3}>
    <div className="Grid-container" style={{marginTop:'70px'}}>
    <Box sx={{display:"flex",justifyContent:"center"}}>
      <img
        src={NewLogo}
        alt='logo'
        style={{ width: '400px', height: 'auto', maxWidth:'700px', marginBottom: '50px' ,display:"flex",justifyContent:"center" }}
      />
    </Box>
    </div>
      <Box sx={{display:"flex",alignItems:"center",justifyContent:"center",alignContent:"center"}}>
      <Grid
        container
        component="main"
        sx={{
          height: '60vh',
          borderRadius: '30px', // set the border radius to 30px
          overflow: 'hidden', // hide any overflow from the children
          border:'1px solid',
          width:"70%"
        }}
      >
        <CssBaseline />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginTop:"75px"
            }}
          >
            <Typography component="h1" variant="h5" style={{fontFamily:'readex-fonts',marginTop:'-20px'}} >
              Sign In
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 2 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                sx={{ input :{fontFamily:"readex-fonts"} ,mr: 25 }}
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <div style={{display:"flex",justifyContent:"center"}}>
              <Button
                style={{fontFamily:'readex-fonts'}}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt:1 , mb:-5 , borderRadius: '30px', width:100,}}
                onClick={() => handleClick("/Home")}
              >
                Sign In
              </Button>
              </div>
              <div style={{display:"flex",justifyContent:"center"}}>
              <Button
                style={{fontFamily:'readex-fonts'}}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 7, mb: 2, borderRadius: '30px', width:100 }}
                onClick={() => handleClick("/SignUp")}
              >
                Sign Up
              </Button>
              </div>
              <Grid container>
                <Grid item xs >
                  <Link href="#" variant="body2" style={{fontFamily:'readex-fonts'}}>
                    Forgot password?
                  </Link>
                </Grid>
              </Grid>
              
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://www.omsignsinc.com/wp-content/uploads/2019/02/Hotel-Hospitality-Signs1.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
      </Grid>
      </Box>
    </Grid>
    </ThemeProvider>
  );
}