import './App.css'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage.jsx'
import BattleshipPage from './components/BattleshipPage/BattleshipPage.jsx'
import NationalParkPage from './components/NationalParkPage/NationalParkPage.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/battleship' element={<BattleshipPage />} />
        <Route path='/nptp' element={<NationalParkPage />} />
      </Routes>
    </>
  )
}

export default App
