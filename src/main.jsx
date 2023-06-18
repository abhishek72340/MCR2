import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HabitProvider } from './Context/habit-context.jsx';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <HabitProvider>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </HabitProvider>
    </BrowserRouter>
  </React.StrictMode>
)
