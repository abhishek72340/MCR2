import React from 'react';
import './Habit.css';
import { useHabit } from '../../Context/habit-context';
import { Link } from 'react-router-dom'
import Module from '../../module/Module';
import { data } from '../../DB.jsx'
export default function Habit() {
  const { habits } = useHabit();

  return (
    <div>
      <div id='exercise-data'>
        <div><Module /></div>
        {
          data.map((item) => {
            return (
              <div key={item.uuid}  >
                <div id='box'>
                  {item.name}<br />
                  {item.title}<br />
                  {item.start}<br />
                  {item.goal}<br />
                  {item.repeat}
                </div>

              </div>
            )
          })
        }


        <div id='add-item'>
          {
            habits.map((form) => {
              return (
                <div id='add-data'>
                  {form.title}<br />
                  {form.repeat}<br />
                  {form.goal}<br />
                  {form.start}<br />
                </div>
              )
            })
          }
        </div>
      </div>

    </div>
  )
}
