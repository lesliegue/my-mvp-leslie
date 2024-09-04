import React from 'react'
import { useState } from 'react'
import "./Calendar.css"
import { Info, DateTime, Interval } from "luxon";

 function Calendar({setScore, allGoals, setallGoals}) {

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
    
    // const fullCalendar = () => {
    //   const today = DateTime.local();
    //   const [firstDayOfActiveMonth, setFirstDayOfActiveMonth] = useState(today.startOf('month'));
    //   const weekDays = Info.weekdays('short');
    //   const daysOfMonth = Interval.fromDateTimes(firstDayOfActiveMonth.startOf('week'), firstDayOfActiveMonth.endOf('month').endOf('week')
    //   .splitBy({day: 1})
    //   .map(day = day.start));
    //   console.log(daysOfMonth);
    
    // }
   
  return (
    <div>
      <h3>Tasks for this week!</h3>
        <div className='week-layout'>
          <div className='single-day' id='monday'>
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

          <div className='single-day' id='tuesday'>
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

          <div className='single-day' id='wednesday'>
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
          
          <div className='single-day' id='thursday'>
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

          <div className='single-day' id='friday'>
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

          <div className='single-day' id='saturday'>
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

          <div className='single-day' id='sunday'>
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
    </div>
  )
}

export default Calendar
