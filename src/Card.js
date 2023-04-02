import React from 'react';

const Card = ({day}) => {
  return (
    <div className='day-card'>
        <image alt="weather image"/>
        <h5>{day.dt_txt}</h5>
        <p>Temp: {day.main.temp}</p>
        <p>Min: {day.main.temp_min}</p>
        <p>Max: {day.main.temp_max}</p>
    </div>
  )
}

export default Card