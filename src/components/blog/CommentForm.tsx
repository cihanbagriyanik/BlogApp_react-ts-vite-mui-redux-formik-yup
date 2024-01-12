import { Box, Button, TextField } from "@mui/material";
import CommentCard from "./CommentCard";

const CommentForm = () => {
  return (
    <Box
      sx={{
        width: "85%",
        margin: ".5rem 3.8rem",
      }}
    >
      <TextField
        label="Comment"
        id="comment"
        placeholder="Add a comment"
        multiline
        // fullWidth
        sx={{ marginBottom: "1rem", width: "100%" }}
      />
      <Box>
        <Button variant="contained">Add Comment</Button>
      </Box>
      <Box sx={{ marginTop: "2rem" }}>
        <CommentCard />
      </Box>
    </Box>
  );
};

export default CommentForm;
