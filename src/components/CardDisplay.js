import uniqid from "uniqid";
import { useEffect, useState} from "react";
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

const CardDisplay = ({onQuery}) => {
    const [cards, setCards] = useState(cardArray)

    function handleClick(e) {
        setCards(cards.map(function(card) {
            if(card.text === Number(e.target.id)) {
                card.pick = true
            }
            return card
        }))
        onQuery(cards)
    }

    useEffect(() => {
      function shuffleCards(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        setCards(array)
      }

      document.querySelector(".card-img").addEventListener("click", shuffleCards(cards))
    })

    return (
        <div className="card-container">
            {cards.map((card) => {
            return <div className="card" key={card.id}>
                    <img className="card-img" src={card.image} alt='card-img' onClick={handleClick} id={card.text}></img>
                   </div>;
             })}
        </div>
    );
}

export default CardDisplay