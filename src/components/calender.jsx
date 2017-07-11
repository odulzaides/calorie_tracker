import React from 'react';
import $ from 'jquery';
import CalComponent from './cal_day.jsx';

const Calender = (props) => {
    const TrackedDays = props.days.map(day=>
       <CalComponent key={day.date} day={day} />
    );
    return (
        <ul>
            {TrackedDays}
        </ul>
    )
}
export default Calender;