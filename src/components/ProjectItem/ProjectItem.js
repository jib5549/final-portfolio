import GitHubIcon from "@mui/icons-material/GitHub";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import "./ProjectItem.css";

const ProjectItem = ({ project }) => (
  <div className="project">
    <h3>{project.name}</h3>
    {/* <img src={project.img} className="project-img" alt="hi" /> */}
    <p className="project__description">{project.description}</p>
    {project.stack && (
      <ul className="project__stack">
        {project.stack.map((item) => (
          <li
            key={Math.floor(Math.random() * 1001)}
            className="project__stack-item"
          >
            {item}
          </li>
        ))}
      </ul>
    )}

    {project.sourceCode && (
      <a
        href={project.sourceCode}
        aria-label="source code"
        className="link link--icon"
      >
        <GitHubIcon />
      </a>
    )}

    {project.livePreview && (
      <a
        href={project.livePreview}
        aria-label="live preview"
        className="link link--icon"
      >
        <RocketLaunchIcon />
      </a>
    )}
  </div>
);

export default ProjectItem;
