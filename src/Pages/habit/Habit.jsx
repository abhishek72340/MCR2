import React from 'react';
import './Habit.css';
import {Link} from 'react-router-dom'
import Module from '../../module/Module';
import {data} from '../../DB.jsx'
export default function Habit() {
  
  return (
    <div>
      <Module/>
      {
        data.map((item)=>{
          return(
            <div key={item.uuid} >
              {/* <img src={item.thumbnail} alt="img" /> */}

              <h1 id='title'>{item.title}</h1>
              <h2>{item.reading}</h2>
              <Link to={`/single/${item.title}`}><button>about</button></Link>
              </div>
          )
        })
      }
   
    </div>
  )
}
