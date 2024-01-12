import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Form, FormikProps } from "formik";
import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Requeired!"),
  username: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Requeired!"),
  lastName: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Requeired!"),
  email: Yup.string().email().required("Requeired!"),
  password: Yup.string()
    .min(8, "It must be at least 8 characters!")
    .max(50, "It can be a maximum of 50 characters!")
    .matches(/\d+/, "Must contain at least one digit!")
    .matches(/[A-Z]/, "Must contain at least one capital letter!")
    .matches(/[a-z]/, "Must contain at least one lowercase letter!")
    .matches(/[@$!%*?&]+/, "Must contain at least one special character!")
    .required("Requeired!"),
});

const RegisterForm = (props: FormikProps<FormValues>) => {
  const { values, handleChange, errors, touched, handleBlur, isSubmitting } =
    props;

  return (
    <div>
      <Form>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            id="username"
            name="username"
            label="Username"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.username && errors.username}
            error={touched.username && Boolean(errors.username)}
          />
          <TextField
            label="First Name"
            name="firstName"
            id="firstName"
            type="text"
            variant="outlined"
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.firstName && errors.firstName}
            error={touched.firstName && Boolean(errors.firstName)}
          />
          <TextField
            label="Last Name"
            name="lastName"
            id="lastName"
            type="text"
            variant="outlined"
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.lastName && errors.lastName}
            error={touched.lastName && Boolean(errors.lastName)}
          />
          <TextField
            label="Email"
            name="email"
            id="email"
            type="email"
            variant="outlined"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.email && errors.email}
            error={touched.email && Boolean(errors.email)}
          />

          <TextField
            label="Image"
            name="image"
            id="image"
            type="text"
            variant="outlined"
            value={values.image}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.image && errors.image}
            error={touched.image && Boolean(errors.image)}
          />
          <TextField
            label="City"
            name="city"
            id="city"
            type="text"
            variant="outlined"
            value={values.city}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.city && errors.city}
            error={touched.city && Boolean(errors.city)}
          />
          <TextField
            label="Bio"
            name="bio"
            id="bio"
            type="text"
            variant="outlined"
            value={values.bio}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.bio && errors.bio}
            error={touched.bio && Boolean(errors.bio)}
          />
          <TextField
            label="password"
            name="password"
            id="password"
            type="password"
            variant="outlined"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.password && errors.password}
            error={touched.password && Boolean(errors.password)}
          />

          <Button
            type="submit"
            variant="contained"
            size="large"
            disabled={isSubmitting}
          >
            Sign Up
          </Button>
        </Box>
      </Form>
    </div>
  );
};

export default RegisterForm;
