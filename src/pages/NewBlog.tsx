import Container from "@mui/material/Container";

import { Formik } from "formik";

import * as Yup from "yup";
import NewBlogForm from "../components/blog/NewBlogForm";
import useBlogsCall from "../hooks/useBlogsCall";

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
    .max(5000, "Maximum 5000 characters allowed!")
    .required("Required!"),
});

const NewBlog = () => {
  const { createBlog } = useBlogsCall();
  return (
    <Container sx={{ height: "74.1vh" }}>
      <Formik
        initialValues={{
          // categoryId: "",
          title: "",
          image: "",
          categoryId: "",
          content: "",
          isPublish: false,
        }}
        onSubmit={(values: NewBlogFormValues, actions) => {
          console.log("Form Values:", values);
          console.log("Formik Actions:", actions);
          createBlog("blogs", values);
          actions.resetForm();
          actions.setSubmitting(false);
        }}
        validationSchema={SignupSchema}
        component={(props) => <NewBlogForm {...props} />}
      ></Formik>
    </Container>
  );
};

export default NewBlog;
