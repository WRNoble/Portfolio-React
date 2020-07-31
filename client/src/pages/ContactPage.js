import React from "react";
import Poster from "../components/Poster";
import Email from "../components/Gmail";
import { Container } from "react-bootstrap";
import Linkedin from "../images/Linkedin.png";
import GitHub from "../images/GitHub.png";
import Resume from "../images/Resume.png";
import TeamTreehouse from "../images/teamtreehouse.png";

function ContactPage(props) {
  return (
    <div>
      <Poster title={props.title} />
      <Container fluid={false}>
        <div className="row">
          <Email />
          <a
            href="https://docs.google.com/document/d/1OKDppzsM08KnOdhvugpLKLgzUT9xRsVaAxUZ7B0QhLg/edit"
            target="blank"
            className="m-5"
            title="Resume"
          >
            <img src={Resume} alt="Resume" height="100" width="100" />
          </a>
          <br />

          <a
            href="https://www.linkedin.com/in/william-ray-noble-jr-software-developer/"
            target="blank"
            className="m-5"
            title="Linkedin"
          >
            <img src={Linkedin} alt="Linkedin" height="100" width="100" />
          </a>

          <br />

          <a
            href="https://github.com/WRNoble"
            target="blank"
            className="m-5"
            title="GitHub"
          >
            <img src={GitHub} alt="GitHub" height="100" width="100" />
          </a>
          <br />

          <a
            href="https://teamtreehouse.com/williamnoble"
            target="blank"
            className="m-5"
            title="Treehouse"
          >
            <img
              src={TeamTreehouse}
              alt="team treehouse"
              height="115"
              width="140"
            />
          </a>
        </div>
      </Container>
    </div>
  );
}

export default ContactPage;
