import React from 'react';
import './Habit.css';
import { useHabit } from '../../Context/habit-context';
import { Link } from 'react-router-dom'
import Module from '../../module/Module';
import { data } from '../../DB.jsx'
export default function Habit() {
  const {habits,habit,setHabit,addHabit,handleSubmit,handleChange}=useHabit();

  return (
    <div>

      <div><Module /></div>
      
      {
habits.map((form)=>{
  return(
    <div id='submit-data'>
      {form.name}
    </div>
  )
})
      }
      {
        data.map((item) => {
          return (
            <div key={item.uuid} id='exercise-data' >
              <Link to={`/single/${item.title}`} id='images'> <img src={item.thumbnail} alt="img" /></Link>
              <h1 id='title'>{item.title}</h1>
            </div>
          )
        })
      }

    </div>
  )
}
