import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PicRay from "../images/PicRay.jpeg";

function Content(props) {
  return (
    <Container fluid={false}>
      <div className="row">
        <div className="col">
          <img
            src={PicRay}
            height="400"
            width="350"
            className="ml-5 float-left mr-5 rounded-lg"
          />
          <p>Hello and thanks for stopping by my webpage!</p>
        </div>
      </div>
    </Container>
  );
}

export default Content;
