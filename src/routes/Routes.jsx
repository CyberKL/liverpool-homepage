import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import AllNews from '../pages/AllNews'
import Join from '../pages/Join'
import ContactUs from "../pages/ContactUs";
import ContactEmailForm from "../pages/ContactEmailForm";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/join" element={<Join />} />
      <Route path="/news" element={<AllNews />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path='/contact-email-form' element={<ContactEmailForm />} />
    </Routes>
  );
};

export default AppRoutes;
