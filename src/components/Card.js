import React from "react";
import CardInfo from "../components/CardInfo";

function Card(props) {
  return (
    <div
      className="d-inline-block w-card"
      onClick={(e) => props.click(props.item)}
    >
      <img
        className="w-card-image  mb-3"
        src={props.item.imgSrc}
        alt={props.item.imgSrc}
      />
      {props.item.selected && (
        <CardInfo
          title={props.item.title}
          text={props.item.text}
          link={props.item.link}
          linkTwo={props.item.linkTwo}
        />
      )}
    </div>
  );
}

export default Card;
