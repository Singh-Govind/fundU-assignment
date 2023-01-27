import {
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  Stack,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import Post from "../components/Post";
import { useEffect } from "react";

export default function Home() {
  const [sortBy, setSortBy] = useState("top");
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    let res = await fetch(
      `https://easy-ruby-seahorse-garb.cyclic.app/posts/allposts?page=${page}&sort=${sortBy}`
    );

    let d = await res.json();

    setTotalPage(d.totalPages);
    setData(d.posts);
  };

  const handlePageChange = (event, value) => {
    setPage(+value);
  };

  useEffect(() => {
    fetchData();
  }, [page, sortBy]);

  const handleChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <Box mt="3rem" mb="5rem" width="100%">
      <Stack>
        <FormControl fullWidth>
          <InputLabel>Sort</InputLabel>
          <Select value={sortBy} label="Sort" onChange={handleChange}>
            <MenuItem value={"top"}>Top</MenuItem>
            <MenuItem value={"recent"}>Recent</MenuItem>
          </Select>
        </FormControl>
      </Stack>
      <Stack width="100%" alignItems="center">
        {data?.map((item) => {
          return (
            <Post
              key={item._id}
              dt={item.Created_at}
              title={item.Title}
              description={item.Text}
              post_id={item.unique_id}
              user={item.user}
            />
          );
        })}
      </Stack>
      <Stack alignItems="center" mt="2rem">
        <Pagination page={page} count={totalPage} onChange={handlePageChange} />
      </Stack>
    </Box>
  );
}
