import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import projectImage from "../assets/img/project-img1.jpg";

function Projects() {
  const projects = [
    {
      title: "App name ",
      description: "Design & Development",
      imgUrl: projectImage,
      liveDemo: "https://www.google.com/",
      githubRepo: "https://github.com/",
    },
    {
      title: "App name ",
      description: "Design & Development",
      imgUrl: projectImage,
      liveDemo: "https://www.google.com/",
      githubRepo: "https://github.com/",
    },
    {
      title: "App name ",
      description: "Design & Development",
      imgUrl: projectImage,
      liveDemo: "https://www.google.com/",
      githubRepo: "https://github.com/",
    },
    {
      title: "App name ",
      description: "Design & Development",
      imgUrl: projectImage,
      liveDemo: "https://www.google.com/",
      githubRepo: "https://github.com/",
    },
    {
      title: "App name ",
      description: "Design & Development",
      imgUrl: projectImage,
      liveDemo: "https://www.google.com/",
      githubRepo: "https://github.com/",
    },
    {
      title: "App name ",
      description: "Design & Development",
      imgUrl: projectImage,
      liveDemo: "https://www.google.com/",
      githubRepo: "https://github.com/",
    },
  ];

  return (
    <section className="proj">
      <Container>
        <h2> Projects</h2>
        <div className="project-cards">
          {projects.map((project, key) => {
            return <ProjectCard Key={key} {...project} />;
          })}
        </div>
      </Container>
    </section>
  );
}

export default Projects;
