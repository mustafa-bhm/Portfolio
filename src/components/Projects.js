import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import projectImage from "../assets/img/project-img1.jpg";

import "animate.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Projects() {
  // to initait Aos
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

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
    <section className="proj" id="projects">
      <Container>
        <h2 className="section-title"> Projects</h2>
        <div className="project-cards" data-aos="zoom-in">
          {projects.map((project, key) => {
            return <ProjectCard Key={key} {...project} />;
          })}
        </div>
      </Container>
    </section>
  );
}

export default Projects;
