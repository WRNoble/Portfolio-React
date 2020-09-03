import React from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";

function BlogPostInfo(props) {
  const animation = useSpring({ opacity: 4, from: { opacity: 0 } });

  return (
    <animated.div className="w-card-info" style={animation}>
      <p className="w-card-title">{props.title}</p>
      <p className="w-card-text">{props.text}</p>
      <Link to={props.link}>learning with me!</Link>
    </animated.div>
  );
}

export default BlogPostInfo;
