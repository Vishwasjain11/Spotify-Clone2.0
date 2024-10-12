import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import PlayerContextProvider from './context/PlayerContext.jsx'
import UnderContextProvider from './context/OutsideContext.jsx'
createRoot(document.getElementById('root')).render(

  <React.StrictMode>
     <BrowserRouter>
    <PlayerContextProvider>
      <UnderContextProvider>
          <App />
      </UnderContextProvider>
        
        </PlayerContextProvider>
      </BrowserRouter>
  </React.StrictMode>,
)
