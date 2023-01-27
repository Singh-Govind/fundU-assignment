import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar, CardHeader } from "@mui/material";
import Comments from "./Comments";
import { useState } from "react";
import useGetUser from "../hooks/useGetUser";
import useFormatDate from "../hooks/useFormatDate";

export default function Post({ title, description, post_id, user, dt }) {
  const [loadComment, setLoadComment] = useState(false);
  const { userData } = useGetUser(user);
  const { date } = useFormatDate(dt);

  const loadCommentFn = () => {
    setLoadComment(true);
  };

  return (
    <Card sx={{ maxWidth: "100%", mt: "2rem" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            <img width="100%" src={userData.userpic_url} />
          </Avatar>
        }
        title={userData.First_Name + " " + userData.last_name}
        subheader={date}
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
        <Button onClick={loadCommentFn}>comments</Button>
      </CardActions>

      {loadComment ? (
        <CardContent sx={{ borderTop: "1px solid lightgray" }}>
          <Comments post_id={post_id} />
        </CardContent>
      ) : (
        ""
      )}
    </Card>
  );
}
