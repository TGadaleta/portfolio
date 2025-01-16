import './App.css'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App
