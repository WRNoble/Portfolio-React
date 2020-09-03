import React from "react";
import BlogPostInfo from "../components/BlogPostInfo";

function BlogCard(props) {
  return (
    <div
      className="d-inline-block w-card"
      onClick={(e) => props.click(props.blogLink)}
    >
      <img
        className="w-card-image mb-3"
        src={props.blogLink.imgSrc}
        alt={props.blogLink.imgSrc}
      />
      {props.blogLink.selected && (
        <BlogPostInfo
          title={props.blogLink.title}
          text={props.blogLink.text}
          link={props.blogLink.link}
        />
      )}
    </div>
  );
}

export default BlogCard;
