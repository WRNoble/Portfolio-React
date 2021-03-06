import React from "react";
import Poster from "../components/Poster";
import JavaScript from "../images/JavaScript.png";
import ReactPic from "../images/React.png";
import Node from "../images/Node.png";
import GitHub from "../images/GitHub.png";
import SQL from "../images/Sql.png";
import Python from "../images/Python.png";
import Git from "../images/Git.png";

function HomePage(props) {
  return (
    <div>
      <Poster
        title={props.title}
        text={props.text}
        subtext={props.subtext}
        subtext1={props.subtext1}
      />
      <div className="ml-5 mt-5 p-3 pl-5">
        <img
          className="ml-5 mr-5 mt-3"
          src={Git}
          alt="GitHub"
          height="70"
          width="70"
        />
        <img
          className="ml-5 mr-5 mt-3"
          src={GitHub}
          alt="Git"
          height="70"
          width="70"
        />
        <img
          className="ml-5 mr-5 mt-3"
          src={JavaScript}
          alt="JavaScript"
          height="70"
          width="70"
        />
        <img
          className="ml-5 mr-5 mt-3"
          src={ReactPic}
          alt="React"
          height="70"
          width="70"
        />
        <img
          className="ml-5 mr-5 mt-3"
          src={Node}
          alt="Node"
          height="70"
          width="70"
        />
        <img
          className="ml-5 mr-5 mt-3"
          src={SQL}
          alt="SQL"
          height="70"
          width="70"
        />
        <img
          className="ml-5 mr-5 mt-3"
          src={Python}
          alt="Python"
          height="70"
          width="70"
        />
      </div>
    </div>
  );
}

export default HomePage;
