import React from "react";

import { Box, IconButton, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddCommentIcon from "@mui/icons-material/AddComment";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useParams } from "react-router-dom";
import useBlogsCall from "../../hooks/useBlogsCall";

const Icons: React.FC<IconProps> = ({ show, setShow, blog }) => {
  const { id } = useParams();
  const { postLike } = useBlogsCall();

  console.log(blog);
  // console.log( postLike );

  const handleLikeClick = () => {
    postLike(`blogs/${blog._id}/postLike`, `${id}`);
  };
  console.log("blog.likes:", blog.likes);
  console.log("blog._id:", blog._id);
  console.log("Color:", blog.likes?.includes(blog._id) ? "red" : "gray");

  return (
    <Box>
      <IconButton
        aria-label="favorites"
        onClick={handleLikeClick}
        sx={{
          color: `${
            blog.likes?.filter((like: string | unknown) => like === blog._id)
              .length > 0
              ? "red"
              : "gray"
          }`,
          // color: blog.likes?.includes(blog._id) ? "red" : "gray",
        }}
      >
        <FavoriteIcon />
        <Typography>{blog?.likes?.length}</Typography>
        {/* <Typography>{isNaN(likeCount) ? "" : likeCount}</Typography> */}
      </IconButton>
      <IconButton
        aria-label="share"
        // onClick={handleComment}
        onClick={() => setShow && setShow(!show)}
      >
        <AddCommentIcon />
        <Typography>{blog?.comments?.length}</Typography>
      </IconButton>
      <IconButton
        aria-label="share"
        // onClick={handleView}
      >
        <VisibilityIcon />
        <Typography>{blog?.countOfVisitors}</Typography>
      </IconButton>
    </Box>
  );
};

export default Icons;
