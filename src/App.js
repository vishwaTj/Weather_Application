import React, { useState } from 'react';

import "./index.css";

const App = () => {
    var arr = ["Cairo","Jaipur","Kolkata"];
  
    const [city,setCity] = useState('');

    const handleChange = (e)=>{
        setCity(e.target.value);
    }

    const fetchweather = async(city)=>{
        const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=44.3&lon=10.99&appid=1497d43435982615f1f9dccba511e522`);
        const output = await result.json();
        console.log(output);
    }
     
    const handleSubmit=(e)=>{
       e.preventDefault(); 
        if(arr.includes(city)){
          console.log("Hello");
          fetchweather(city);
        }
        else{
            console.log("Array not found " + city);
        }
    }

    console.log(city)

  return (
    <div className='Body'>
      <div className='Input'>
        <h1>Weather App</h1>
        <div className="input-block">
          <form onSubmit={handleSubmit}>  
            <input type="search" value={city} placeholder="Search" onChange={handleChange} />
             {city.length < 3 && 'City name must be longer than 2 letters'}
          </form> 
          <div className='search-icon'>
                <i className="fas fa-search"></i>
            </div>
        </div>
      </div>
    </div>
  )
}

export default App