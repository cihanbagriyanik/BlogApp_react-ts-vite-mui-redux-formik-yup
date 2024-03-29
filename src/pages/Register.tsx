import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import LockIcon from "@mui/icons-material/Lock";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";

import { Formik } from "formik";
// import { FormikHelpers } from "formik";
import useAuthCall from "../hooks/useAuthCall";
import RegisterForm, { SignupSchema } from "../components/auth/RegisterForm";

// interface RegisterResponse {
//   token?: string;
//   error?: string;
// }

const Register = () => {
  const { register } = useAuthCall();

  // const handleSubmit = async (
  //   values: FormValues,
  //   actions: FormikHelpers<FormValues>
  // ) => {
  //   try {
  //     // Sunucuya kayıt isteği gönder
  //     const response: any | RegisterResponse = await register(values);

  //     console.log("response" + response);

  //     // Eğer sunucudan token başarılı bir şekilde döndüyse, oturumu başlat
  //     if (response && response.token) {
  //       console.log("Token:", response.token);
  //       // Oturum açıldıktan sonra, kullanıcıyı başka bir sayfaya yönlendirebilirsiniz
  //       // Örneğin, burada "/home" sayfasına yönlendirme yapabilirsiniz
  //       // window.location.href = "/home";
  //     } else {
  //       // Sunucudan token dönmediyse, kayıt işlemi başarısız olmuştur
  //       console.error("Registration failed:", response.error);
  //       // Kullanıcıya bir hata mesajı gösterebilirsiniz
  //     }
  //   } catch (error) {
  //     console.error("Registration error:", error);
  //     // Kayıt sırasında bir hata oluşursa, kullanıcıya bir hata mesajı gösterebilirsiniz
  //   } finally {
  //     actions.setSubmitting(false);
  //   }
  // };

  return (
    <Container
      maxWidth="lg"
      sx={{
        marginTop: "3rem",
      }}
    >
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        rowSpacing={{ sm: 3 }}
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
              // handleSubmit(values, actions);
              actions.resetForm();
              actions.setSubmitting(false);
            }}
            component={(props) => <RegisterForm {...props} />}
          ></Formik>

          <Box sx={{ textAlign: "center", mt: 3, color: "secondary.main" }}>
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
