import React from "react";
import Poster from "../components/Poster";
import BlogBelt from "../components/BlogBelt";

function BlogPage(props) {
  return (
    <div>
      <Poster title={props.title} />
      <p className="ml-4 pl-2 instructions">
        Select an image below to read the article
      </p>
      <BlogBelt />
    </div>
  );
}

export default BlogPage;
