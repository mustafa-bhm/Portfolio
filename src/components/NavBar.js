import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { useState, useEffect } from "react";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const onUpdateActivelink = (value) => {
    setActiveLink(value);
  };
  return (
    <Navbar
      bg="dark"
      variant="dark"
      className={scrolled ? "scrolled" : ""}
      expand="lg"
    >
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActivelink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#Projects"
              className={
                activeLink === "Projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActivelink("Projects")}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#Skills"
              className={
                activeLink === "Skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActivelink("Skills")}
            >
              Skills
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <button className="nav-btn" onClick={() => console.log("connect")}>
              Contact
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
