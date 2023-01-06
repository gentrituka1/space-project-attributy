import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import MissionDetails from './components/MissionDetails'

function App() {
  

  return (
    <div className="App">
      
    <Routes>
      <Route index element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path='/missiondetails' element={<MissionDetails />} />
    </Routes>

    </div>
  )
}

export default App
