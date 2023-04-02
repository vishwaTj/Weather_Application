import React from 'react';
import Card from './Card';

const WeatherCard = ({weatherArray}) => {
  return (
    <div style={{"textAlign":"center","marginTop":"25px"}}>
        <h1>{weatherArray.name}</h1>
        <div className='box-wrap'>
            {weatherArray.list.map((elem,index)=>{
            return <div key={index}>  
                {(index===0 || index===8 || index===16 || index===24 || index===32) && (elem.dt_txt && <Card day={elem}/>)}
            </div>  
            })}
        </div>
    </div>
  )
}

export default WeatherCard;