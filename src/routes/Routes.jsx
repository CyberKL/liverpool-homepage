import React from "react";
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
import { useSelector } from "react-redux";

const AppRoutes = () => {
  const auth = useSelector((state) => state.auth);
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/news" element={<AllNews />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path='/contact-email-form' element={<ContactEmailForm />} />
        <Route element={<ProtectedRoute isAuthenticated={auth} />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
