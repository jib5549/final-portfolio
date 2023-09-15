import Header from "./components/Header/Header";

import "./App.css";
import { useContext } from "react";
import { ThemeContext } from "./contexts/theme";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer"
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
const App = () => {
  const contextValue = useContext(ThemeContext);
  return (
    <div id="top" className={`${contextValue.themeName} app`}>
    <div className="getCentered">
      <Header />
      <main>
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
      <ScrollToTop />
      </div>
    </div>
  );
};

export default App;
