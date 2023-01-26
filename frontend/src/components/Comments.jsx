import { Box, Button, Input, Typography } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";

export default function Comments({ post_id }) {
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    let res = await fetch(`http://localhost:8080/comments?post_id=${post_id}`);
    let comm = await res.json();
    setComments(comm.comments);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <Box>
      {comments.length > 0
        ? comments.map((item) => (
            <Box
              key={item._id}
              borderBottom="1px solid lightgray"
              mt="0.5rem"
              padding="0.25rem"
            >
              <Typography
                paddingLeft="1rem"
                maxWidth="90%"
                component="p"
                color="gray"
              >
                {item.comment_text}
              </Typography>
            </Box>
          ))
        : "No comments"}

      {/* <Box mt="1rem">
        <Input type="text" placeholder="enter comment" />
        <Button>submit</Button>
      </Box> */}
    </Box>
  );
}
