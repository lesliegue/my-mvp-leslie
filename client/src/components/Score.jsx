import React, { useEffect, useState } from 'react';
import TopazImg from "./images/topaz.png"
import EmeraldImg from "./images/emerald.png"
import DiamondImg from "./images/diamond.png"
import "./Score.css"

function Score({score}) {





let renderedImage;
  if ( score >= 50 && score < 90) {
    renderedImage = TopazImg;
  } else if ( score >= 90 && score < 150) {
    renderedImage = EmeraldImg;
  } else if ( score >= 150) {
    renderedImage = DiamondImg;
  } else {
    renderedImage = null
  }



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
          {renderedImage && <img src={renderedImage}/>}
        </div>
    </div>
  )
}

export default Score