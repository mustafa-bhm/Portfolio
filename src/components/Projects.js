import React from "react";
import { Container } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import jungleImg from "../assets/img/jungle.png";
import waxwing from "../assets/img/waxwing.png";

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
      title: "Cocktail ",
      description:
        "This is a single page app that was built as a final Project for Lighthouse Lab bootcamp",
      imgUrl: waxwing,
      liveDemo: "https://www.youtube.com/watch?v=8M-r5ZMTc-g",
      githubRepo: "https://github.com/mustafa-bhm/cocktail-final-project",
    },
    {
      title: "Members Only ",
      description:
        "An exclusive clubhouse where members can write anonymous posts",
      imgUrl:
        "https://raw.githubusercontent.com/mustafa-bhm/V.I.P.-CLUB/master/public/assets/homepage-nonLoggedin-user.png",
      liveDemo: "https://members-only-af6p.onrender.com/",
      githubRepo: "https://github.com/mustafa-bhm/V.I.P.-CLUB",
    },
    {
      title: "Express Blog ",
      description: "Blog website built with Node.js, Express and MangoDb",
      imgUrl:
        "https://raw.githubusercontent.com/mustafa-bhm/blog-mongoDB/master/public/ScreenShot2.png",
      liveDemo: "https://blog-mongodb.onrender.com/blogs",
      githubRepo: "https://github.com/mustafa-bhm/blog-mongoDB",
    },
    {
      title: "My Library ",
      description:
        "Web app that allows users to add, update and delete their favorite books using Firebase.",
      imgUrl:
        "https://raw.githubusercontent.com/mustafa-bhm/My-Library-Firebase/master/src/assets/home-page.png",
      liveDemo: "https://my-library-firebase.netlify.app/",
      githubRepo: "https://github.com/mustafa-bhm/My-Library-Firebase",
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

    {
      title: "Tiny App ",
      description:
        "TinyApp is a full stack web application built with Node and Express that allows users to shorten long URLs (?? la bit.ly).",
      imgUrl: "https://i.imgur.com/9gRbGjK.png",
      liveDemo: "https://www.youtube.com/watch?v=4VZ2TVKERt0",
      githubRepo: "https://github.com/mustafa-bhm/tinyapp",
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
      title: "Memory Card ",
      description: "A Memory game Built wit React and Tailwind CSS",
      imgUrl:
        "https://raw.githubusercontent.com/mustafa-bhm/Memory-Card-React/master/public/homePage.png",
      liveDemo: " https://mustsfa-memory-game.netlify.app/",
      githubRepo: "https://github.com/mustafa-bhm/Memory-Card-React",
    },
    {
      title: "Weather App ",
      description: "A weather app built using the OpenWeatherMap API",
      imgUrl:
        "https://raw.githubusercontent.com/mustafa-bhm/weather-App/master/assets/homepage.png",
      liveDemo: "https://mustafa-bhm.github.io/weather-App/",
      githubRepo: "https://github.com/mustafa-bhm/weather-App",
    },
    {
      title: "Tic Tac Toe",
      description: "A weather app built using the OpenWeatherMap API",
      imgUrl:
        "https://raw.githubusercontent.com/mustafa-bhm/Tic-Tac-Toe/master/assets/homepage.png",
      liveDemo: "https://mustafa-bhm.github.io/Tic-Tac-Toe/",
      githubRepo: "https://github.com/mustafa-bhm/Tic-Tac-Toe",
    },
    {
      title: "Rock Paper Scissors !",
      description: "A Rock Paper Scissors built with vanilla JavaScript",
      imgUrl:
        "https://raw.githubusercontent.com/mustafa-bhm/R-P-S/master/assets/homepage.png",
      liveDemo: "https://rock-paper-scissors-mustafa.netlify.app/",
      githubRepo: "https://github.com/mustafa-bhm/R-P-S",
    },
    {
      title: "Sketch",
      description:
        "An Etch-a-Sketch game created using HTML, CSS and Javascript",
      imgUrl:
        "https://raw.githubusercontent.com/mustafa-bhm/sketch/master/assets/Screen%20Shot%202022-11-07%20at%208.04.19%20PM.png",
      liveDemo: "https://mustafa-bhm.github.io/sketch/",
      githubRepo: "https://github.com/mustafa-bhm/sketch",
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
