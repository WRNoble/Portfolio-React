import React, { Component } from "react";
import Card from "../components/Card";
import { Container, Row } from "react-bootstrap";
import PicRome from "../images/PicRome.png";
import GIFSearch from "../images/GIFSearch.png";
import RomeCon from "../images/RomeCon.png";
import Scoreboard from "../images/Scoreboard.png";
import Budget from "../images/Budget.png";
import Four from "../images/Four.png";
import Django from "../images/PicDjango.png";

class Belt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Budget Tracker",
          text: "MondoDB, Express, React, Node (MERN)",
          imgSrc: Budget,
          link: "https://sheltered-mountain-32702.herokuapp.com/",
          linkTwo: "https://github.com/WRNoble/budget-tracker",
          selected: false,
        },
        {
          id: 1,
          title: "Four In A Row",
          text: "HTML, CSS, and JavaScript",
          imgSrc: Four,
          link: "https://wrnoble.github.io/four-in-a-row/",
          linkTwo: "https://github.com/WRNoble/four-in-a-row",
          selected: false,
        },
        {
          id: 2,
          title: "Classical Rome Seminar",
          text: "HTML and CSS Bootstrap",
          imgSrc: RomeCon,
          link: "https://wrnoble.github.io/CSS-Bootstrap-Roman-Conference/",
          linkTwo: "https://github.com/WRNoble/CSS-Bootstrap-Roman-Conference",
          selected: false,
        },
        {
          id: 3,
          title: "Django Learning Site",
          text: "Python/Django",
          imgSrc: Django,
          link: "https://djangolearningromesite.herokuapp.com/",
          linkTwo: "https://github.com/WRNoble/django-learning-site",
          selected: false,
        },
        {
          id: 4,
          title: "Ancient Rome Trivia Game",
          text: "HTML, CSS, and JavaScript",
          imgSrc: PicRome,
          link: "https://wrnoble.github.io/Ancient-Rome-Trivia/",
          linkTwo: "https://github.com/WRNoble/Ancient-Rome-Trivia",
          selected: false,
        },
        {
          id: 5,
          title: "GIF Search App",
          text: "React",
          imgSrc: GIFSearch,
          link: "https://wrnoble.github.io/gif-search-deploy/",
          linkTwo: "https://github.com/WRNoble/gif-search-deploy",
          selected: false,
        },
        {
          id: 6,
          title: "Scoreboard",
          text: "React",
          imgSrc: Scoreboard,
          link: "https://dreamy-torvalds-0b4bc1.netlify.app/",
          linkTwo: "https://github.com/WRNoble/scoreboard",
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
