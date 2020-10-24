import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import BlogCard from "../components/BlogCard";
import jsPicFizzbuzz from "../blog image/imageSix.png";
import reverseString from "../blog image/reverseString.png";
import pangram from "../blog image/pangram.png";

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
          link: "/JsFizzbuzz",
          selected: false,
        },
        {
          id: 1,
          title: "Reverse A String",
          text: "Reverse A String In JavaScript",
          imgSrc: reverseString,
          link: "/ReverseString",
          selected: false,
        },
        {
          id: 2,
          title: "Pangram",
          text: "Discover if a sentence is a pangram",
          imgSrc: pangram,
          link: "/Pangram",
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
