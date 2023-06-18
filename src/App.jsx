import React from 'react'
import {Route,Routes} from 'react-router-dom';
import Habit from './Pages/habit/Habit';
import Single from './Pages/single/Single';


export default function App() {
  return (
    <div>
<Routes>
<Route path='/' element={<Habit/>}/>
<Route path='/single/:id' element={<Single/>}/>

</Routes>

    </div>
  )
}
