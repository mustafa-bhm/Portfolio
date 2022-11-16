import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { useState, useEffect } from "react";

function NavBar() {
  const [activeLink, setActiveLink] = useState("home");

  // to initait Aos

  // const [scrolled, setScrolled] = useState(false);
  // useEffect(() => {
  //   const onScroll = () => {
  //     if (window.scrollY > 50) {
  //       setScrolled(true);
  //     } else {
  //       setScrolled(false);
  //     }
  //   };
  //   window.addEventListener("scroll", onScroll);
  //   return () => window.removeEventListener("scroll", onScroll);
  // }, []);
  const onUpdateActivelink = (value) => {
    setActiveLink(value);
  };
  return (
    <>
      {/* <div className="navBar2"></div> */}
      <Navbar
        // bg="dark"
        variant="dark"
        // className={scrolled ? "scrolled" : ""}
        expand="lg"
        sticky="top"
        id="navBar"
      >
        <Container className="nav-container">
          <Navbar.Brand href="/">
            {/* <img src={} alt="Logo" className="logo" /> */}
          </Navbar.Brand>
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
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActivelink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActivelink("projects")}
              >
                Projects
              </Nav.Link>

              <Nav.Link
                href="#contact"
                className={
                  activeLink === "contact"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActivelink("contact")}
              >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
