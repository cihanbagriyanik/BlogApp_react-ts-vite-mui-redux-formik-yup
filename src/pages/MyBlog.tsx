import * as React from "react";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";

import useBlogsCall from "../hooks/useBlogsCall";
import { Box, Button, Grid } from "@mui/material";

import loadingGif from "../../public/assets/loading.gif";
import { RootState } from "../app/store";
import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import Icons from "../components/blog/Icons";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const BlogsPerPage = 10;

export default function MyBlog() {
  const navigate = useNavigate();
  const { blogsList } = useBlogsCall();
  const { blogs, loading } = useSelector((state: RootState) => state?.blogs);

  const { user } = useSelector((state: RootState) => state?.auth);

  React.useEffect(() => {
    blogsList(`blogs/?author=${user._id}`);
  }, []);

  const handleReadMore = (id: string) => {
    // console.log(id);
    navigate(`/blogdetail/${id}`);
  };

  const [currentPage, setCurrentPage] = React.useState<number>(1);

  const indexOfLastBlog = currentPage * BlogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - BlogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const totalPages = Math.ceil(blogs.length / BlogsPerPage);

  const onPageChange = (_event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Grid
        container
        spacing={0}
        sx={{ display: "flex", justifyContent: "center" }}
      >
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
          currentBlogs.map((a: DataValuesTypes) => {
            return (
              <Grid
                item
                key={a._id}
                // xs={12}
                sm={12}
                md={6}
                lg={4}
                xl={3}
                sx={{
                  // display: "block" ,
                  // gap: "1rem",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    boxSizing: "border-box",
                    width: "25rem",
                    minWidth: "23rem",
                    maxWidth: "27rem",
                    height: "30rem",
                    marginLeft: "2rem",
                    marginRight: "2rem",
                    marginTop: "2rem",
                    padding: "2rem",
                  }}
                >
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
                      <Icons />
                    </Box>
                    <Box>
                      <Button
                        onClick={() => handleReadMore(a._id)}
                        variant="contained"
                      >
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
      <Stack
        sx={{
          marginTop: "2rem",
          display: "flex",
          // justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Pagination
          count={totalPages}
          page={currentPage}
          color="primary"
          onChange={onPageChange}
        />
      </Stack>
    </>
  );
}
