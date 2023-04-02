import React from 'react';
// import * as mdb from 'mdb-ui-kit';
import { Input } from 'mdb-ui-kit';
import "./index.css";

const App = () => {
    let arr = ["Cairo","Jaipur","Kolkata"];
  return (
    <div className='Body'>
      <div className='Input'>
        <h1>Weather App</h1>
        <div className="input-group rounded input-block">
            <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
            <span className="input-group-text border-0" id="search-addon">
                <i className="fas fa-search"></i>
            </span>
        </div>
      </div>
    </div>
  )
}

export default App