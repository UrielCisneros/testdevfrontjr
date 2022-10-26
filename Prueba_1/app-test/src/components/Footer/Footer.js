import React from "react";
import { Typography, Box, IconButton } from "@mui/material";
import Logo from "assets/logo-2020.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  const style = {
    content: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    textCopy: {
      fontSize: "10px",
    },
    contentImage: {
      width: {
        xl: "150px",
        md: "150px",
        xs: "100px",
      },
    },
    icon: {
      color: "black",
    },
  };

  return (
    <Box px={3} sx={style.content}>
      <Typography sx={style.textCopy}>© Nuxiba - Test Frontend</Typography>
      <Box sx={style.contentImage}>
        <img width={"100%"} src={Logo} alt="logo" />
      </Box>
      <Box>
        <a href="https://github.com/UrielCisneros">
          <IconButton>
            <GitHubIcon sx={style.icon} />
          </IconButton>
        </a>

        <a href="https://www.linkedin.com/in/uriel-cisneros-torres-9a5a10149/">
          <IconButton>
            <LinkedInIcon sx={style.icon} />
          </IconButton>
        </a>
      </Box>
    </Box>
  );
}
