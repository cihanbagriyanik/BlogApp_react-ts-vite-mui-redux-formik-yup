import React from "react";
import { Box, Button, TextField } from "@mui/material";
import CommentCard from "./CommentCard";

/* -------------------------------------------------------------------------- */
// import useCommentCall from "../../hooks/useCommentCall";
// import { RootState } from "../../app/store";
// import { useSelector } from "react-redux";
/* -------------------------------------------------------------------------- */

interface CommentFormProps {
  blog: Comments[];
}

const CommentForm: React.FC<CommentFormProps> = ({ blog }) => {
  //!Comment icin
  /* -------------------------------------------------------------------------- */
  // const { comment } = useSelector((state: RootState) => state?.comment);
  // console.log(comment);
  // React.useEffect(() => {
  //   createComment("comments", values);
  // }, []);
  // const { createComment } = useCommentCall();
  /* -------------------------------------------------------------------------- */

  const handleSubmit = () => {};

  return (
    <Box
      onSubmit={handleSubmit}
      component="form"
      // onSubmit={handleSubmit}
      style={{
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
        <Button type="submit" variant="contained">
          Add Comment
        </Button>
      </Box>
      <Box sx={{ marginTop: "2rem" }}>
        <CommentCard blog={blog} />
      </Box>
    </Box>
  );
};

export default CommentForm;
