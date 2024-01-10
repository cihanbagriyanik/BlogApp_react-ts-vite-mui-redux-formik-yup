import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";

import useAuthCall from "../hooks/useAuthCall";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const { currentUser } = useSelector((state: RootState) => state.auth);

  const { logOut } = useAuthCall();

  const pages = [
    { title: "Dashboard", url: "/blogapp" },
    { title: "New Blog", url: "/blogapp/newblog" },
    { title: "About", url: "/blogapp/about" },
  ];

  const profiles = currentUser
    ? 
    [
        { title: "Profile", url: "/blogapp/profile" },
        { title: "My Blogs", url: "/blogapp/myblog" },
        { title: "Logout", url: "/logout" },
      ]
    : [{ title: "Login", url: "/" }];



  React.useEffect(() => {
    // console.log("useEffect is running");
    // console.log("currentUser:", currentUser);
    // console.log("window.location.pathname:", window.location.pathname);
    if (currentUser && window.location.pathname === "/") {
      // console.log("if is runnig");
      navigate("/blogapp");
    }
  }, [currentUser]);

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (url: string) => {
    setAnchorElNav(null);
    navigate(url);
  };
  const handleCloseUserMenu = (url: string) => {
    setAnchorElUser(null);
    if (url === "/logout") {
      logOut();
    } else {
      navigate(url);
    }
  };

  return (
    <AppBar position="static">
      <Box sx={{ padding: "0 2rem" }}>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {"<Cihan/>"} <br />
            Blog App
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.title}
                  onClick={() => handleCloseNavMenu(page.url)}
                >
                  <Typography textAlign="center">{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {"<Cihan/> Blog App"}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.title}
                onClick={() => handleCloseNavMenu(page.url)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.title}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Cihan Bag" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {currentUser
                ? profiles.map((item) => (
                    <MenuItem
                      key={item.title}
                      onClick={() =>
                        item.title === "logout"
                          ? logOut()
                          : handleCloseUserMenu(item.url)
                      }
                    >
                      <Typography textAlign="center">
                        {item.title === "logout" ? "Logout" : item.title}
                      </Typography>
                    </MenuItem>
                  ))
                : profiles.map((item) => (
                    <MenuItem
                      key={item.title}
                      onClick={() => handleCloseUserMenu(item.url)}
                    >
                      <Typography textAlign="center">{item.title}</Typography>
                    </MenuItem>
                  ))}
            </Menu>
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  );
};
export default Navbar;
