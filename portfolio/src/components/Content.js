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
            height="450"
            width="350"
            className="ml-5 float-left mr-5 rounded-lg"
            alt="William Ray Noble Jr."
          />
          <p>
            <big>
              Persistence gets the job done, even when the going is tough. It
              requires strength of character, patience, and humility—constant
              learning and cooperation with peers. I strive for these qualities
              in my life, whether parsing Greek or being a good friend.
              Throughout my diverse work experience in the hospitality and
              medical industries, I was ever picking up new skills, skills that
              required critical attention to detail in effort to care for
              others. As a programmer, I seek to focus on the task at hand,
              welcoming learning and collaboration with enthusiasm.
            </big>
          </p>
          <p>
            <big>
              I graduated from Shawnee State University in 2012 with a
              bachelor's degree in history. I started my Master of Divinity at
              The Southern Baptist Theological Seminary in August of 2015. Both
              my studies in history and theology have instilled in me the
              importance of precision, communication, humility, and persistence.
              I married my beautiful wife in May of 2020 after moving from
              Louisville, KY to La Plata, MD. I look forward to applying all of
              these skills to the field of software development.
            </big>
          </p>
        </div>
      </div>
    </Container>
  );
}

export default Content;
