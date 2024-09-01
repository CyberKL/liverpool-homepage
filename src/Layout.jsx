import React, { useEffect } from "react";
import ThemeToggleButton from "./components/common/ThemeToggleButton";
import { useSelector } from "react-redux";

const Layout = ({ children }) => {
  const theme = useSelector((state) => state.theme);

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(theme);
  }, [theme]);
  
  return (
    <div>
      <div className="fixed bottom-4 right-4 z-50">
        <ThemeToggleButton />
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
