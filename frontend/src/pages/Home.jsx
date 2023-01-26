import { Stack } from "@mui/material";
import Post from "../components/Post";

export default function Home() {
  return (
    <Stack alignItems="center" mt="3rem">
      <Post
        avatar="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"
        name="some name"
        title="Shrimp and Chorizo Paella"
        description="some text"
      />
      {/* <Post />
      <Post /> */}
    </Stack>
  );
}
