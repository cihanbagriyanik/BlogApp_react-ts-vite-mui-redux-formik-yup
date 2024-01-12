import React from "react";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import { blue } from "@mui/material/colors";

/* -------------------------------------------------------------------------- */
import useCommentCall from "../../hooks/useCommentCall";
import { RootState } from "../../app/store";
import { useSelector } from "react-redux";
/* -------------------------------------------------------------------------- */

interface CommentFormProps {
  blog: Comments[];
}

const CommentCard: React.FC<CommentFormProps> = ({ blog }) => {
  console.log(blog);

  //! BlogComment Listing for
  /* -------------------------------------------------------------------------- */
  const { listSingleBlogComments } = useCommentCall();
  const { comment } = useSelector((state: RootState) => state?.comment);
  console.log(comment);
  React.useEffect(() => {
    listSingleBlogComments("comments");
  }, []);
  /* -------------------------------------------------------------------------- */

  return (
    <>
      {blog.map((x) => (
        <Card key={x._id} sx={{ width: "100%", marginBottom: "1rem" }}>
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
