import React from "react";
import {
  Box,
  Typography,
  Button,
  List,
  ListItem,
  ListItemIcon,
  IconButton,
  Card,
} from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

// import { CardDiv, AboutLi, AboutUl, AboutA, AboutButton } from "./style";

// const icons = [
//   { icon: <FacebookIcon />, index: "1" },
//   { icon: <GitHubIcon />, index: "2" },
//   { icon: <InstagramIcon />, index: "3" },
//   { icon: <LinkedInIcon />, index: "4" },
//   { icon: <EmailIcon />, index: "5" },
// ];

const icons = [
  { icon: <FacebookIcon />, link: "https://www.facebook.com/" },
  { icon: <GitHubIcon />, link: "https://github.com/" },
  { icon: <InstagramIcon />, link: "https://www.instagram.com/" },
  { icon: <LinkedInIcon />, link: "https://www.linkedin.com/" },
  { icon: <EmailIcon />, link: "mailto:example@example.com" },
];

const About: React.FC = () => {
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: 5 }}>
        <Card sx={{ p: 3, py: 4, maxWidth: 600 }}>
          <Box sx={{ textAlign: "center" }}>
            <img
              src="https://avatars.githubusercontent.com/u/132518854?s=400&u=0efc72b62c05db69764f95edf879a00501263527&v=4"
              width={100}
              className="rounded-circle"
              alt="a"
              style={{ borderRadius: "50%" }}
            />
          </Box>
          <Box sx={{ textAlign: "center", mt: 3 }}>
            <Typography variant="h5" sx={{ mt: 2, mb: 0 }}>
              Cihan Bagriyanik
            </Typography>
            <Typography variant="subtitle1">Fullstack Developer</Typography>
            <Box sx={{ px: 4, mt: 1 }}>
              <Typography variant="body1" marginTop={7}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                voluptatem dolore sint quo assumenda eum voluptate aut, sequi
                rem cumque facilis asperiores possimus porro, facere eveniet!
                Tempora non cupiditate in quis adipisci. Distinctio, deleniti
                dolores?
              </Typography>
            </Box>
            <List sx={{ marginTop: "2.5rem" }}>
              <ListItem>
                <ListItemIcon
                  sx={{ gap: "1.5rem", margin: "auto", background: "none" }}
                >
                  {icons.map((a) => (
                    <IconButton
                      sx={{
                        "& .MuiSvgIcon-root": {
                          fontSize: "2.2rem",
                        },
                        ":hover": {
                          color: "#1976d2",
                        },
                      }}
                      // color="error"
                      key={a.link}
                      href={a.link}
                      target="_blank"
                    >
                      {a.icon}
                    </IconButton>
                  ))}
                </ListItemIcon>
              </ListItem>
            </List>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: "7rem",
                marginTop: "2rem",
              }}
            >
              <Button
                variant="contained"
                href="https://www.linkedin.com/in/bagriyanik/"
                target="_blank"
              >
                Message
              </Button>
              <Button
                variant="contained"
                href="https://github.com/cihanbagriyanik"
                target="_blank"
              >
                Contact
              </Button>
            </Box>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

export default About;
