// import React from "react";
import { Box, Button, Modal, Typography } from "@mui/material";
import useBlogsCall from "../../hooks/useBlogsCall";
import React from "react";

const style = {
  position: "absolute" as "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const DeleteModal = ({ blog }: { blog: NewBlogFormValues }) => {
  const { removeBlog } = useBlogsCall();
  const [deleteOpen, setDeleteOpen] = React.useState(false);
  const handleDeleteOpen = () => setDeleteOpen(true);
  const handleDeleteClose = () => setDeleteOpen(false);
  return (
    <>
      <Button onClick={handleDeleteOpen} variant="contained" color="error">
        Delete Blog
      </Button>
      <Modal open={deleteOpen} onClose={handleDeleteClose}>
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h5"
            component="h2"
            align="center"
          >
            This will delete the blog and all its content permanently. Are you
            sure you want to proceed?
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "1.5rem",
            }}
            gap={7}
          >
            <Button
              // onClick={handleDeleteClose}
              onClick={() => removeBlog("blogs/", blog._id)} //! ***********************************/
              variant="contained"
              color="primary"
            >
              Yes
            </Button>
            <Button
              onClick={() => handleDeleteClose()}
              variant="contained"
              color="error"
            >
              No
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default DeleteModal;
