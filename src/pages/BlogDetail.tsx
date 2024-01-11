import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddCommentIcon from "@mui/icons-material/AddComment";
import VisibilityIcon from "@mui/icons-material/Visibility";

import { Avatar, Box, Button, CardHeader } from "@mui/material";

import loadingGif from "../../public/assets/loading.gif";
import { RootState } from "../app/store";
import { useSelector } from "react-redux";
import { red } from "@mui/material/colors";
import React from "react";
import { getBlogDetail } from "../features/blogsSlice";
import { useParams } from "react-router-dom";

const BlogDetail = () => {
  const { loading, blog } = useSelector((state: RootState) => state?.blogs);
  console.log("Blog Detail:", blog);

  const { _id } = useParams();
  console.log("Blog ID:", _id);

  React.useEffect(() => {
    getBlogDetail(`blogs/${_id}`);
  }, [_id]);

  return (
    <>
      {loading ? (
        <img
          src={loadingGif}
          alt="loading..."
          width={250}
          style={{
            display: "flex",
            alignItems: "center",
            margin: "15rem auto",
          }}
        />
      ) : (
        blog.map((x: DataValuesTypes) => {
          return (
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                width: 750,
                height: "100%",
                padding: ".5rem",
                margin: "2rem 2rem",
              }}
            >
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red }} aria-label="recipe">
                    R
                  </Avatar>
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
              />
              <CardMedia
                component="img"
                src=""
                height="194"
                image={x.image}
                alt="Paella dish"
              />
              <CardContent
                sx={{
                  height: "180px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography variant="h6" align="center">
                    {x.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      WebkitLineClamp: 3,
                    }}
                  >
                    {x.content}
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  Published Date : {new Date(x.createdAt).toLocaleDateString()}{" "}
                  {new Date(x.createdAt).toLocaleTimeString()}
                </Typography>
              </CardContent>
              <CardActions
                sx={{ display: "flex", justifyContent: "space-between" }}
                disableSpacing
              >
                <Box>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <AddCommentIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <VisibilityIcon />
                  </IconButton>
                </Box>
                <Box>
                  <Button sx={{}} variant="contained">
                    Read More
                  </Button>
                </Box>
              </CardActions>
            </Card>
          );
        })
      )}
    </>
  );
};

export default BlogDetail;
