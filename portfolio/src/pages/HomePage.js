import React from "react";
import Poster from "../components/Poster";

function HomePage(props) {
  return (
    <div>
      <Poster
        title={props.title}
        text={props.text}
        subtext={props.subtext}
        subtext1={props.subtext1}
      />
    </div>
  );
}

export default HomePage;
