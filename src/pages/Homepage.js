import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HeroImage from "../assets/img/hero.png";

function Homepage() {
  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="header-box d-flex align-items-center">
            <Col>
              <h1 className="mb-4">
                Temukan <br /> <span>Course Favoritmu</span> Bersama Kami!
              </h1>
              <p className="mb-4">
                Ullamco reprehenderit aliqua enim nulla do tempor do adipisicing
                pariatur cillum ea in est.
              </p>
              <button className="btn btn-danger btn-lg rounded-1 me-2">
                Lihat Kelas
              </button>
              <button className="btn btn-outline-danger btn-lg rounded-1">
                Lihat Promo
              </button>
            </Col>
            <Col>
              <img src={HeroImage} alt="hero-img" />
            </Col>
          </Row>
        </Container>
      </header>
      <div className="kelas w-100 min-vh-100"></div>
    </div>
  );
}

export default Homepage;
