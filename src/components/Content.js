import React from "react";
import { Container } from "react-bootstrap";
import PicRay from "../images/PicRay.jpg";

function Content() {
  return (
    <Container fluid={false}>
      <div>
        <div>
          <img
            src={PicRay}
            height="440"
            width="350"
            className="float-left mr-5 rounded-lg picture"
            alt="William Ray Noble Jr."
          />
          <br />
          <p>
            Persistence. Even when the going is tough, persistence gets the job
            done. It requires strength of character, patience, humility,
            eager learning, and adaptable collaboration. I strive for these
            qualities in my life, whether I’m parsing Greek or caring for a
            friend. My diverse work experience in the hospitality and medical
            industries has equipped me to pick up new skills that require
            critical attention to detail; and as a developer, this helps me
            enjoy figuring out a coding puzzle.
          </p>
          <p>
            I graduated from Shawnee State University in 2012 with a bachelor's
            degree in history; and in August 2015, I started my Master of
            Divinity at The Southern Baptist Theological Seminary.  My studies
            in history and theology have been valuable in a variety of ways,
            compelling me to be precise, communicate clearly, remain teachable,
            work hard, and be (again) persistent. I look forward to applying
            these skills to the field of software development, in addition to
            learning others. In May 2020, I moved to La Plata, MD, to marry my
            beautiful wife, though I’m an Ohio native. When my schedule permits,
            I like to read non-fiction and take cross-country road trips.
          </p>
          <p>"By perseverance the snail reached the ark" (Charles Spurgeon).</p>
        </div>
      </div>
    </Container>
  );
}

export default Content;
