import React from 'react'
import {Route,Routes} from 'react-router-dom';
import Habit from './Pages/habit/Habit';
export default function App() {
  return (
    <div>
<Routes>
<Route path='/' element={<Habit/>}/>

</Routes>

    </div>
  )
}
