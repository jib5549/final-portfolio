import { header } from "../../portfolio";
import "./Header.css";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  const { homepage, title } = header;

  return (
    <section id="header">
      <header className="header center">
        <h3>
          {homepage ? (
            <a href={homepage} className="link">
              {title}
            </a>
          ) : (
            title
          )}
        </h3>
        <Navbar />
      </header>
    </section>
  );
};

export default Header;
