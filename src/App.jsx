import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage.jsx'
import BattleshipPage from './components/BattleshipPage/BattleshipPage.jsx'
import NationalParkPage from './components/NationalParkPage/NationalParkPage.jsx'

function App() {

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
