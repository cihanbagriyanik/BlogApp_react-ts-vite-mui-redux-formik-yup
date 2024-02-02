import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1976d2",
        width: "100%",
        padding: ".5rem",
        margin: "18rem 0 0",
        // position: "fixed",
        bottom: "0",
        display: "inline-block",
        color: "white",
      }}
    >
      <Typography align="center">
        Developed by Cihan Bagriyanik <br />
        {"<Cihan/>"} Blog App &copy; Copyright {new Date().getFullYear()}
        <br />
        All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
