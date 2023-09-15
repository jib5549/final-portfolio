import React, { useContext, useState } from "react";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { ThemeContext } from "../../contexts/theme"; // Import the ThemeContext
import { projects, contact, header } from "../../portfolio";
import "./Navbar.css";

const Navbar = () => {
  const contextValue = useContext(ThemeContext);
  const themeName = contextValue.themeName;
  const toggleTheme = contextValue.toggleTheme;

  const [showNavList, setShowNavList] = useState(false);

  const toggleNavList = () => setShowNavList(!showNavList);

  return (
    <nav className="center nav">
      <ul
        style={{ display: showNavList ? "flex" : null }}
        className="nav__list"
      >
      {header ? (
          <li className="nav__list-item">
            <a
              href="#header"
              onClick={toggleNavList}
              className="link link--nav"
            >
              Home
            </a>
          </li>
        ) : null}

      {contact.email ? (
          <li className="nav__list-item">
            <a
              href="#about"
              onClick={toggleNavList}
              className="link link--nav"
            >
              About
            </a>
          </li>
        ) : null}

        {projects.length ? (
          <li className="nav__list-item">
            <a
              href="#projects"
              onClick={toggleNavList}
              className="link link--nav"
            >
              Projects
            </a>
          </li>
        ) : null}

        {contact.email ? (
          <li className="nav__list-item">
            <a
              href="#contact"
              onClick={toggleNavList}
              className="link link--nav"
            >
              Contact
            </a>
          </li>
        ) : null}
      </ul>

      <button
        type="button"
        onClick={toggleTheme} // Use the toggleTheme function from the ThemeContext
        className="btn btn--icon nav__theme moveUp"
        aria-label="toggle theme"
      >
        {themeName === "dark" ? <WbSunnyIcon /> : <Brightness2Icon />}
      </button>

      <button
        type="button"
        onClick={toggleNavList}
        className="btn btn--icon nav__hamburger"
        aria-label="toggle navigation"
      >
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </button>
    </nav>
  );
};

export default Navbar;
