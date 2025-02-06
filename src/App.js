import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PostProject from "./pages/PostProject";
import Project from "./pages/Project";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post_project" element={<PostProject />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
