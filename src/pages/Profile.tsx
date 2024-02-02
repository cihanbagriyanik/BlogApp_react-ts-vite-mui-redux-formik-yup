// import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

interface User {
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  username: string;
  createdAt: string;
}

const Profile = () => {
  const { user } = useSelector((state: RootState) => state?.auth);
  // console.log(user);
  const userInfo = user as User;

  return (
    <Card
      sx={{
        width: "30rem",
        minWidth: "10rem",
        height: "30rem",
        minHeight: "10rem",
        margin: " 7rem auto 10rem",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={userInfo.image}
          alt="image"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ borderBottom: "2px solid black" }}
          >
            <span style={{ fontWeight: "bold" }}> Full Name:</span>{" "}
            {userInfo.firstName + " " + userInfo.lastName}
          </Typography>

          <Typography
            variant="h5"
            color="text"
            sx={{ borderBottom: "2px solid black", marginBottom: "0.3rem" }}
          >
            <span style={{ fontWeight: "bold" }}>User Name:</span>{" "}
            {userInfo.username}
          </Typography>

          <Typography
            variant="h5"
            color="text"
            sx={{ borderBottom: "2px solid black", marginBottom: "0.3rem" }}
          >
            <span style={{ fontWeight: "bold" }}>Email:</span> {userInfo.email}
          </Typography>

          <Typography
            variant="h5"
            color="text"
            sx={{ borderBottom: "2px solid black" }}
          >
            <span style={{ fontWeight: "bold" }}>Account Created: </span>{" "}
            {new Date(userInfo.createdAt).toLocaleDateString("de-DE")}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Profile;
