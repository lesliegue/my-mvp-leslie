import { useEffect, useState } from 'react'
import Form from "./components/Form";
import Score from "./components/Score";
import Rewards from "./components/Rewards";
import './App.css';


function App() {
  const [allGoals, setallGoals] = useState([]);
  

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
    console.log(newGoal)
    // setallGoals((state) => [...state, newGoal]);
    fetch("/api/goals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({newGoal})
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      setallGoals(data)
    })
  }

    const handleClick = (e) => {
      fetch("/api/goals", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({e})
      })
      .then((response) => response.json())
      .then((data) => {
        setallGoals(data)
      })
    }
   
  

  return (
    <>
    <div className ='score-component'>
    <Score/>
    </div>
    <Form addGoal={(newGoal) => handleAddGoal(newGoal)}/>
    
    <div className='week-layout'>
      <div>
        <h2>MONDAY</h2>
          <ul>
            {allGoals.map((e, i)=> 
              ((e.dayofweek === "monday") && (
              <li key = {e.id}
              className={!e.completed ? "not-done" : "done"}
              onClick = {() => handleClick(e)}
              >{e.goal}</li>
              
              )
            ))}
          </ul>
      </div>

      <div>
        <h2>TUESDAY</h2>
          <ul>
            {allGoals.map((e, i)=> 
              ((e.dayofweek === "tuesday") && (
              <li key = {e.id}
              className={!e.completed ? "not-done" : "done"}
              onClick = {() => handleClick(e)}
              >{e.goal}</li>
              )
            ))}
          </ul>
      </div>

      <div>
        <h2>WEDNESDAY</h2>
          <ul>
            {allGoals.map((e, i)=> 
              ((e.dayofweek === "wednesday") && (
              <li key = {e.id}
              className={!e.completed ? "not-done" : "done"}
              onClick = {() => handleClick(e)}
              >{e.goal}</li>
              )
            ))}
          </ul>
      </div>
      
      <div>
        <h2>THURSDAY</h2>
          <ul>
            {allGoals.map((e, i)=> 
              ((e.dayofweek === "thursday") && (
              <li key = {e.id}
              className={!e.completed ? "not-done" : "done"}
              onClick = {() => handleClick(e)}
              >{e.goal}</li>
              )
            ))}
          </ul>
      </div>

      <div>
        <h2>FRIDAY</h2>
          <ul>
            {allGoals.map((e, i)=> 
              ((e.dayofweek === "friday") && (
              <li key = {e.id}
              className={!e.completed ? "not-done" : "done"}
              onClick = {() => handleClick(e)}
              >{e.goal}</li>
              )
            ))}
          </ul>
      </div>

      <div>
        <h2>SATURDAY</h2>
          <ul>
            {allGoals.map((e, i)=> 
              ((e.dayofweek === "saturday") && (
              <li key = {e.id}
              className={!e.completed ? "not-done" : "done"}
              onClick = {() => handleClick(e)}
              >{e.goal}</li>
              )
            ))}
          </ul>
      </div>

      <div>
        <h2>SUNDAY</h2>
          <ul>
            {allGoals.map((e, i)=> 
              ((e.dayofweek === "sunday") && (
              <li key = {e.id}
              className={!e.completed ? "not-done" : "done"}
              onClick = {() => handleClick(e)}
              >{e.goal}</li>
              )
            ))}
          </ul>
      </div>
    </div>
    <div>
      <Rewards/>
    </div>

    </>
  )
}

export default App
