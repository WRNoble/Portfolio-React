import React, { Component } from "react";
import Poster from "../components/Poster";
import { Form, Button, Container } from "react-bootstrap";
import axios from "axios";

class ContactPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      disabled: false,
      emailSent: null,
    };
  }

  handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      disabled: true,
      emailSent: true,
    });
    axios
      .post("http://localhost:3050/api/email", this.state)
      .then((res) => {
        if (res.data.success) {
          this.setState({
            disabled: false,
            emailSent: true,
          });
        } else {
          this.setState({
            disabled: false,
            emailSent: false,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          disabled: false,
          emailSent: false,
        });
      });
  };

  render() {
    return (
      <div>
        <Poster title={this.props.title} />
        <Container fluid={true}>
          <div className="row">
            <Form
              onSubmit={this.handleSubmit}
              className="mr-5 ml-5 pl-5 pr-5 w-50"
            >
              <Form.Group>
                <Form.Label htmlFor="full-name">Full Name</Form.Label>
                <Form.Control
                  id="full-name"
                  name="name"
                  type="text"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label htmlFor="email">Email</Form.Label>
                <Form.Control
                  id="email"
                  name="email"
                  type="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label htmlFor="message">Message</Form.Label>
                <Form.Control
                  id="message"
                  name="message"
                  as="textarea"
                  rows="5"
                  value={this.state.message}
                  onChange={this.handleChange}
                />

                <Button
                  className="d-inline-block button mt-3"
                  variant="secondary"
                  type="submit"
                  disabled={this.state.disabled}
                >
                  Send
                </Button>

                {this.state.emailSent === true && (
                  <p className="d-inline success-msg">Message Sent!</p>
                )}
                {this.state.emailSent === false && (
                  <p className="d-inline err-msg">
                    Sorry, an error occurred and you message could not be
                    processed.
                  </p>
                )}
              </Form.Group>
            </Form>
            <a
              href="https://docs.google.com/document/d/1OKDppzsM08KnOdhvugpLKLgzUT9xRsVaAxUZ7B0QhLg/edit"
              target="blank"
              className="m-5"
            >
              Resume
            </a>
            <br />
            <a
              href="https://www.linkedin.com/in/william-ray-noble-jr-software-developer/"
              target="blank"
              className="m-5"
            >
              Linkedin
            </a>
            <br />
            <a href="https://github.com/WRNoble" target="blank" className="m-5">
              GitHub
            </a>
          </div>
        </Container>
      </div>
    );
  }
}

export default ContactPage;
