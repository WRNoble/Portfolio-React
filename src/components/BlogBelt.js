import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import BlogCard from "../components/BlogCard";
import jsPicFizzbuzz from "../blog image/imageSix.png";

class BlogBelt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogLinks: [
        {
          id: 0,
          title: "Fizzbuzz",
          text: "The classic Fizzbuzz challenge",
          imgSrc: jsPicFizzbuzz,
          path: "/JsFizzbuzz",
          selected: false,
        },
      ],
    };
  }

  handleBlogClick = (id) => {
    let blogLinks = [...this.state.blogLinks];

    blogLinks[id].selected = blogLinks[id].selected ? false : true;

    blogLinks.forEach((blogLink) => {
      if (blogLink.id !== id) {
        blogLink.selected = false;
      }
    });
    this.setState({ blogLinks });
  };

  createBlogCards = (blogLinks) => {
    return blogLinks.map((blogLink) => {
      return (
        <BlogCard
          blogLink={blogLink}
          click={(e) => this.handleBlogClick(blogLink.id, e)}
          key={blogLink.id}
        />
      );
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.createBlogCards(this.state.blogLinks)}
        </Row>
      </Container>
    );
  }
}

export default BlogBelt;
