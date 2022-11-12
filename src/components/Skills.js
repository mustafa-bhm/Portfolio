import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import htmlIcon from "../assets/img/html.svg";
import JsIcon from "../assets/img/javascript.svg";
import cssIcon from "../assets/img/css3.svg";
import bootstrapIcon from "../assets/img/bootstrap.svg";
import "animate.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Skills() {
  // to initait Aos
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-box">
              <h2 data-aos="fade-right">Skills</h2>
              <p>
                Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </p>
              <div data-aos="fade-left">
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  className="skill-slider"
                >
                  <div className="item">
                    <img src={JsIcon} alt="skill" className="skill-icons" />
                    <h5>skill 1</h5>
                  </div>
                  <div className="item">
                    <img
                      src={bootstrapIcon}
                      alt="skill"
                      className="skill-icons"
                    />
                    <h5>skill 2</h5>
                  </div>
                  <div className="item">
                    <img src={cssIcon} alt="skill" className="skill-icons" />
                    <h5>skill 2</h5>
                  </div>
                  <div className="item">
                    <img src={htmlIcon} alt="skill" className="skill-icons" />
                    <h5>skill 3</h5>
                  </div>
                </Carousel>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Skills;
