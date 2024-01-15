import Typography from "@mui/material/Typography";
import { Avatar, Box } from "@mui/material";
import loadingGif from "../../public/assets/loading.gif";
import { RootState } from "../app/store";
import { useSelector } from "react-redux";
import { blue } from "@mui/material/colors";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useBlogsCall from "../hooks/useBlogsCall";
import Icons from "../components/blog/Icons";
import CommentForm from "../components/blog/CommentForm";
import UpdateModal from "../components/blog/UpdateModal";

//! Listing clicked blog content
const BlogDetail = () => {
  const [show, setShow] = useState<ShowState>(false);

  const { blogDetail } = useBlogsCall();

  const { loading, blog } = useSelector((state: RootState) => state?.blogs);
  // console.log("Blog Detail:", blog);

  const { id } = useParams();
  // console.log("Blog ID:", id);

  React.useEffect(() => {
    blogDetail(`blogs/${id}`);
  }, []);

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
        <Box
          sx={{
            padding: "3rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              margin: "0 3rem 5rem",
            }}
          >
            <Avatar
              sx={{ bgcolor: blue[500], width: 65, height: 65 }}
              sizes="xl"
              aria-label="recipe"
            >
              {blog?.userId?.firstName[0] + blog?.userId?.lastName[0] || ""}
            </Avatar>
            <Typography sx={{ marginLeft: "1rem" }} color="text.secondary">
              {blog?.userId?.firstName + blog?.userId?.lastName || ""}
              <br />
              Published Date : {new Date(
                blog.createdAt
              ).toLocaleDateString()}{" "}
              {new Date(blog.createdAt).toLocaleTimeString()}
              <br />
              Update Date : {new Date(blog.updatedAt).toLocaleDateString()}{" "}
              {new Date(blog.updatedAt).toLocaleTimeString()}
            </Typography>
            <Typography variant="body2" color="text.secondary"></Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <img
              src={blog.image}
              alt="Paella dish"
              style={{ width: "50%", height: "auto" }}
            />
          </Box>

          <Box
            sx={{
              padding: "1rem 3rem",
            }}
          >
            <Typography variant="h6" align="left" sx={{ marginTop: "2rem" }}>
              {blog.title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                padding: "1rem",
              }}
            >
              {blog.content}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "start", margin: "0" }}>
            <Box sx={{ marginLeft: "5rem" }}>
              <Icons show={show} setShow={setShow} />
            </Box>
          </Box>

          {
            //! ********************************************************

            <UpdateModal blog={blog} />

            // ! ********************************************************
          }

          {show && (
            <>
              <CommentForm blog={blog.comments} id={id} />
            </>
          )}
        </Box>
      )}
    </>
  );
};

export default BlogDetail;
