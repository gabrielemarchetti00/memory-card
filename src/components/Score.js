import { useEffect, useState } from "react";

const Score = (props) => {
    const {cards} = props
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        function addCurrent() {
            setCurrent(current + 1)
            console.log(cards)
        }
  
        document.querySelector(".card-img").addEventListener("click", addCurrent)
    })

    return (
        <div className="score">
            <div className="current-score">Current Score: {current} </div>
            <div className="best-score">Best Score: </div>
        </div>
    )
}

export default Score