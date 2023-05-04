import React from "react";
import uniqid from "uniqid";
import { useState} from "react";
import eldorado from '../images/eldorado.jpeg'
import gobbo from '../images/gobbo.jpg'
import hercules from '../images/hercules.webp'
import mulan from '../images/mulan.jpg'
import olaf from '../images/olaf.jpeg'
import peterpan from '../images/peterpan.jpg'
import robin from '../images/robin.jpg'
import simba from '../images/simba.webp'
import spirit from '../images/spirit.jpg'
import tarzan from '../images/tarzan.jpg'

const cardArray = [
    {
      text: 1,
      id: uniqid(),
      pick: false,
      image: eldorado
    },
    {
      text: 2,
      id: uniqid(),
      pick: false,
      image: gobbo
    },
    {
      text: 3,
      id: uniqid(),
      pick: false,
      image: hercules
    },
    {
      text: 4,
      id: uniqid(),
      pick: false,
      image: mulan
    },
    {
      text: 5,
      id: uniqid(),
      pick: false,
      image: olaf
    },
    {
      text: 6,
      id: uniqid(),
      pick: false,
      image: peterpan
    },
    {
      text: 7,
      id: uniqid(),
      pick: false,
      image: robin
    },
    {
      text: 8,
      id: uniqid(),
      pick: false,
      image: simba
    },
    {
      text: 9,
      id: uniqid(),
      pick: false,
      image: spirit
    },
    {
      text: 10,
      id: uniqid(),
      pick: false,
      image: tarzan
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
        <div className="card-container">
            {cards.map((card) => {
            return <div className="card" key={card.id}>
                    <img src={card.image} alt='card-img' onClick={handleClick} id={card.text}></img>
                   </div>;
             })}
        </div>
    );
}

export default CardDisplay