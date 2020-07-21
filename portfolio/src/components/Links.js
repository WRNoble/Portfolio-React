import React from "react";
import { Container } from "react-bootstrap";

function Links() {
  return (
    <Container fluid={false}>
      <div className="row">
        <div className="col">
          <a
            href="https://docs.google.com/document/d/1OKDppzsM08KnOdhvugpLKLgzUT9xRsVaAxUZ7B0QhLg/edit"
            target="blank"
            className="m-5"
          >
            Resume
          </a>
          <br />
          <a
            href="https://www.linkedin.com/in/william-ray-noble-jr-software-developer/"
            target="blank"
            className="m-5"
          >
            Linkedin
          </a>
          <br />
          <a href="https://github.com/WRNoble" target="blank" className="m-5">
            GitHub
          </a>
        </div>
      </div>
    </Container>
  );
}

export default Links;
