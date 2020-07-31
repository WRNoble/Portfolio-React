import React, { Component } from "react";
import PicGmail from "../images/PicGmail.png";

class Email extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    window.location.href = "mailto:wrnoblejr.dev@gmail.com";
  }
  render() {
    return (
      <img
        src={PicGmail}
        alt="Gmail"
        title="Email"
        height="115"
        width="100"
        className="m-5 email"
        onClick={this.onClick}
      />
    );
  }
}

export default Email;
