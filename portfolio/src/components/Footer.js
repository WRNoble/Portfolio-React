import React from "react";
import { Container } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";

function Footer() {
  return (
    <footer className="mt-5 footer fixed-bottom">
      <Container fluid={true}>
        <Row className="justify-content-between p-3">
          <Col className="p-0" md={3} sm={12}>
            William Ray Noble, Jr.
          </Col>
          <Col className="p-0 d-flex justify-content end" md={3}>
            This site was last updated on July 22, 2020.
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
