import * as React from "react";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddCommentIcon from "@mui/icons-material/AddComment";
import VisibilityIcon from "@mui/icons-material/Visibility";

import useBlogsCall from "../../hooks/useBlogsCall";
import { Box, Button, Grid } from "@mui/material";

import loadingGif from "../../../public/assets/loading.gif";
import { RootState } from "../../app/store";
import { useSelector } from "react-redux";

export default function BlogsCard() {
  const { blogsList } = useBlogsCall();

  const { blogs, loading } = useSelector((state: RootState) => state?.blogs);

  React.useEffect(() => {
    blogsList("blogs/");
  }, []);

  return (
    <Grid container spacing={5}>
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
        blogs.map((a: DataValuesTypes) => {
          return (
            <Grid item key={a._id} xs={12} sm={6} md={4} lg={3}
            sx={{display:"block"}}
            >
              <Card
                sx={{
                  
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                  
                  // width: 400,
                  maxWidth: 400,
                  // height: 450,
                  height: "100%",
                  maxHeight: 500,
                  padding: ".5rem",
                  margin: "2rem 2rem",
                
                }}
              >
                {/* <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
          
        /> */}
                <CardMedia
                  component="img"
                  src=""
                  height="194"
                  image={a.image}
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
                      {a.title}
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
                      {a.content}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    Published Date :{" "}
                    {new Date(a.createdAt).toLocaleDateString()}{" "}
                    {new Date(a.createdAt).toLocaleTimeString()}
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
            </Grid>
          );
        })
      )}
    </Grid>
  );
}
