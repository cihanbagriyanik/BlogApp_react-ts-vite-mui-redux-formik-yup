import React from "react";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import useCommentCall from "../../hooks/useCommentCall";

const CommentCard: React.FC<CommentFormProps> = ({ blog }) => {
  // console.log(blog);

  //! Comment for Blog Listing
  const { listSingleBlogComments } = useCommentCall();
  React.useEffect(() => {
    listSingleBlogComments("comments");
  }, []);

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
            subheader={new Date(x?.createdAt).toLocaleDateString()}
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
