import BedroomPic from "../assets/BedroomPic.jpg";
import BeautifulBeach from "../assets/BeautifulBeach.jpg";
import ReceptionPic from "../assets/ReceptionPic.jpg";
import WhiteBuilding from "../assets/WhiteBuilding.jpg";
import BedroomPic2 from "../assets/BedroomPic2.jpg";
import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { WidthFull } from "@mui/icons-material";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";

const theme = createTheme();

export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  let navigate = useNavigate();
  const handleClick = (destination) => {
    navigate(destination);
  };

  return (
    <>
      <Navbar />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1,
            textAlign: "center",
            backgroundColor: "white",
            borderRadius: 15,
          }}
        >
          <TextField
            id="search"
            label="Search"
            variant="outlined"
            size="small"
          />
        </div>

        <Box
          style={{
            position: "relative",
            height: "100vh",
            background: `url(${BedroomPic}) no-repeat center / cover`,
          }}
        >
          <Grid
            container
            component="main"
            sx={{ height: "100%" }}
            alignItems="center"
            justifyContent="center"
          >
            {/* Content */}

            <Button
              variant="contained"
              sx={{
                margin: "20px",
                fontFamily: "readex-fonts-bold",
                backgroundColor: "rgba(0,0,0,0.8)",
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  boxShadow: "0px 0px 20px rgba(255, 255, 255, 1)",
                },
              }}
              onClick={() => handleClick("/SearchResult")}
            >
              Search
            </Button>
          </Grid>
        </Box>
      </ThemeProvider>
    </>
  );
}
