import React, { Component } from "react";
import Card from "../components/Card";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import PicRome from "../images/PicRome.png";
import PicOne from "../images/PicOne.jpg";
import PicApartment from "../images/PicApartment.jpg";
import PicGame from "../images/PicGame.jpg";

class Belt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Classical Rome Seminar",
          text: "HTML and CSS Bootstrap",
          imgSrc: PicOne,
          link: "https://wrnoble.github.io/CSS-Bootstrap-Roman-Conference/",
          linkTwo: "https://github.com/WRNoble/CSS-Bootstrap-Roman-Conference",
          selected: false,
        },
        {
          id: 1,
          title: "Ancient Rome Trivia Game",
          text: "HTML, CSS, and JavaScript",
          imgSrc: PicRome,
          link: "https://wrnoble.github.io/Ancient-Rome-Trivia/",
          linkTwo: "https://github.com/WRNoble/Ancient-Rome-Trivia",
          selected: false,
        },
        {
          id: 2,
          title: "Apartment Mockup",
          text: "HTML and CSS",
          imgSrc: PicApartment,
          link: "#",
          linkTwo: "#",
          selected: false,
        },
        {
          id: 3,
          title: "Scoreboard",
          text: "React",
          imgSrc: PicGame,
          link: "#",
          linkTwo: "#",
          selected: false,
        },
      ],
    };
  }

  handleCardClick = (id, card) => {
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach((item) => {
      if (item.id !== id) {
        item.selected = false;
      }
    });
    this.setState({
      items,
    });
  };

  createCards = (items) => {
    return items.map((item) => {
      return (
        <Card
          item={item}
          click={(e) => this.handleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.createCards(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default Belt;
