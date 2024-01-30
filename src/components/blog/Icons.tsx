import React from "react";

import { Box, IconButton, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddCommentIcon from "@mui/icons-material/AddComment";
import VisibilityIcon from "@mui/icons-material/Visibility";

import useBlogsCall from "../../hooks/useBlogsCall";
import { useParams } from "react-router-dom";


const Icons: React.FC<IconProps> = ({ show, setShow }) => {
  const [likeCount, setLikeCount] = React.useState(0);
  // const [commentCount, setCommentCount] = React.useState(0);
  // const [viewCount, setViewCount] = React.useState(0);

  // const handleLike = () => {
  //   setLikeCount((prevCount: number) => prevCount + 1);
  // };

  /* -------------------------------------------------------------------------- */

  const { blogDetailPage } = useBlogsCall();
  const { id } = useParams();
  console.log("Blog ID:", id);

  React.useEffect(() => {
    blogDetailPage(`blogs/${id}`);
  }, []);
  


  /* -------------------------------------------------------------------------- */

  return (
    <Box>
      <IconButton
        aria-label="favorites"
        // onClick={handleLike}
      >
        <FavoriteIcon />
        <Typography>{likeCount}</Typography>
        {/* <Typography>{isNaN(likeCount) ? "" : likeCount}</Typography> */}
      </IconButton>
      <IconButton
        aria-label="share"
        // onClick={handleComment}
        onClick={() => setShow && setShow(!show)}
      >
        <AddCommentIcon />
        <Typography>
          {/* {commentCount} */}
          {""}0{""}
        </Typography>
        {/* <Typography>{isNaN(commentCount) ? "" : commentCount}</Typography> */}
      </IconButton>
      <IconButton
        aria-label="share"
        // onClick={handleView}
      >
        <VisibilityIcon />
        <Typography>
          {/* {viewCount} */}
          {""}0{""}
        </Typography>
        {/* <Typography>{isNaN(viewCount) ? "" : viewCount}</Typography> */}
      </IconButton>
    </Box>
  );
};

export default Icons;
