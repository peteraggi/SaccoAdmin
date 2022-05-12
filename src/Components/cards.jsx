import React from "react";
import { cardsData } from "../Data/data";
import "../Design/Cards.css";
import Card from "./card";

export default function Cards(){
    return(
        <div className="Cards">
      {cardsData.map((card, id) => {
        return (
          <div className="parentContainer" key={id}>
            <Card
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series}
            />
          </div>
        );
      })}
    </div>
    );
}