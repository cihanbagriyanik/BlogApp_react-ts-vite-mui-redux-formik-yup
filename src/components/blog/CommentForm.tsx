import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import CommentCard from "./CommentCard";
import useCommentCall from "../../hooks/useCommentCall";

const CommentForm: React.FC<CommentFormProps> = ({ blog, id }) => {
  const { createComment } = useCommentCall();

  //! Write commend and see on screen after submit
  const [comment, setComment] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createComment("comments", { blogId: id, comment });
  };

  return (
    <Box
      onSubmit={handleSubmit}
      component="form"
      style={{
        width: "85%",
        margin: "2rem 3.8rem",
      }}
    >
      <TextField
        label="Comment"
        id="comment"
        placeholder="Add a comment"
        multiline
        rows={5}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
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
