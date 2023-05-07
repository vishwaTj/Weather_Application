import React, { useState, useEffect } from 'react';
import WeatherCard from './WeatherCard';
import "./index.css";

const App = () => {
  
//    useState variables used /////////////////////////////////////////////////////////////////////

//state variable to check valid city name 
    const [filter,setfilter] = useState(false);

// state variable to store the city name for search through API    
    const [city,setCity] = useState('');

//state variable to store the unit celsius or farenheit    
    const [unit,setUnit] = useState("Celsius");

//state vvariables to store the latitude and longitude of the coordinates    
    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
    const [curr,setCurr] = useState(false);

//state variable to set the weather with required weather info to be displayed in cards    
    const [weatherF,setweatherf] = useState({
        name:"",
        list:[]
    });





//   functions //////////////////////////////////////////////////////////////////////////////////////  

//   function to handle the input text in the search bar /////////////  
    const handleChange = (e)=>{
        setCity(e.target.value);
    }


// used for finding out the Geolocation of current place ////////////    
    useEffect(() => {
        const fetchData = async () => {
            let temperature_unit = "metric";
        if(unit === "Celsius"){
            temperature_unit = "metric";
        }else{
            temperature_unit = "imperial";
        }
          navigator.geolocation.getCurrentPosition(function(position) {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
            console.log(lat)
            console.log(long);
          });
    
          const result=await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=1497d43435982615f1f9dccba511e522&units=${temperature_unit}`)
          const output = await result.json();
            console.log(output);
            setweatherf({
                name:output.city.name,
                list:output.list
            });
        }
        fetchData();
      }, [lat,long,curr])


// function to change the unit of temperature and re render the web page //////////////////
    const unitChange = ()=>{
        if(unit === "Celsius"){
          setUnit("Farenhiet");}
        else{
            setUnit("Celsius");
        }  
        fetchweather(city);
    }

// function to set the temperature of the current location
   const setGeoLocation = ()=>{
     setCurr(!curr);
   } 

// function to fetch the weather from the weather API /////////////////    
    const fetchweather = async(city)=>{
        let temperature_unit = "imperial";
        if(unit === "Celsius"){
            temperature_unit = "metric";
        }else{
            temperature_unit = "imperial";
        }
        console.log(temperature_unit);
        const result = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=1497d43435982615f1f9dccba511e522&units=${temperature_unit}`);
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


// function to handle the formSubmit /////////////
    const handleSubmit=(e)=>{
        e.preventDefault(); 
        fetchweather(city);
    }


///////////////////////////////////////////// JSX part ////////////////////////////////////////////    

  return (
    <div className='Body'>
     {/* ************** input section of the App ************* */}
      <div className='Input'>
        <h1>Weather App</h1>
        <div>
            <button className='Temp-change' onClick={unitChange}>{unit}</button>
            <button className='Location' onClick={setGeoLocation}>Current Location</button>
        </div>
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

      {/* ************* weather card section of the webpage  ****************** */}
      <div style={{"textAlign":"center","marginTop":"20px"}}>
        {filter ? (<WeatherCard weatherArray={weatherF} unit={unit} />):(<h1>Please Enter a valid city name</h1>)}
      </div>
    </div>
  )
}

export default App