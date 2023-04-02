import React from 'react';
import Clouds from "./images/cloudy.jpg";
import Rain from "./images/rainy.jpg";
import Clear from "./images/clear.jpg";
import sunny from "./images/sunny.jpg";
import Snow from "./images/Snow.jpg";

const Card = ({day,unit}) => {

   // taking the date out to detect the weekday 
    const d = new Date(day.dt_txt);
    let weekday = d.getDay();
    let WeekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

   // varaible object set to call the images according to the day  
    const weatherImages={
        Clouds,
        Rain,
        Clear,
        sunny,
        Snow
    }

  return (
    // The weather card part of the application //////////////////// 
    <div className='day-card'>
        <img className='image' alt="weather" src={weatherImages[day.weather[0].main]}/>
        <h3>{WeekDays[weekday]}</h3>
        <h5>{day.dt_txt}</h5>
        <h5>Status:- {day.weather[0].main}</h5>
        <p>Temp: {day.main.temp }{(unit==='Celsius'? "℃":"℉" )}</p>
        <p>Min: {day.main.temp_min}{(unit==='Celsius'? "℃":"℉" )}</p>
        <p>Max: {day.main.temp_max}{(unit==='Celsius'? "℃":"℉" )}</p>
    </div>
  )
}

export default Card;