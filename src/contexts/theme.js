import React, { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

// Create a new context
const ThemeContext = createContext();

// The ThemeProvider component
const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState("light");

  // Set the initial theme based on user's preferred color scheme
  useEffect(() => {
    const darkMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setThemeName(darkMediaQuery.matches ? "dark" : "light");

    const handleThemeChange = (e) => {
      setThemeName(e.matches ? "dark" : "light");
    };

    // Listen for changes in color scheme preference
    darkMediaQuery.addEventListener("change", handleThemeChange);

    // Clean up the event listener when the component unmounts
    return () => {
      darkMediaQuery.removeEventListener("change", handleThemeChange);
    };
  }, []);

  // Function to toggle the theme
  const toggleTheme = () => {
    const name = themeName === "dark" ? "light" : "dark";
    localStorage.setItem("themeName", name);
    setThemeName(name);
  };

  // Provide the theme state and toggle function to child components
  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ThemeProvider, ThemeContext };
