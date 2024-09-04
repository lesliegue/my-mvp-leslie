import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

export default function DateCalendarValue() {
  const [value, setValue] = React.useState(dayjs('2024-09-03'));
  
  date =>
    adapter
      .format(date, "weekdayShort")
      .charAt(0)
      .toUpperCase()  

  const handleInput = (event) => {

    setValue(event)
    console.log(value)
    
  };

  return (
    <div>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateCalendar', 'DateCalendar']}>
      <DemoItem label="Controlled calendar">
          <DateCalendar value={value} onChange={(e) => handleInput(e)} 
            
            />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
    </div>
  );
}
