import React from "react";
import "../App.css";

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
import Footer from "../components/Footer";
import MyBlog from "../pages/MyBlog";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <div className="routes-container">
        <Navbar />
        <div style={{ flexGrow: "3" }}>
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
            </Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default AppRouter;
