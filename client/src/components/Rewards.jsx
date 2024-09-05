import React, { useEffect, useState } from 'react'
import "./Rewards.css"

function Rewards({score}) {

    const [rewards, setRewards] = useState([
      { reward : "", gemlevel : "topaz"},
      { reward : "", gemlevel: "emerald"},
      { reward : "", gemlevel : "diamond"}
  ])

    const [chosenRewards, setChosenRewards] = useState([
      { reward : "", gemlevel : "topaz"},
      { reward : "", gemlevel: "emerald"},
      { reward : "", gemlevel : "diamond"}
    ])


  const [rewardsSent, setRewardsSent] = useState(false)

  const [topazUnlocked, setTopazUnlocked] = useState(false);
  const [emeraldUnlocked, setEmeraldUnlocked] = useState(false);
  const [diamondUnlocked, setDiamondUnlocked] = useState(false);


    const handleInputChange  = (event) => {
      const value = event.target.value;
      const name = event.target.name;

      const indexMap = {
      topaz: 0,
      emerald: 1,
      diamond: 2,
      };

      const index = indexMap[name];

      const inputValues = [...rewards];
      inputValues[index] = {
        reward: value,
        gemlevel: name
      };

      setRewards(inputValues);
    }
    

    const handleRewardSubmit = (e) => {
        e.preventDefault();
        fetch("/api/rewards", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({rewards})
          })
          .then((response) => response.json())
          .then((data) => {
           setChosenRewards(data)
          })
          setRewards(([
            { reward : "", gemlevel : "topaz"},
            { reward : "", gemlevel: "emerald"},
            { reward : "", gemlevel : "diamond"}
        ]));
        setRewardsSent(true)
    }


    useEffect(() => {
      if (score >= 150) {
        setDiamondUnlocked(true);
        setEmeraldUnlocked(true);
        setTopazUnlocked(true);
      } else if (score >= 90) {
        setDiamondUnlocked(false);
        setEmeraldUnlocked(true);
        setTopazUnlocked(true);
      } else if (score >= 50) {
        setDiamondUnlocked(false);
        setEmeraldUnlocked(false);
        setTopazUnlocked(true);
      } else {
        setDiamondUnlocked(false);
        setEmeraldUnlocked(false);
        setTopazUnlocked(false);
      }
    }, [score]);


  return (
    <div>
        <div>
          <h3>ENTER YOUR REWARDS</h3>
        <form className="rewards-form" onSubmit= {handleRewardSubmit}>
            <label htmlFor="">TOPAZ</label>
            <input type="text"
            name = "topaz"
            value = {rewards[0].reward}
            onChange={(e) => handleInputChange(e)}
             />

               <label htmlFor="">EMERALD</label>
            <input type="text"
            name = "emerald"
            value = {rewards[1].reward}
            onChange={(e) => handleInputChange(e)}
             />

            <label htmlFor="">DIAMOND</label>
            <input type="text"
            name = "diamond"
            value = {rewards[2].reward}
            onChange={(e) => handleInputChange(e)}
             />

             <button className='principal-button'>SUBMIT</button>
        </form>
        {rewardsSent && <h2>Rewards added Successfully. Complete goals to increase your score.</h2> }
        </div>
        <div>
           <h4>Unlocked Rewards Display Here</h4>
            {topazUnlocked && (<h3 className='reward1'>You've earned {chosenRewards[0].reward} !</h3>)}
            {emeraldUnlocked && (<h2 className='reward2'>You've earned {chosenRewards[1].reward} !</h2>)}
            {diamondUnlocked && (<h1 className='reward3'>You've earned {chosenRewards[2].reward} !</h1>)}
        </div>
    </div>
  )
}

export default Rewards
