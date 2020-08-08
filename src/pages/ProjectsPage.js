import React from "react";
import Poster from "../components/Poster";
import Belt from "../components/Belt";

function ProjectsPage(props) {
  return (
    <div>
      <Poster title={props.title} />
      <Belt />
    </div>
  );
}

export default ProjectsPage;
