import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";

import "./App.css";

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
      ],
      home: {
        title: "Never, Ever Give Up",
        text: "Persistent Programming",
        subtext: "Full-Stack Developer: HTML5, CSS3, JavaScript, React",
        subtext1: "Node, Express, Mongo, Mongoose, Python, and Django",
      },
      about: {
        title: "My Story",
        text: "Husband, Programmer, Friend",
      },
      projects: {
        title: "My Work",
      },
      contact: {
        title: "Drop Me A Line!",
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
            <Navbar.Brand>William Ray Noble, Jr.</Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/about">
                  My Story
                </Link>
                <Link className="nav-link" to="/projects">
                  Projects
                </Link>
                <Link className="nav-link" to="/contact">
                  Contact
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
        </Container>
      </Router>
    );
  }
}

export default App;
