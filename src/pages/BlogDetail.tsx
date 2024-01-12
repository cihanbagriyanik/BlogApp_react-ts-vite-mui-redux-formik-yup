import Typography from "@mui/material/Typography";

import {
  Avatar,
  Box,
  // Button
} from "@mui/material";

import loadingGif from "../../public/assets/loading.gif";
import { RootState } from "../app/store";
import { useSelector } from "react-redux";
import { blue } from "@mui/material/colors";
import React, { useState } from "react";

import { useParams } from "react-router-dom";
import useBlogsCall from "../hooks/useBlogsCall";
import Icons from "../components/blog/Icons";
import CommentForm from "../components/blog/CommentForm";
import { Formik } from "formik";

/* -------------------------------------------------------------------------- */
//! Create Comment
import useCommentCall from "../hooks/useCommentCall";
/* -------------------------------------------------------------------------- */

const BlogDetail = ({}) => {
  const [show, setShow] = useState<ShowState>(false);

  const { blogDetail } = useBlogsCall();

  const { loading, blog } = useSelector((state: RootState) => state?.blogs);
  // console.log("Blog Detail:", blog);

  const { id } = useParams();
  // console.log("Blog ID:", id);

  React.useEffect(() => {
    blogDetail(`blogs/${id}`);
  }, []);

  //! Create Comment
  /* -------------------------------------------------------------------------- */
  const { createComment } = useCommentCall();
  // const { comment } = useSelector((state: RootState) => state?.comment);
  // console.log(comment);
  // React.useEffect(() => {
  //   const newComments: NewCommentValues = {
  //     blogId: "",
  //     comment: "",
  //   };
  //   createComment("comments/", newComments);
  // }, []);
  /* -------------------------------------------------------------------------- */

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
            // display: "flex",
            // justifyContent: "center",
            // flexDirection: "column",
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
            {/* <Box>
              <Button variant="contained">Read More</Button>
            </Box> */}
          </Box>
          {show && (
            <>
              <Formik
                initialValues={{
                  blogId: `${id}`,
                  comment: "Comment 1",
                }}
                onSubmit={(values, actions) => {
                  console.log("Form Values:", values);
                  console.log("Formik Actions:", actions);
                  createComment("comments", values);
                  actions.resetForm();
                  actions.setSubmitting(false);
                }}
                component={(props) => (
                  <CommentForm blog={blog.comments} {...props} />
                )}
              ></Formik>
            </>
          )}
        </Box>
      )}
    </>
  );
};

export default BlogDetail;
