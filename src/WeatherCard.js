import React from 'react';
import Card from './Card';

const WeatherCard = ({weatherArray,unit}) => {
  console.log(weatherArray.unit);
  return (
    <div style={{"textAlign":"center","marginTop":"25px"}}>
        <h1>{weatherArray.name}</h1>
        <div className='box-wrap'>
          {/* ************* looping out all the 5 days in a map ***************   */}
            {weatherArray.list.map((elem,index)=>{
            return <div key={index}>  
                {(index===0 || index===8 || index===16 || index===24 || index===32) && (elem.dt_txt && <Card day={elem} unit={unit}/>)}
            </div>  
            })}
        </div>
    </div>
  )
}

export default WeatherCard;