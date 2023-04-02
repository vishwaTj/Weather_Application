import React, { useState } from 'react';
import WeatherCard from './WeatherCard';
import "./index.css";

const App = () => {
  
    const [filter,setfilter] = useState(false);
    const [city,setCity] = useState('');

    const [weatherF,setweatherf] = useState({
        name:"",
        list:[]
    });

    const handleChange = (e)=>{
        setCity(e.target.value);
    }

    const fetchweather = async(city)=>{
        const result = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=1497d43435982615f1f9dccba511e522`);
        const output = await result.json();
        console.log(output);
        if(output.message === 0){
            setfilter(true);
            setweatherf({
                name:output.city.name,
                list:output.list
            });
        }
    }

    const handleSubmit=(e)=>{
       e.preventDefault(); 
        console.log("Hello");
        fetchweather(city);
    }


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
      <div>
        {filter && <WeatherCard weatherArray={weatherF} />}
      </div>
    </div>
  )
}

export default App