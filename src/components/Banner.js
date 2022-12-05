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
              <h2 className="name">
                Mustafa
                <span> and I'm a Full-Stack Web Developer</span>
              </h2>
              <p>
                Bilingual [EN-FR] Full Stack web developer with a focus on the
                JavaScript ecosystem for product development. My passion for web
                development lies in building something and being able to share
                it, and transforming ideas from concepts to applications that
                can be used by other people.
              </p>

              <a
                href="https://github.com/mustafa-bhm/resume/blob/master/resume/Resume-Mustafa.pdf"
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
