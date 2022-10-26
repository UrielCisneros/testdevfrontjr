import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Box, IconButton } from "@mui/material";
import Logo from "assets/logo-2020.png";
import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Navbar() {
  const style = {
    navbar: {
      backgroundColor: "white",
    },
    contentNav: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    colorText: {
      color: "black",
    },
    contentImage: {
      width: {
        xl: "150px",
        md: "150px",
        xs: "100px",
      },
    },
  };

  return (
    <div>
      <AppBar position="static" sx={style.navbar}>
        <Toolbar>
          <Box sx={style.contentNav}>
            <Box display={"flex"} justifyContent="center" alignItems={"center"}>
              <Link to="/">
                <Box sx={style.contentImage}>
                  <img width={"100%"} src={Logo} alt="logo" />
                </Box>
              </Link>

              <Typography variant="h6" component="div" sx={style.colorText}>
                - Uriel Cisneros Torres
              </Typography>
            </Box>

            <a href="https://github.com/UrielCisneros">
              {" "}
              <IconButton>
                <GitHubIcon sx={style.colorText} />
              </IconButton>
            </a>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}
