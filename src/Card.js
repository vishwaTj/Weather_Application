import React from 'react';
import Clouds from "./images/cloudy.jpg";
import Rain from "./images/rainy.jpg";
import Clear from "./images/clear.jpg";
import sunny from "./images/sunny.jpg";
import Snow from "./images/Snow.jpg";

const Card = ({day}) => {
    const d = new Date(day.dt_txt);
    let weekday = d.getDay();
    let WeekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const weatherImages={
        Clouds,
        Rain,
        Clear,
        sunny,
        Snow
    }
  return (
    <div className='day-card'>
        <img className='image' alt="weather" src={weatherImages[day.weather[0].main]}/>
        <h3>{WeekDays[weekday]}</h3>
        <h5>{day.dt_txt}</h5>
        <h5>Status:- {day.weather[0].main}</h5>
        <p>Temp: {day.main.temp}</p>
        <p>Min: {day.main.temp_min}</p>
        <p>Max: {day.main.temp_max}</p>
    </div>
  )
}

export default Card;