import React from "react";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import { blue } from "@mui/material/colors";

interface CommentFormProps {
  blog: Comments[];
}

// import useCommentCall from "../../hooks/useCommentCall";
// import { RootState } from "../../app/store";
// import { useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import useBlogsCall from "../../hooks/useBlogsCall";

const CommentCard: React.FC<CommentFormProps> = ({ blog }) => {
  console.log(blog);

  //!Comment icin
  /* -------------------------------------------------------------------------- */
  // const { listSingleBlogComments } = useCommentCall();
  // const { comment } = useSelector((state: RootState) => state?.comment);
  // console.log(comment);
  // React.useEffect(() => {
  //   listSingleBlogComments("comments");
  // }, []);
  /* -------------------------------------------------------------------------- */

  //! Blog icin
  /* -------------------------------------------------------------------------- */
  // const { blogDetail } = useBlogsCall();
  // const { blog } = useSelector((state: RootState) => state?.blogs);
  // console.log("Blog Detail:", blog);
  // const { id } = useParams();
  // React.useEffect(() => {
  //   blogDetail(`blogs/${id}`);
  // }, []);
  /* -------------------------------------------------------------------------- */

  return (
    <>
      {blog.map((x) => (
        <Card key={x._id} sx={{ width:"100%", marginBottom:"1rem" }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
                {x.userId?.firstName[0]}
              </Avatar>
            }
            title={x.userId?.firstName + x.userId?.lastName}
            subheader={x?.createdAt}
          />

          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {x?.comment}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default CommentCard;
