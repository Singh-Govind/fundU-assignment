import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import Post from "../components/Post";

export default function Home() {
  const [sortBy, setSortBy] = useState("top");

  const handleChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <Box mt="3rem">
      <Stack>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Sort</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={sortBy}
            label="Sort"
            onChange={handleChange}
          >
            <MenuItem value={"top"}>Top</MenuItem>
            <MenuItem value={"recent"}>Recent</MenuItem>
          </Select>
        </FormControl>
      </Stack>
      <Stack alignItems="center">
        <Post
          avatar="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"
          name="some name"
          title="Shrimp and Chorizo Paella"
          description="some text"
        />
      </Stack>
    </Box>
  );
}
