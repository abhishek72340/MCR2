import { createContext, useContext, useState } from 'react';
import { v4 as uuid } from 'uuid';
const habitContext = createContext();

const HabitProvider = ({ children }) => {
    const [habits, setHabits] = useState([])
    const [habit, setHabit] = useState({

       
        thumbnail: "",
        title: "",
        start: "",
        repeat: "",
        
       
        goal: ""


    });
    const addHabit = (habit) => {
        setHabits(prevState => [...prevState, { id: uuid(), ...habit }])
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setHabit(prevState => ({ ...prevState, [name]: value }))
    };
    const handleSubmit = (e) => {
        e.preventDefault()
        addHabit(habit);
        onclose(true)
    }
    return (

        <habitContext.Provider value={{ habits, habit, setHabit, addHabit, handleSubmit, handleChange }}>
            {children}
        </habitContext.Provider>

    )
}
const useHabit = () => useContext(habitContext);
export { useHabit, HabitProvider }