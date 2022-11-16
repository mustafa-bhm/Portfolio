import React from "react";
import "react-multi-carousel/lib/styles.css";
import htmlIcon from "../assets/icons/html.svg";
import JsIcon from "../assets/icons/javascript.svg";
import cssIcon from "../assets/icons/css3.svg";
import bootstrapIcon from "../assets/icons/bootstrap.svg";

import "animate.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import express from "../assets/icons/express.svg";
import chai from "../assets/icons/chai.svg";
import mocha from "../assets/icons/mocha-1.svg";
import sass from "../assets/icons/sass-1.svg";
import nodeJs from "../assets/icons/nodejs-2.svg";
import react from "../assets/icons/react-2.svg";
import psql from "../assets/icons/postgresql.svg";

function Skills() {
  // to initait Aos
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="skill2" id="skills">
      <div className="icons-phone">
        <h2 data-aos="fade-right" className="section-title2">
          I have experience with these technologies
        </h2>
        <div data-aos="fade-left" className="skills-row">
          <div className="skill-item">
            <img src={JsIcon} alt="skill" className="skill-icon" />
            <h5>Javascript</h5>
          </div>
          <div className="skill-item">
            <img src={bootstrapIcon} alt="skill" className="skill-icon" />
            <h5>Bootstrap</h5>
          </div>
          <div className="skill-item">
            <img src={cssIcon} alt="skill" className="skill-icon" />
            <h5>CSS</h5>
          </div>

          <div className="skill-item">
            <img src={htmlIcon} alt="skill" className="skill-icon" />
            <h5>HTML</h5>
          </div>
          <div className="skill-item">
            <img src={express} alt="skill" className="skill-icon" />
            <h5>Express JS</h5>
          </div>
          <div className="skill-item">
            <img src={chai} alt="skill" className="skill-icon" />
            <h5>Chai</h5>
          </div>

          <div className="skill-item">
            <img src={mocha} alt="skill" className="skill-icon" />
            <h5>Mocha</h5>
          </div>
          <div className="skill-item">
            <img src={sass} alt="skill" className="skill-icon" />
            <h5>Sass</h5>
          </div>
          <div className="skill-item">
            <img src={nodeJs} alt="skill" className="skill-icon" />
            <h5>NodeJS</h5>
          </div>

          <div className="skill-item">
            <img src={react} alt="skill" className="skill-icon" />
            <h5>React</h5>
          </div>
          <div className="skill-item">
            <img src={psql} alt="skill" className="skill-icon" />
            <h5>Postgresql</h5>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
