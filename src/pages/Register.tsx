import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import LockIcon from "@mui/icons-material/Lock";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";

import { Formik } from "formik";
import useAuthCall from "../hooks/useAuthCall";
import RegisterForm, { SignupSchema } from "../components/auth/RegisterForm";

const Register = () => {
  const { register } = useAuthCall();
  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        rowSpacing={{ sm: 3 }}
        sx={{
          height: "81.2vh",
          p: 2,
        }}
      >
        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "secondary.light",
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <LockIcon />
          </Avatar>
          <Typography
            variant="h4"
            align="center"
            mb={2}
            color="secondary.light"
          >
            Register
          </Typography>

          <Formik
            initialValues={{
              username: "",
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              image: "",
              bio: "",
              city: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values: FormValues, actions) => {
              console.log(values);
              register(values);
              actions.resetForm();
              actions.setSubmitting(false);
            }}
            component={(props) => <RegisterForm {...props} />}
          ></Formik>

          <Box sx={{ textAlign: "center", mt: 2, color: "secondary.main" }}>
            <Button>
              <Link to="/login">Already have an account? Sign in</Link>
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
