import React, { Fragment } from "react";
import { styleTitleDetail } from "pages/Posts/Posts";
import { Typography } from "@mui/material";

export default function DetailUser({user}) {
  return (
    <Fragment>
      <Typography sx={styleTitleDetail.title}>User Detail</Typography>
      <Typography sx={{ mb: 2 }}>
        {`Hello my name is ${user.name} but my nickname is ${user.username}, i am from ${user.address.city}, 
        my suite is ${user.address.suite}, my street is ${user.address.street}, i have a company her name is ${user.company.name} 
        the bs is ${user.company.bs} and catchPhrase is ${user.address.catchPhrase}
        if you contact me this is my email: ${user.email} or visit my website "${user.website}" `}
      </Typography>
    </Fragment>
  );
}
