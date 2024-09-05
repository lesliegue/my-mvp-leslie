import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { useEffect, useState } from 'react'
import "./DateCalendarValue.css"

export default function DateCalendarValue() {
  const [value, setValue] = React.useState(dayjs('2024-09-03'));
  const [tasks, setTasks] = useState([]);
  
  date =>
    adapter
      .format(date, "weekdayShort")
      .charAt(0)
      .toUpperCase()  

  const handleClick = (event) => {
    const day = event.$d.toString().split(' ')[0];
    setValue(event)
    const weekdays = {
      Mon: 'monday',
      Tue: 'tuesday',
      Wed: 'wednesday',
      Thu: 'thursday',
      Fri: 'friday',
    }
    
    fetch("/api/goals/day/"+weekdays[day], {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then((response) => response.json())
    .then((data) => {
      setTasks(data)
      console.log(data)
    })
  };

  const deleteTask = (id) => {
    fetch(`/api/goals`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id })
    })
    // Continue fetch request here
    
    .catch((error) => {
      console.log(`this is an error: ${error}`);
    })
    let newTasks = tasks.filter(task => task.id != id);
      setTasks(newTasks)
  };

/*
fetch request to the new endpoint with the day of the week in the url, 
create a state (before) for the tasks of that day
with the response of my fetch set the tasks for that day and then display
*/

  return (
    <div>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateCalendar', 'DateCalendar']}>
          <DateCalendar value={value} onChange={(e) => handleClick(e)} 
            />
            <ul>
              {tasks.map((task) => (
              <li key={task.id}>{task.goal}
                  <button className="delete-button" onClick={() => deleteTask(task.id)}>x</button>
              </li>       
                ))} 
              </ul>
      </DemoContainer>
    </LocalizationProvider>
    </div>
  );
}
