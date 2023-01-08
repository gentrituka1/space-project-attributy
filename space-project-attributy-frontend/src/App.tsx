
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import MissionDetails from './components/MissionDetails'
import Header from './components/Header'

function App() {
  

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Navigate to="/missions" />} />
        <Route path="/missions" element={<Home />} />
        <Route path='/missions/:id' element={<MissionDetails />} />
      </Routes>

    </div>
  )
}

export default App
