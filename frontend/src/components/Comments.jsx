import { Box, Button, Input, Typography } from "@mui/material";

export default function Comments() {
  return (
    <Box>
      <Box borderBottom="1px solid lightgray" mt="0.5rem" padding="0.25rem">
        <Typography component="p" color="gray">
          comment
        </Typography>
      </Box>

      <Box mt="1rem">
        <Input type="text" placeholder="enter comment" />
        <Button>submit</Button>
      </Box>
    </Box>
  );
}
