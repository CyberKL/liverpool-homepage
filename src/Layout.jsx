import React from "react";
import ThemeToggleButton from "./components/common/ThemeToggleButton";

const Layout = ({ children }) => {
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
