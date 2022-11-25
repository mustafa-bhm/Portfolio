import { Col, Container, Row } from "react-bootstrap";
import headerimg from "../assets/img/banner.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { isVisible } from "@testing-library/user-event/dist/utils";

function Banner() {
  return (
    <section className="banner" id="home">
      <TrackVisibility>
        <Container
          className={isVisible ? "animate__animated animate__fadeInDown" : ""}
          id="banner-container"
        >
          <Row className="align-items-center  ">
            <Col xs={12} md={6} xl={7}>
              <span className="tagline"> Hi, my name is </span>
              <h1>
                Mustafa
                <span className="wrap"> and I'm a Web Developer</span>
              </h1>
              <p>
                I'm a Bilingual [EN-FR] Web Developer with a focus on the
                JavaScript ecosystem for product development. I love building
                new things and learning new technologies.
              </p>

              <a
                href="https://resume.creddle.io/resume/qhc7b38b36"
                className="resume"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <img className="banner-img" src={headerimg} alt="header" />
            </Col>
          </Row>
        </Container>
      </TrackVisibility>
    </section>
  );
}

export default Banner;
