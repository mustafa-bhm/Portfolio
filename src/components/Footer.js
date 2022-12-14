import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <section className="footer">
      <p> Mustafa </p>
      <div className="icons">
        <a
          href="https://github.com/mustafa-bhm"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={30} className="icon " />
        </a>
        <a
          href="https://www.linkedin.com/in/mustafa-bhm/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={30} className="icon " />
        </a>
      </div>
    </section>
  );
}

export default Footer;
