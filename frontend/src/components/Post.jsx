import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar, CardHeader } from "@mui/material";

export default function Post({ avatar, name, title, description }) {
  return (
    <Card sx={{ maxWidth: "100%", mt: "2rem" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            <img width="100%" src={avatar} />
          </Avatar>
        }
        title={name}
        subheader="September 14, 2016"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button>comment</Button>
      </CardActions>
    </Card>
  );
}
