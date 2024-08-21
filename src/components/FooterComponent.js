import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function FooterComponent() {
  return (
    <div className="footer py-5">
      <Container>
        <Row>
          <Col>
            <h3 className="fw-bold">Ngoding.In</h3>
            <p className="desc">
              Ad fugiat proident id velit adipisicing excepteur ullamco nulla
              cillum aute cillum ipsum quis culpa
            </p>
            <div className="no mb-1 mt-4">
              <Link className="text-decoration-none">
                <i className="fa-brands fa-whatsapp"></i>
                <p className="m-0">+62 123-456-789</p>
              </Link>
            </div>
            <div className="mail">
              <Link className="text-decoration-none">
                <i className="fa-regular fa-envelope"> </i>
                <p className="m-0">person-email@gmail.com</p>
              </Link>
            </div>
          </Col>
          <Col className="d-flex flex-column col-lg-2 col">
            <h5 className="fw-bold">Menu</h5>
            <Link to="">Home</Link>
            <Link to="kelas">Kelas</Link>
            <Link to="testimonial">Testimonial</Link>
            <Link to="faq">FAQ</Link>
            <Link to="syaratketentuan">Syarat & Ketentuan</Link>
          </Col>
          <Col>
            <h5>Subscribe Untuk Info Menarik!</h5>
            <div className="subscribes">
              <input type="text" placeholder="Subscribe..."></input>
              <Button>Subscribe</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FooterComponent;
