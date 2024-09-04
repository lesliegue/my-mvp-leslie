import { useEffect, useState } from 'react'
import Form from "./components/Form";
import Score from "./components/Score";
import Rewards from "./components/Rewards";
import Calendar from "./components/Calendar";
import MonthlyCalendar from "./components/MonthlyCalendar";
import DateCalendarValue from "./components/DateCalendarValue";
import './App.css';


function App() {
  const [allGoals, setallGoals] = useState([]);

  const [score, setScore] = useState(0)
  const activities = {
    '2024-09-02': ['Drink Coffee', 'Learn React', 'Sleep'],
    '2024-09-05': ['Drink Coffee', 'Learn CSS', 'Sleep'],
  }
  

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
  

  // const handleDeleteGoal = (goalId) => {

  //   fetch("/api/goals/id", {
  //     method: "DELETE",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({goalId})
  //   })
  //   .then((response) => response.json())
  //   .then((data) => {
  //     setallGoals(data)
  //   })
  // }
}


  return (
    <>
      <header>
        <div className = 'score-component'>
          <Score score = {score}/>
        </div>
      </header>
      <h1>Gamified Goals</h1>
      <div className='component' id='add-goal-form'>
        <Form addGoal={(newGoal) => handleAddGoal(newGoal)}/>
      </div>
      <div className='component' id='calendar-score'>
        <Calendar score = {setScore} allGoals = {allGoals} setallGoals = {setallGoals}/>
        {/* <Button intent="danger" onClick={() => deleteUser(user.id)}>
                  Delete
                </Button> */}
        {/* <MonthlyCalendar activities={activities}/> */}
        <DateCalendarValue />
      </div>
    <div className='component' id='rewards'>
      <Rewards score = {score}/>

    </div>
    </>
  )
}

export default App
