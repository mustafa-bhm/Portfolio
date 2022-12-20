import React from "react";
import { FaGithub } from "react-icons/fa";

function ProjectCard({ title, description, imgUrl, liveDemo, githubRepo }) {
  return (
    <div className="project">
      <img src={imgUrl} alt="project" className="project__img" />
      <div className="project__overlay">
        <h4 className="project__title">{title}</h4>
        <p className="project__description"> {description}</p>
        <div className="project__links">
          <a href={liveDemo} target="_blank" rel="noopener noreferrer">
            Demo
          </a>
          <a href={githubRepo} target="_blank" rel="noopener noreferrer">
            {/* Github Repo */}
            <FaGithub size={30} className="icon-projects " />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
