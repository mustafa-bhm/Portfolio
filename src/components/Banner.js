import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerimg from "../assets/img/banner.svg";

function Banner() {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline"> Welcome to my portfolio !</span>
            <h1>
              {`Hi I'm mustafa`} <span className="wrap"> Web developer</span>
            </h1>
            <p>
              {" "}
              About me , Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo
            </p>
            <button onClick={() => console.log("btn clicked !")}>
              contact <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img className="banner-img" src={headerimg} alt="header" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;
