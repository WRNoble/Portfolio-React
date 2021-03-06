import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
import "./App.css";
import JsFizzbuzz from "./pages/JsFizzbuzz";
import ReverseString from "./pages/ReverseString";
import Pangram from "./pages/Pangram";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "William Ray Noble Jr.",
      headerLink: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Projects", path: "/projects" },
        { title: "Contact", path: "/contact" },
        { title: "Blog", path: "/blog" },
      ],
      home: {
        title: "Never, Ever Give Up",
        text: "Persistent Programming",
        subtext:
          "Full-Stack Developer: Git, GitHub, HTML5, CSS3, JavaScript, React, Node, Express, MongoDB, Mongoose, Python, SQL, and Django",
      },
      about: {
        title: "My Story",
        text: "Husband, Programmer, Friend",
      },
      projects: {
        title: "My Work",
      },
      contact: {
        title: "My Contact",
      },
      blog: {
        title: "Code Quiz",
      },
    };
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar
            className="border-bottom navbar navbar-dark bg-dark"
            expand="lg"
          >
            <Navbar.Brand>
              <a href={"/"} className="text-white text-decoration-none">
                William Ray Noble, Jr.
              </a>
            </Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/about">
                  My Story
                </Link>
                <Link className="nav-link" to="/projects">
                  Projects
                </Link>
                <a
                  className="nav-link"
                  href="https://drive.google.com/file/d/1mvDR7swfxO_zL1HawKVZ1O-uYd4YGYIH/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
                <Link className="nav-link" to="/blog">
                  Blog
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route
            path="/"
            exact
            render={() => (
              <HomePage
                title={this.state.home.title}
                text={this.state.home.text}
                subtext={this.state.home.subtext}
                subtext1={this.state.home.subtext1}
              />
            )}
          />
          <Route
            path="/about"
            exact
            render={() => (
              <AboutPage
                title={this.state.about.title}
                text={this.state.about.text}
              />
            )}
          />
          <Route
            path="/projects"
            exact
            render={() => <ProjectsPage title={this.state.projects.title} />}
          />
          <Route
            path="/contact"
            exact
            render={() => <ContactPage title={this.state.contact.title} />}
          />
          <Route
            path="/blog"
            exact
            render={() => <BlogPage title={this.state.blog.title} />}
          />
          <Route path="/JsFizzbuzz" exact render={() => <JsFizzbuzz />} />
          <Route path="/ReverseString" exact render={() => <ReverseString />} />
          <Route path="/Pangram" exact render={() => <Pangram />} />
        </Container>
      </Router>
    );
  }
}

export default App;
