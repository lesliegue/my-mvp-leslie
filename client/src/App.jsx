import { useEffect, useState } from 'react'
import './App.css'

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

  return (
    <>
    <div className='week-layout'>
      <div>
        <h2>MONDAY</h2>
          <ul>
            {allGoals.map((e, i)=> 
              ((e.dayofweek === "monday") && (
              <li key = {e.id}>{e.goal}</li>
              )
            ))}
          </ul>
      </div>

      <div>
        <h2>TUESDAY</h2>
          <ul>
            {allGoals.map((e, i)=> 
              ((e.dayofweek === "tuesday") && (
              <li key = {e.id}>{e.goal}</li>
              )
            ))}
          </ul>
      </div>

      <div>
        <h2>WEDNESDAY</h2>
          <ul>
            {allGoals.map((e, i)=> 
              ((e.dayofweek === "wednesday") && (
              <li key = {e.id}>{e.goal}</li>
              )
            ))}
          </ul>
      </div>
      
      <div>
        <h2>THURSDAY</h2>
          <ul>
            {allGoals.map((e, i)=> 
              ((e.dayofweek === "thursday") && (
              <li key = {e.id}>{e.goal}</li>
              )
            ))}
          </ul>
      </div>

      <div>
        <h2>FRIDAY</h2>
          <ul>
            {allGoals.map((e, i)=> 
              ((e.dayofweek === "friday") && (
              <li key = {e.id}>{e.goal}</li>
              )
            ))}
          </ul>
      </div>

      <div>
        <h2>SATURDAY</h2>
          <ul>
            {allGoals.map((e, i)=> 
              ((e.dayofweek === "saturday") && (
              <li key = {e.id}>{e.goal}</li>
              )
            ))}
          </ul>
      </div>

      <div>
        <h2>SUNDAY</h2>
          <ul>
            {allGoals.map((e, i)=> 
              ((e.dayofweek === "sunday") && (
              <li key = {e.id}>{e.goal}</li>
              )
            ))}
          </ul>
      </div>
    </div>

    </>
  )
}

export default App
