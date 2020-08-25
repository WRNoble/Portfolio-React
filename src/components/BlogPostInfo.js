import React from "react";
import { Route, Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import JsFizzbuzz from "../pages/JsFizzbuzz";

function BlogPostInfo(props) {
  const animation = useSpring({ opacity: 4, from: { opacity: 0 } });

  return (
    <animated.div className="w-card-info" style={animation}>
      <p className="w-card-title">{props.title}</p>
      <p className="w-card-text">{props.text}</p>
      <Link to="/JsFizzbuzz">Fizzbuzz in JavaScript</Link>
      <Route path="/JsFizzbuzz" exact render={() => <JsFizzbuzz />} />
    </animated.div>
  );
}

export default BlogPostInfo;
