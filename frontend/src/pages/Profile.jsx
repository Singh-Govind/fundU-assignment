import {
  // FormControl,
  // InputLabel,
  // MenuItem,
  // Select,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useState } from "react";
import { AuthConext } from "../context/AuthConext";
import Post from "../components/Post";
import { useEffect } from "react";

export default function Profile() {
  // const [sortBy, setSortBy] = useState("top");
  const [data, setData] = useState([]);
  const { user } = useContext(AuthConext);

  const fetchData = async () => {
    let res = await fetch("http://localhost:8080/posts/myposts", {
      method: "GET",
      headers: new Headers({
        Authorization: `${user.username}`,
        "Content-Type": "application/json",
      }),
    });

    let d = await res.json();
    setData(d);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box mt="3rem">
      <Typography textAlign="center" variant="h4">
        My Posts
      </Typography>
      <Stack alignItems="center">
        {data?.map((item) => {
          return (
            <Post
              key={item._id}
              dt={item.Created_at}
              avatar={user.userpic_url}
              name={user.First_Name + " " + user.last_name}
              title={item.Title}
              description={item.Text}
              post_id={item.unique_id}
            />
          );
        })}
      </Stack>
    </Box>
  );
}
