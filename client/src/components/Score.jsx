import React, { useEffect, useState } from 'react';
import Topaz from "./images/topaz.png"
import Emerald from "./images/emerald.png"
import Diamond from "./images/diamond.png"
import "./Score.css"

function Score() {

const [score, setScore] = useState(0)

useEffect(() => {
  fetch("/api/goals/score")
  .then(res => res.json())
  .then(response => {
    // console.log(response)
    let rawScore = response.data[0].total
    let score = rawScore * 10

    setScore(score)
    console.log("Score Fetched")
  })
  .catch(error => {
    console.log(error)
  });
}, []);


  return (
    <div>
        <div  className='score-container'>
          <div>
        <h2>SCORE</h2>
        </div>
        <div  className='score'>
          <h2>{score}</h2>
        </div>
        </div>
        <div>
            <img src={Topaz} alt="Topaz" />
            <img src={Emerald} alt="Emerald" />
            <img src={Diamond} alt="Diamond" />
        </div>
    </div>
  )
}

export default Score