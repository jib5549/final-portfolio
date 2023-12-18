import { projects } from "../../portfolio";
import GitHubIcon from "@mui/icons-material/GitHub";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import "./Projects.css";
const Projects = () => {
  if (!projects.length) return null;

  return (
    <section className="section projects">
      <div className="project-content">
        <p id="projects">projects</p>
        <h3>Each project is a unique piece of development 🧩</h3>
        <div className="projects-grid">
          {/* project #1 */}
          <div className="pro pro__1 reversed-proj">
            <a className="pro__img"
            href="https://fallmart.greatestcoderalive.me/">
            <img
              className="pro__img"
              src="https://i.imgur.com/VKPqxQZ.png"
              alt=""
            />
            </a>
            <div className="pro__text">
              <h3>Fallmart</h3>
              <p>
                Come check out Fallmart! Feel free to sign up and to add items
                to your favorites and keep them there for future purchases. My
                e-commerce is inspired by Crate&Barrel.
              </p>
              <div className="stack">
                <p>React</p>
                <p>Express</p>
                <p>Node.js</p>
                <p>MongoDB</p>
              </div>
              <div className="links">
                <a
                  href="https://github.com/jib5549/fallmart"
                  aria-label="source code"
                  className="link link--icon"
                >
                  <GitHubIcon />
                </a>
                <a
                  href="https://fallmart.greatestcoderalive.me/"
                  aria-label="live preview"
                  className="link link--icon"
                >
                  <RocketLaunchIcon />
                </a>
              </div>
            </div>
          </div>

          {/* project #2 */}
          <div className="pro pro__1 undefined">
            <a className="pro__img"
            href="https://compuneed.greatestcoderalive.me">
            <img
              className="pro__img"
              src="https://i.imgur.com/OMbGgQ3.png"
              alt=""
            />
            </a>
            <div className="pro__text">
              <h3>Compuneed</h3>
              <p>
                Come design your dream gaming computer. Fill free to sign up and
                start browsing through the most updated gaming computers!
              </p>
              <div className="stack">
                <p>React</p>
                <p>Express</p>
                <p>Node.js</p>
                <p>MongoDB</p>
              </div>
              <div className="links">
                <a
                  href="https://github.com/jib5549/compuneed"
                  aria-label="source code"
                  className="link link--icon"
                >
                  <GitHubIcon />
                </a>
                <a
                  href="https://compuneed.greatestcoderalive.me"
                  aria-label="live preview"
                  className="link link--icon"
                >
                  <RocketLaunchIcon />
                </a>
              </div>
            </div>
          </div>

          {/* project #3 */}
          <div className="pro pro__1 reversed-proj">
            <a className="pro__img"
            href="https://moviehub-jm.onrender.com">
            <img
              className="pro__img"
              src="https://i.imgur.com/plmh98S.png"
              alt=""
            />
            </a>
            <div className="pro__text">
              <h3>MovieHub 🎬</h3>
              <p>
                Developed a Movie API using OMDb, providing extensive movie
                information access, including titles, release dates, cast, and
                ratings. Ensured efficient data retrieval and seamless error
                handling, emphasizing expertise in API development and data
                manipulation for superior web solutions.
              </p>
              <div className="stack">
                <p>React</p>
                <p>SCSS</p>
              </div>
              <div className="links">
                <a
                  href="https://github.com/jib5549/moviehub"
                  aria-label="source code"
                  className="link link--icon"
                >
                  <GitHubIcon />
                </a>
                <a
                  href="https://moviehub-jm.onrender.com"
                  aria-label="live preview"
                  className="link link--icon"
                >
                  <RocketLaunchIcon />
                </a>
              </div>
            </div>
          </div>

          {/* project #4 */}
          <div className="pro pro__1 undefined">
          <a className="pro__img"
          href="https://tictactoe-jmb.netlify.app/">
            <img
              className="pro__img"
              src="https://i.imgur.com/S1n7vQH.png"
              alt=""
            />
            </a>
            <div className="pro__text">
              <h3>Tic-Tac-Toe</h3>
              <p>
                Designed a Tic-Tac-Toe game with soothing elevator music using
                HTML, CSS, and JavaScript. This project exemplifies front-end
                web development skills, offering classic gameplay with a
                relaxing twist.
              </p>
              <div className="stack">
                <p>HTML</p>
                <p>CSS</p>
                <p>JS</p>
              </div>
              <div className="links">
                <a
                  href="https://github.com/jib5549/Unit-1-Project"
                  aria-label="source code"
                  className="link link--icon"
                >
                  <GitHubIcon />
                </a>
                <a
                  href="https://tictactoe-jmb.netlify.app/"
                  aria-label="live preview"
                  className="link link--icon"
                >
                  <RocketLaunchIcon />
                </a>
              </div>
            </div>
          </div>

          {/* project #5 */}
          <div className="pro pro__1 reversed-proj">
          <a className="pro__img"
          href="https://weatherapp-jm.onrender.com">
            <img
              className="pro__img"
              src="https://i.imgur.com/S8ksPw4.png"
              alt=""
            />
            </a>
            <div className="pro__text">
              <h3>WeatherWhiz</h3>
              <p>
                Built a React-based Weather API app for U.S. weather updates,
                enhanced with a personal Sedona backdrop. This project showcases
                front-end skills, seamlessly blending aesthetics and
                functionality to create an engaging user experience
              </p>
              <div className="stack">
                <p>React</p>
                <p>HTML</p>
                <p>CSS</p>
              </div>
              <div className="links">
                <a
                  href="https://github.com/jib5549/weatherapp"
                  aria-label="source code"
                  className="link link--icon"
                >
                  <GitHubIcon />
                </a>
                <a
                  href="https://weatherapp-jm.onrender.com"
                  aria-label="live preview"
                  className="link link--icon"
                >
                  <RocketLaunchIcon />
                </a>
              </div>
            </div>
          </div>

          {/* project #6 */}
          <div className="pro pro__1 undefined">
          <a className="pro__img"
          href="https://todolist.greatestcoderalive.me/">
            <img
              className="pro__img"
              src="https://i.imgur.com/yWrJckQ.png"
              alt=""
            />
            </a>
            <div className="pro__text">
              <h3>Todosfoyou🧾</h3>
              <p>
                Designed a robust Full Stack application utilizing React,
                Node.js, Express, and MongoDB. This project serves as a reliable
                memory aid, empowering users to effortlessly remember and
                organize important information.
              </p>
              <div className="stack">
                <p>React</p>
                <p>Express</p>
                <p>Node.js</p>
                <p>MongoDB</p>
              </div>
              <div className="links">
                <a
                  href="https://github.com/jib5549/fullstack-todolist"
                  aria-label="source code"
                  className="link link--icon"
                >
                  <GitHubIcon />
                </a>
                <a
                  href="https://todolist.greatestcoderalive.me/"
                  aria-label="live preview"
                  className="link link--icon"
                >
                  <RocketLaunchIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
