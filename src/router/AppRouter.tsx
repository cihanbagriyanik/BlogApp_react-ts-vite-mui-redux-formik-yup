import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";

import PrivateRouter from "./PrivateRouter";

import Dashboard from "../pages/Dashboard";
import Detail from "../pages/Detail";
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
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />

        <Route path="blogapp" element={<PrivateRouter />}>
          <Route index element={<Dashboard />} />
          <Route path="detail" element={<Detail />} />
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
