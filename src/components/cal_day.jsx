import React from 'react';

const CalComponent = (props)=>(
   <li>
       <p>{props.day.date}</p>
       <p>{props.day.calories}</p>
   </li>
)
export default CalComponent;