import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../components/Header/Header";
import HomePage from "../pages/HomePage/HomePage";
import Login from "../pages/Login/Login";
import Profile from "../pages/Profile/Profile";

function Routers() {
  return (
    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/profile" element={<Profile />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default Routers;
