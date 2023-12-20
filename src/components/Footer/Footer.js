import "./Footer.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="containerFooter">
          <div className="footerc">
            <h3>Copyright © 2023 . All rights are reserved</h3>
            <div className="footericon">
              <a
                href="https://github.com/jib5549"
                aria-label="github"
                className="link link--icon"
              >
                <GitHubIcon style={{ width: "1em"}} />
              </a>
              <a
                href="https://www.linkedin.com/in/junbaek0307/"
                aria-label="linkedin"
                className="link link--icon"
              >
                <LinkedInIcon style={{ width: "1em", height: "1em" }} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
