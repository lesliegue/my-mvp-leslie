import { useEffect, useState } from 'react'
import Form from "./components/Form";
import Score from "./components/Score";
import Rewards from "./components/Rewards";
import Calendar from "./components/Calendar";
import './App.css';


function App() {
  const [allGoals, setallGoals] = useState([]);

  const [score, setScore] = useState(0)
  

useEffect(() => {
  fetch("/api/goals/score")
  .then(res => res.json())
  .then(response => {
    let rawScore = response.data[0].total
    let score = rawScore * 10

    setScore(score)
    console.log("Score Fetched")
  })
  .catch(error => {
    console.log(error)
  });
}, [allGoals]);

  useEffect(() => {
    fetch("/api/goals")
    .then(res => res.json())
    .then(response => {
      setallGoals(response)
      console.log("Goals Fetched")
    })
    .catch(error => {
      console.log(error)
    });
  }, []);

  const handleAddGoal = (newGoal) => {

    fetch("/api/goals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({newGoal})
    })
    .then((response) => response.json())
    .then((data) => {
      setallGoals(data)
    })
  }


  return (
    <>
    <div className ='score-component'>
    <Score score = {score}/>
    </div>
    <Form addGoal={(newGoal) => handleAddGoal(newGoal)}/>
    <Calendar score = {setScore} allGoals = {allGoals} setallGoals = {setallGoals}/>
    <div>
      <Rewards score = {score}/>
    </div>

    </>
  )
}

export default App
