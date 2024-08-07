import React, { useState } from 'react'

function Rewards() {

    const [newReward, setNewReward] = useState({
        reward : "",
        gemlevel : ""
    })

  //   const [Topaz, setTopaz] = useState({
  //     reward : "",
  //     gemlevel : ""
  // })

    const handleInputChange  = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        setNewReward((state) => ({
            ...state, 
            reward: value,
            gemlevel : name
        }))
    }

    // const handleTopaz = (event) => {
    //   setNewReward((state) => ({
    //     reward: event.target.value,
    //     gemlevel: "topaz"
    //   }))
    // }

    const handleRewardSubmit = (e) => {
        e.preventDefault();
        fetch("/api/rewards", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({newReward})
          })
          .then((response) => response.json())
          .then((data) => {
           console.log(data)
          })
    }

    

  return (
    <div>
        <div>
        <h3>ENTER YOUR REWARDS</h3>
        <form onSubmit= {handleRewardSubmit}>
            <label htmlFor="">TOPAZ</label>
            <input type="text"
            name = "topaz"
            value = {newReward.reward}
            onChange={(e) => handleInputChange(e)}
             />

               <label htmlFor="">EMERALD</label>
            <input type="text"
            name = "emerald"
            value = {newReward.reward}
            onChange={(e) => handleInputChange(e)}
             />

            <label htmlFor="">DIAMOND</label>
            <input type="text"
            name = "diamond"
            value = {newReward.reward}
            onChange={(e) => handleInputChange(e)}
             />
             <button>SUBMIT</button>
        </form>
        </div>
        <div>
           <h4>Unlocked Rewards Display Here</h4>
        </div>
    </div>
  )
}

export default Rewards
