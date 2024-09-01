// src/components/ThemeToggleButton.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../features/theme/themeSlice";

const ThemeToggleButton = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(setTheme(theme === "light" ? "dark" : "light"))}
      className="p-2 bg-gray-200 dark:bg-gray-700 dark:text-white rounded-full"
    >
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
};

export default ThemeToggleButton;
