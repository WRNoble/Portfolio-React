import React from "react";
import { useSpring, animated } from "react-spring";

function CardInfo(props) {
  const animation = useSpring({ opacity: 4, from: { opacity: 0 } });

  return (
    <animated.div className="w-card-info" style={animation}>
      <p className="w-card-title">{props.title}</p>
      <p className="w-card-text">{props.text}</p>
      <a href={props.link} target="blank">
        Check It Out!
      </a>
      <br />
      <a href={props.linkTwo} target="blank">
        GitHub Repo
      </a>
    </animated.div>
  );
}

export default CardInfo;
