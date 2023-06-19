import React from 'react'
import {Route,Routes} from 'react-router-dom';
import Habit from './Pages/habit/Habit';
import Navbar from './component/Navbar';
import Archieve from './Pages/archieve/Archieve';
import Trash from './Pages/trash/Trash';


export default function App() {
  return (
    <div>
      <Navbar/>
<Routes>
<Route path='/' element={<Habit/>}/>
<Route path='/archieve' element={<Archieve/>}/>
<Route path='/trash' element={<Trash/>}/>

</Routes>

    </div>
  )
}
