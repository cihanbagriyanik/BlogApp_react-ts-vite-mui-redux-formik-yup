import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";

import PrivateRouter from "./PrivateRouter";

import Dashboard from "../pages/Dashboard";
import BlogDetail from "../pages/BlogDetail";
import Navbar from "../components/Navbar";
import About from "../pages/About";
import NewBlog from "../pages/NewBlog";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";
import Footer from "../components/Footer";
import MyBlog from "../pages/MyBlog";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        <Route path="" element={<PrivateRouter />}>
          <Route path="blogdetail/:id" element={<BlogDetail />} />
          <Route path="about" element={<About />} />
          <Route path="newblog" element={<NewBlog />} />
          <Route path="profile" element={<Profile />} />
          <Route path="myblog" element={<MyBlog />} />
          <Route path="notfound" element={<NotFound />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;
