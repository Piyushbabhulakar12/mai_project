import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const navigate = useNavigate();

  const redirectTo = () => {
    navigate("/post_project");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#fff" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img
              src={logo}
              alt="Logo"
              style={{ height: "60px", cursor: "pointer" }}
            />
          </Typography>
          <Button
            sx={{
              marginRight: "15px",
              backgroundColor: "#F5F5F5",
              color: "#000",
            }}
            onClick={() => redirectTo()}
          >
            Post a Project
          </Button>
          <IconButton color="primary" sx={{ marginRight: "15px" }}>
            <ShoppingCartIcon />
          </IconButton>
          <Button>Login</Button>
          <Button>Sign Up</Button>
        </Toolbar>
        <Toolbar>
          <Box
            sx={{ flexGrow: 1 }}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center	"}
          >
            <Box>
              <Typography
                variant="h6"
                component="div"
                color="primary"
                sx={{ fontWeight: 800 }}
              >
                WWW.MYPROJECT.AI
              </Typography>
            </Box>

            <Box>
              <Button onClick={() => navigate("/")}>Home</Button>
              <Button onClick={() => navigate("/")}>How it Works</Button>
              <Button onClick={() => navigate("/project")}> Project</Button>
              <Button onClick={() => navigate("/")}>Blogs</Button>
              <Button onClick={() => navigate("/")}>DIY Worktops</Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
