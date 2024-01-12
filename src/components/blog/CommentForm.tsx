import { Box, Button, TextField } from "@mui/material";
import CommentCard from "./CommentCard";

interface CommentFormProps {
  blog: Comments[];
}

const CommentForm: React.FC<CommentFormProps> = ({ blog }) => {
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
        rows={5}
        // fullWidth
        sx={{ marginBottom: "1rem", width: "100%" }}
      />
      <Box>
        <Button variant="contained">Add Comment</Button>
      </Box>
      <Box sx={{ marginTop: "2rem" }}>
        <CommentCard blog={blog} />
      </Box>
    </Box>
  );
};

export default CommentForm;
