import React from "react";
import uniqid from "uniqid";
import { useState} from "react";

const cardArray = [
    {
      text: 1,
      id: uniqid(),
      pick: false
    },
    {
      text: 2,
      id: uniqid(),
      pick: false
    },
    {
      text: 3,
      id: uniqid(),
      pick: false
    }
  ]

const CardDisplay = () => {
    const [cards, setCards] = useState(cardArray)

    function handleClick(e) {
        setCards(cards.map(function(card) {
            if(card.text === Number(e.target.id)) {
                card.pick = true
            }
            return card
        }))
        console.log(cards)
    }

    return (
        <div className="cards">
            {cards.map((card) => {
            return <div key={card.id} onClick={handleClick} id={card.text}>{card.text}</div>;
            })}
        </div>
    );
}

export default CardDisplay