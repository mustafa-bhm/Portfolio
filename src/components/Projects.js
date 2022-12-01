import React from "react";
import { Container } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import projectImage from "../assets/img/project-img1.png";

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
      title: "Tiny App ",
      description:
        "TinyApp is a full stack web application built with Node and Express that allows users to shorten long URLs (à la bit.ly).",
      imgUrl: "https://i.imgur.com/9gRbGjK.png",
      liveDemo: "https://www.youtube.com/watch?v=4VZ2TVKERt0",
      githubRepo: "https://github.com/mustafa-bhm/tinyapp",
    },
    {
      title: "Cocktail ",
      description:
        "This is a single page app that was built as a final Project for Lighthouse Lab bootcamp",
      imgUrl:
        "https://github.com/mustafa-bhm/cocktail-final-project/raw/master/screenshots/Homepage.png",
      liveDemo: "https://www.youtube.com/watch?v=8M-r5ZMTc-g",
      githubRepo: "https://github.com/mustafa-bhm/cocktail-final-project",
    },
    {
      title: "Scheduler",
      description:
        "This Interview Scheduler is a SPA ( single-page-application) , that can help students create / update and delete their appointments",
      imgUrl:
        "https://raw.githubusercontent.com/mustafa-bhm/scheduler/master/docs/Screen%20Shot%20.png",
      liveDemo: "https://www.youtube.com/watch?v=kdaE9yyipCI",
      githubRepo: "https://github.com/mustafa-bhm/scheduler",
    },
    {
      title: "Jungle ",
      description:
        "A mini e-commerce application built with Rails 6.1 for purposes of learning Rails",
      imgUrl: projectImage,
      liveDemo: "",
      githubRepo: "https://github.com/mustafa-bhm/jungle-rails",
    },
    {
      title: "Tweeter",
      description:
        "This is a responsive , simple and single-page Twitter clone",
      imgUrl:
        "https://raw.githubusercontent.com/mustafa-bhm/tweeter./main/public/images/Desktop-2.png",
      liveDemo: "",
      githubRepo: "https://github.com/mustafa-bhm/tweeter.",
    },
    {
      title: "To-do-App ",
      description: "A To-Do-App built with HTML , CSS and Javascript",
      imgUrl:
        "https://raw.githubusercontent.com/mustafa-bhm/To-do-list/master/assets/Screen%20Shot%202022-11-30%20at%208.18.18%20PM.png",
      liveDemo: "https://www.google.com/",
      githubRepo: "https://github.com/mustafa-bhm/To-do-list",
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
