import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { about } from "../../portfolio";
import "./About.css";

const About = () => {
  const { social } = about;

  return (
    <div>
    <section id="home" className="hero">
    <div className="container">
      <div className="content">
        <div className="hero-main">
          <div className="mainText">
            <h1 className="hone">Full-Stack Developer</h1>
            <img
              className="waveimg"
              src="https://i.imgur.com/8NejSWU.png"
              alt="waving_hand"
            >
            </img>
            <p className="pone">
              Hi, I'm Jun Min Baek. A passionate Full-Stack Developer based in Philadelphia. 📍
            </p>
            <span className="social">
              <a
                href={social.github}
                aria-label="github"
                className="link link--icon"
              >
                <GitHubIcon style={{ width: '1.8em', height: '2em' }}/>
              </a>
              <a
                href={social.linkedin}
                aria-label="linkedin"
                className="link link--icon"
              >
                <LinkedInIcon style={{ width: '2em', height: '2em' }}/>
              </a>
            </span>
          </div>
          <div className="junimg"></div>
        </div>
        <div className="skills">
          <p>Tech Stack</p>
          <div className="logos">
            <ul>
              <li>
                <img
                  className="logos"
                  src="https://skillicons.dev/icons?i=html,css,js,react,py,nodejs,jest,mongodb,git,github,heroku,neovim,netlify,nginx,postman"
                  alt="skill-icon"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
      </div>
      </section>
      <section className="aboutMeSection">
      <section className="aboutMe" id="about">
        <div className="containerMe">
          <div className="aboutMeContainer">
            <div className="img-side">
            <img className="main-img" src="https://www.stefantopalovic.com/static/media/about-img.62b47e7f183d4b4e9feb.webp" alt=""/>
              <img className="worker-img" src="https://i.imgur.com/QypJ40c.png" alt=""/>
              <span>
                <img className="rotatePic" src="https://i.imgur.com/GNQi0mR.png" alt=""/>
              </span>
            </div>
            <div className="text-side">
              <h3>About me</h3>
              <h4>
                A dedicated Full-stack Developer
                <br />
                based in Philadelphia. 📍
              </h4>
              <p>
                Owning my own business allowed me to be a problem solver and
                welcomed any type of challenges that came my way. Passionate
                about setting new goals for myself and through achieving them,
                it allows me to challenge myself even more with my constant
                curiosity. I am someone who infuses humor and fun into every day
                and thrives on collaboration to bring ideas to reality.
              </p>
            </div>
          </div>
        </div>
      </section>
      </section>
    </div>
  );
};

export default About;
