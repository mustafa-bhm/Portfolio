import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { useState } from "react";

function NavBar() {
  const [activeLink, setActiveLink] = useState("home");

  const onUpdateActivelink = (value) => {
    setActiveLink(value);
  };
  return (
    <>
      <Navbar variant="dark" expand="lg" sticky="top" id="navBar">
        <Container className="nav-container">
          <Navbar.Brand href="/"></Navbar.Brand>
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
