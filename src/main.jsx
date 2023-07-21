import React from 'react'

import ReactDOM from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";
import App from './App.jsx'
import {HabitProvider} from "./context/habbitContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
          <HabitProvider>
              <App />
          </HabitProvider>
      </BrowserRouter>
  </React.StrictMode>,
)
