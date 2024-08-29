import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import AllNews from '../pages/AllNews'
import Join from '../pages/Join'
import ContactEmailForm from "../pages/ContactEmailForm";
import ContactUs from "../pages/ContactUs";
import ScrollToTop from "../components/common/ScrollToTop";
import ProtectedRoute from "./ProtectedRoute";
import Profile from "../pages/Profile";

const AppRoutes = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const login = () => {
    setIsAuthenticated(true);
  }

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login login={login} />} />
        <Route path="/join" element={<Join />} />
        <Route path="/news" element={<AllNews />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path='/contact-email-form' element={<ContactEmailForm />} />
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
