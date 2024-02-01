import React from "react";

import { Box, IconButton, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddCommentIcon from "@mui/icons-material/AddComment";
import VisibilityIcon from "@mui/icons-material/Visibility";
import useBlogsCall from "../../hooks/useBlogsCall";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { useParams } from "react-router-dom";

const Icons: React.FC<IconProps> = ({ show, setShow, blog }) => {
  const { postLike } = useBlogsCall();
  const { user } = useSelector((state: RootState) => state.auth);

  // console.log( postLike );

  const { id } = useParams();

  const handleLikeClick = () => {
    postLike(`blogs/${blog._id}/postLike`, id);
  };

  return (
    <Box>
      <IconButton
        aria-label="favorites"
        onClick={handleLikeClick}
        sx={{
          color: `${
            blog.likes?.filter((like: string | unknown) => like === user._id)
              .length > 0
              ? "red"
              : "gray"
          }`,
        }}
      >
        <FavoriteIcon />
        <Typography>{blog?.likes?.length}</Typography>
      </IconButton>
      <IconButton onClick={() => setShow && setShow(!show)}>
        <AddCommentIcon />
        <Typography>{blog?.comments?.length}</Typography>
      </IconButton>
      <IconButton aria-label="share">
        <VisibilityIcon />
        <Typography>{blog?.countOfVisitors}</Typography>
      </IconButton>
    </Box>
  );
};

export default Icons;
