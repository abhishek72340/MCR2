import {createContext, useContext} from 'react';

const habitContext =createContext();

const HabitProvider =({children})=>{

    return(
      
<habitContext.Provider>
    {children}
</habitContext.Provider>

    )
}
const useHabit=()=>useContext(habitContext);
export{useHabit,HabitProvider}