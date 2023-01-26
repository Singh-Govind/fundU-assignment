import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useState } from "react";
import { AuthConext } from "../context/AuthConext";
import Post from "../components/Post";
import { useEffect } from "react";

export default function Home() {
  const [sortBy, setSortBy] = useState("top");
  const [data, setData] = useState([]);
  const { user } = useContext(AuthConext);

  const fetchData = async () => {
    let res = await fetch("http://localhost:8080/posts/", {
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

  const handleChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <Box mt="3rem">
      <Stack>
        <FormControl fullWidth>
          <InputLabel>Sort</InputLabel>
          <Select value={sortBy} label="Sort" onChange={handleChange}>
            <MenuItem value={"top"}>Top</MenuItem>
            <MenuItem value={"recent"}>Recent</MenuItem>
          </Select>
        </FormControl>
      </Stack>
      <Stack alignItems="center">
        {data?.map((item) => {
          return (
            <Post
              key={item._id}
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
