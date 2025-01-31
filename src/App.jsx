import './App.css'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar.jsx'
import HomePage from './components/HomePage/HomePage.jsx'
import BattleshipPage from './components/BattleshipPage/BattleshipPage.jsx'
import NationalParkPage from './components/NationalParkPage/NationalParkPage.jsx'
import BrightMindPage from './components/BrightMindPage/BrightMindPage.jsx'
import GameCupidPage from './components/GameCupidPage/GameCupidPage.jsx'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/battleship' element={<BattleshipPage />} />
        <Route path='/nptp' element={<NationalParkPage />} />
        <Route path='/brightmind' element={<BrightMindPage />} />
        <Route path='/gamecupid' element={<GameCupidPage />} />
      </Routes>
    </>
  )
}

export default App
