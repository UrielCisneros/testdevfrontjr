import React from 'react'
import { Avatar, Card, CardActions, CardContent, CardHeader, IconButton, Typography } from '@mui/material'
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { red } from "@mui/material/colors";


export default function Comment({comment}) {
  return (
    <Card elevation={0} sx={{ width: "100%" }}>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
          {comment.name.charAt(0)}
        </Avatar>
      }
      title={comment.name}
      subheader={comment.email}
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        {comment.body}
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
        <FavoriteIcon />
      </IconButton>
      <IconButton aria-label="share">
        <ShareIcon />
      </IconButton>
    </CardActions>
  </Card>
  )
}
