import React from "react";
import Poster from "../components/Poster";
import Belt from "../components/Belt";

function ProjectsPage(props) {
  return (
    <div>
      <Poster title={props.title} />
      <p className="ml-4 pl-2 instructions">
        Select an image below to learn more
      </p>
      <Belt />
    </div>
  );
}

export default ProjectsPage;
