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
import { Form, FormikProps } from "formik";

import { useSelector } from "react-redux";

import { RootState } from "../../app/store";
import useCategoryCall from "../../hooks/useCategoryCall";

const select = [
  { id: 1, name: "Published", value: true },
  { id: 2, name: "Draft", value: false },
];

const NewBlogForm = (props: FormikProps<NewBlogFormValues>) => {
  const {
    values,
    handleChange,
    errors,
    touched,
    handleBlur,
    isSubmitting,
    handleSubmit,
  } = props;

  const { categoryList } = useCategoryCall();

  const { categories } = useSelector((state: RootState) => state?.category);
  // console.log(categories);
  React.useEffect(() => {
    categoryList("categories/");
  }, []);

  return (
    <Form onSubmit={handleSubmit}>
      <Box
        sx={{
          width: "50%",
          margin: " 3rem auto",
          boxShadow: " 20px 12px 12px 12px #599ee3dc",
          padding: "1.5rem",
          borderRadius: "10px",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography align="center" variant="h5" color={"#1976d2"}>
            New Blog
          </Typography>

          <TextField
            label="Title"
            id="title"
            name="title"
            type="text"
            variant="outlined"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values?.title}
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
            value={values?.image}
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
              //   type="text"
              variant="outlined"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values?.categoryId || ""}
              //   helperText={touched.image && errors.image}
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
              //   type="text"
              variant="outlined"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values?.isPublish || ""}
              //   helperText={touched.isPublish && errors.isPublish}
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
            value={values?.content}
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
            New Blog
          </Button>
        </Box>
      </Box>
    </Form>
  );
};

export default NewBlogForm;
