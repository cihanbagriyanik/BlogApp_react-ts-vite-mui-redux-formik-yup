import React from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Form, Formik, FormikProps } from "formik";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import useCategoryCall from "../../hooks/useCategoryCall";
import * as Yup from "yup";
import useBlogsCall from "../../hooks/useBlogsCall";
import { useParams } from "react-router-dom";

const SignupSchema = Yup.object().shape({
  title: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required!"),
  image: Yup.string()
    .min(3, "Too Short!")
    .max(500, "Too Long!")
    .required("Required!"),
  categoryId: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required!"),
  isPublish: Yup.string().required("Required!"),
  content: Yup.string()
    .max(50000, "Maximum 50000 characters allowed!")
    .required("Required!"),
});

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

const select = [
  { id: 1, name: "Published", value: true },
  { id: 2, name: "Draft", value: false },
];

const UpdateModal = ({ blog }: { blog: NewBlogFormValues }) => {
  const { removeBlog } = useBlogsCall(); //! ***********************************/

  //! Update Modal
  const [updateOpen, setUpdateOpen] = React.useState(false);
  const handleUpdateOpen = () => setUpdateOpen(true);
  const handleUpdateClose = () => setUpdateOpen(false);

  const { updateBlog } = useBlogsCall();
  const { id } = useParams();

  //! Delete Modal
  const [deleteOpen, setDeleteOpen] = React.useState(false);
  const handleDeleteOpen = () => setDeleteOpen(true);
  const handleDeleteClose = () => setDeleteOpen(false);

  const { categoryList } = useCategoryCall();
  const { categories } = useSelector((state: RootState) => state?.category);
  // console.log(categories);
  React.useEffect(() => {
    categoryList("categories/");
  }, []);

  console.log("Blog*****", blog);

  return (
    <>
      <Box
        sx={{
          marginTop: "2rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        gap={5}
      >
        <Button onClick={handleUpdateOpen} variant="contained" color="success">
          Update Blog
        </Button>
        <Button onClick={handleDeleteOpen} variant="contained" color="error">
          Delete Blog
        </Button>
      </Box>

      {/*//! Delete Modal */}
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
              onClick={handleDeleteClose}
              variant="contained"
              color="error"
            >
              No
            </Button>
          </Box>
        </Box>
      </Modal>

      {/* //!Update Modal */}
      <Modal open={updateOpen} onClose={handleUpdateClose}>
        <Box>
          <Formik
            initialValues={{
              _id: blog._id || "",
              title: blog.title || "",
              image: blog.image || "",
              categoryId: blog?.categoryId?._id || "",
              content: blog.content || "",
              isPublish: blog.isPublish || false,
            }}
            onSubmit={(values: NewBlogFormValues, actions) => {
              console.log("Form Values:", values);
              console.log("Formik Actions:", actions);
              updateBlog("blogs", id, values);
              actions.resetForm();
              actions.setSubmitting(false);
            }}
            validationSchema={SignupSchema}
          >
            {({
              values,
              handleChange,
              errors,
              touched,
              handleBlur,
              isSubmitting,
              handleSubmit,
            }) => (
              <Form onSubmit={handleSubmit}>
                <Box sx={style}>
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                  >
                    <Typography align="center" variant="h5" color={"#1976d2"}>
                      Update Blog
                    </Typography>

                    <TextField
                      label="Title"
                      id="title"
                      name="title"
                      type="text"
                      variant="outlined"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values?.title || ""}
                      helperText={touched.title && errors.title}
                      error={touched.title && Boolean(errors.title)}
                      required
                    />

                    <TextField
                      label="Image URL"
                      id="image"
                      name="image"
                      type="text"
                      variant="outlined"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values?.image || ""}
                      helperText={touched.image && errors.image}
                      error={touched.image && Boolean(errors.image)}
                      required
                    />

                    <FormControl>
                      <InputLabel id="categoryId" required>
                        Category
                      </InputLabel>
                      <Select
                        label="Category"
                        id="categoryId"
                        name="categoryId"
                        labelId="categoryId"
                        variant="outlined"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values?.categoryId || ""}
                        error={touched.categoryId && Boolean(errors.categoryId)}
                        required
                      >
                        <MenuItem>Please choose...</MenuItem>
                        {categories.map((x: any) => (
                          <MenuItem key={x._id} value={x._id}>
                            {x.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>

                    <FormControl>
                      <InputLabel id="isPublish" required>
                        Select
                      </InputLabel>
                      <Select
                        label="Select"
                        id="isPublish"
                        name="isPublish"
                        labelId="isPublish"
                        variant="outlined"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values?.isPublish || ""}
                        error={touched.isPublish && Boolean(errors.isPublish)}
                        required
                      >
                        <MenuItem>Please choose...</MenuItem>
                        {select.map((x: any) => (
                          <MenuItem key={x.id} value={x.value}>
                            {x.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>

                    <TextField
                      label="Content"
                      id="content"
                      placeholder="Content"
                      type="text"
                      variant="outlined"
                      multiline
                      rows={3.5}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values?.content || ""}
                      helperText={touched.content && errors.content}
                      error={touched.content && Boolean(errors.content)}
                      required
                    />

                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      disabled={isSubmitting}
                    >
                      Update Blog
                    </Button>
                  </Box>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      </Modal>
    </>
  );
};

export default UpdateModal;
