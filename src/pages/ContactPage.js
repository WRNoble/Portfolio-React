import React from "react";
import Poster from "../components/Poster";
import Email from "../components/Gmail";
import { Container } from "react-bootstrap";
import Linkedin from "../images/Linkedin.png";
import GitHub from "../images/GitHub.png";
import Resume from "../images/Resume.png";
import Treehouse from "../images/Treehouse.png";

function ContactPage(props) {
  return (
    <div>
      <Poster title={props.title} />
      <Container fluid={false}>
        <div className="row">
          <Email />
          <a
            href="https://docs.google.com/document/d/1OKDppzsM08KnOdhvugpLKLgzUT9xRsVaAxUZ7B0QhLg/edit"
            target="_blank"
            className="m-5"
            title="Resume"
          >
            <img src={Resume} alt="Resume" height="100" width="100" />
          </a>
          <br />

          <a
            href="https://www.linkedin.com/in/william-ray-noble-jr-software-developer/"
            target="_blank"
            className="m-5"
            title="Linkedin"
          >
            <img src={Linkedin} alt="Linkedin" height="100" width="100" />
          </a>

          <br />

          <a
            href="https://github.com/WRNoble"
            target="_blank"
            className="m-5"
            title="GitHub"
          >
            <img src={GitHub} alt="GitHub" height="100" width="100" />
          </a>
          <br />

          <a
            href="https://teamtreehouse.com/williamnoble"
            target="_blank"
            className="m-5"
            title="Treehouse"
          >
            <img
              src={Treehouse}
              alt="team treehouse"
              height="100"
              width="100"
            />
          </a>
        </div>
      </Container>
    </div>
  );
}

export default ContactPage;
