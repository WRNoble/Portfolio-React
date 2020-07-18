import React from "react";
import Poster from "../components/Poster";
import Content from "../components/Content";

function AboutPage(props) {
  return (
    <div>
      <Poster title={props.title} text={props.text} />
      <Content>Hello</Content>
    </div>
  );
}

export default AboutPage;
