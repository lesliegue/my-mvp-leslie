import React, { act } from 'react'
import { useState } from 'react'
import { Info, DateTime, Interval } from "luxon";
import "./MonthlyCalendar.css"

const MonthlyCalendar = ({activities}) => {
    const today = DateTime.local();
    const [activeDay, setActiveDay] = useState(null);
    const [firstDayOfActiveMonth, setFirstDayOfActiveMonth] = useState(today.startOf('month'));
    const activeDayActivities = activities[activeDay?.toISODate()] ?? [];
    const weekDays = Info.weekdays('short');
    const daysOfMonth = Interval.fromDateTimes(firstDayOfActiveMonth.startOf('week'), firstDayOfActiveMonth.endOf('month').endOf('week'))
    .splitBy({day: 1})
    .map((day) => day.start);
    console.log(daysOfMonth);
 
return (
    <div className='calendar-container'>
      <div className='calendar'>
        <div className='calendar-headline'>
          <div className='calendar-headline-month'>
            {firstDayOfActiveMonth.year}
          </div>
          <div className='calendar-headline-controls'>
            <div className='calendar-headline-control'>«</div>
            <div className='calendar-headline-control-today'>Today</div>
            <div className='calendar-headline-control'>»</div>
          </div>
          <div className='calendar-weeks-grid'>
            {weekDays.map((weekDay, weekDayIndex) => (
              <div key={weekDayIndex} className='calendar-weeks-grid-cell'>{weekDay}
              </div>
            ))}
          </div>
          <div className='calendar-grid'>
           {daysOfMonth.map((dayOfMonth, dayOfMonthIndex) => (
            <div key={dayOfMonthIndex} className='calendar-grid-cell' onClick={() => setActiveDay(dayOfMonth)}
            >
              {dayOfMonth.day}
            </div>
           ))} 
          </div>
        </div>
        <div className='schedule'>
          <div className='schedule-headline'>
            {activeDay === null && <div>Please select a day</div>}
            {activeDay && <div>{activeDay.toLocaleString(DateTime.DATE_MED)}</div>}
          </div>
          <div>
            {activeDay && activeDayActivities.length === 0 && (<div>No planned activities today</div>)}
            {activeDay && activeDayActivities.length > 0 && (
              <>
              {activeDayActivities.map((activity, activityIndex) => (
                <div key={activityIndex}>{activity}</div>
              ))}
            </>
            )}
          </div>
        </div>
      </div>
    </div>
)}

export default MonthlyCalendar