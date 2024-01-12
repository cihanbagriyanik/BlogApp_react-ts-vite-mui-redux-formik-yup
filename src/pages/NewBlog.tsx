import React from "react";

import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { RootState } from "../app/store";
import { useSelector } from "react-redux";

import useCategoryCall from "../hooks/useCategoryCall";

import {
  // Form,
  FormikProps,
} from "formik";
import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
  title: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Requeired!"),
  image: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Requeired!"),
  category: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Requeired!"),
  select: Yup.string().required("Requeired!"),
  content: Yup.string()
    // .min(3, "It must be at least 8 characters!")
    .max(1000, "It can be a maximum of 100 characters!")
    .required("Requeired!"),
});

const NewBlog = (props: FormikProps<NewCategoryValues>) => {
  const {
    values,
    handleChange,
    // errors,
    // touched,
    handleBlur,
    isSubmitting,
  } = props;

  const { categoryList } = useCategoryCall();

  const { categories } = useSelector((state: RootState) => state?.category);
  console.log(categories);

  React.useEffect(() => {
    categoryList("categories/");
  }, []);

  return (
    // <Form>
    <Box
      sx={{
        width: "50%",
        margin: " 3rem auto",
        border: "1px solid white",
        boxShadow: " 20px 12px 12px 12px #599ee3dc",
        padding: "1.5rem",
        borderRadius: "10px",
      }}
    >
      <Box
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        component="form"
        // onSubmit={handleSubmit}
      >
        <Typography align="center" variant="h5" color={"#1976d2"}>
          New Blog
        </Typography>
        <TextField
          label="Title"
          id="title"
          name="title"
          type="text"
          variant="outlined"
          value={values?.title}
          onBlur={handleBlur}
          onChange={handleChange}
          // helperText={touched.title && errors.title}
          // error={touched.title && Boolean(errors.title)}
          required
        />
        <TextField
          label="Image URL"
          id="Image"
          name="Image"
          type="text"
          variant="outlined"
          onBlur={handleBlur}
          value={values?.image}
          onChange={handleChange}
          // helperText={touched.image && errors.image}
          // error={touched.image && Boolean(errors.image)}
          required
        />

        <FormControl>
          <InputLabel id="category" required>
            Category
          </InputLabel>
          <Select
            label="Category"
            id="category"
            labelId="category"
            type="text"
            onBlur={handleBlur}
            // error={touched.category && Boolean(errors.category)}
            value={values?.category}
            onChange={handleChange}
          >
            <MenuItem>Please choose...</MenuItem>
            {categories.map((x: any) => (
              <MenuItem key={x._id} value={x.name}>
                {x.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl>
          <InputLabel id="select">Please choose...</InputLabel>
          <TextField
            id="select"
            select
            label="Select"
            defaultValue="Please choose..."
            type="text"
            required
            onBlur={handleBlur}
            // value={values?.select}
            // helperText={touched.select && errors.select}
            // error={touched.select && Boolean(errors.select)}
            onChange={handleChange}
          >
            <MenuItem defaultChecked>Please choose...</MenuItem>
            <MenuItem value={"draft"}>Draft</MenuItem>
            <MenuItem value={"Published"}>Published</MenuItem>
            {/* {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))} */}
          </TextField>
        </FormControl>

        <TextField
          id="outlined-textarea"
          label="Content"
          placeholder="Content"
          multiline
          required
          rows={3.5}
          onBlur={handleBlur}
          value={values?.content}
          // helperText={touched.content && errors.content}
          // error={touched.content && Boolean(errors.content)}
        />
        <Button
          type="submit"
          variant="contained"
          size="large"
          disabled={isSubmitting}
        >
          New Blog
        </Button>
      </Box>
    </Box>
    // </Form>
  );
};

export default NewBlog;
