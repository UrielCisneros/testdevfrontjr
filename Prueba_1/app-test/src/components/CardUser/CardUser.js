import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";

import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import TopicIcon from "@mui/icons-material/Topic";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function CardUser({ user }) {

    const navigate = useNavigate();

  const style = {
    buttonStyle: {
      mr: 1,
      color: "grey",
      border: "1px solid grey",
    },
  };

  return (
    <Card sx={{ minWidth: 345, m: 1.5 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {user.name.charAt(0)}
          </Avatar>
        }
        title={user.name}
        subheader={user.email}
      />

      <CardContent>
        <DetailsUser title={"Username:"} value={user.username} />
        <DetailsUser title={"Phone:"} value={user.phone} />
        <DetailsUser title={"City:"} value={user.address.city} />
        <DetailsUser title={"Street:"} value={user.address.street} />
      </CardContent>
      <CardActions disableSpacing>
        <Button
          sx={style.buttonStyle}
          variant="outlined"
          startIcon={<TextSnippetIcon />}
          onClick={() => navigate(`/post/${user.id}`)}
        >
          Post
        </Button>
        <Button
          sx={style.buttonStyle}
          variant="outlined"
          startIcon={<TopicIcon />}
          onClick={() => navigate(`/all/${user.id}`)}

        >
          All
        </Button>
      </CardActions>
    </Card>
  );
}

function DetailsUser({ title, value }) {
  return (
    <Box display="flex">
      <Typography sx={{mr:1}} >{title}</Typography>
      <Typography>{value}</Typography>
    </Box>
  );
}
