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
        >
          <Row className="align-items-center  ">
            <Col xs={12} md={6} xl={7}>
              <span className="tagline"> Welcome to my portfolio !</span>
              <h1>
                {`Hi I'm mustafa`} <span className="wrap"> Web developer</span>
              </h1>
              <p>
                {" "}
                About me , Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo
              </p>

              <a href="https://resume.creddle.io/resume/qhc7b38b36">Resume</a>
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
