import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import LogoNoBackground from "../assets/LogoNoBackground.png";
import NewLogo from "../assets/NewLogo.png";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const pages = ["About Us", "Contact Us", "Review", "Favorites"];
const settings = ["Profile", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  let navigate = useNavigate();
  const handleClick = (destination) => {
    navigate(destination);
  };

  return (
    <AppBar
      position="static"
      style={{
        backgroundColor: "white",
        height: "100px",
        width: "1707.33px",
        marginLeft: "-8px",
        marginTop: "-10px",
        padding: "6px",
        border: "0.1px solid #BD7E4A",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ marginBottom: "5px" }}>
            <IconButton onClick={() => handleClick("/Home")}>
              <img
                src={NewLogo}
                alt="logo"
                style={{
                  width: "200px",
                  height: "auto",
                  maxWidth: "700px",
                  marginTop: "10px",
                }}
              />
            </IconButton>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none", ml: "200px" },
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="#BD7E4A"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page}
                    onClick={() => {
                      if (page === "About Us") {
                        handleClick("/AboutUs");
                      } else if (page === "Contact Us") {
                        handleClick("/ContactUs");
                      } else if (page === "Review") {
                        handleClick("/ReviewPage");
                      } else if (page === "Favorites") {
                        handleClick("/FavoritesPage");
                      }
                      handleCloseNavMenu();
                    }}
                  >
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#BD7E4A",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleClick("/" + page.replace(/\s+/g, ""))}
                sx={{
                  my: 2,
                  color: "#BD7E4A",
                  display: "block",
                  fontFamily: "readex-fonts",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem
                  key={setting}
                  component={NavLink}
                  to={`/${setting.toLowerCase()}`}
                  onClick={handleCloseUserMenu}
                >
                  <Typography
                    textAlign="center"
                    sx={{ fontFamily: "readex-fonts", color: "#BD7E4A" }}
                  >
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
