import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LagnaPatrika from './pages/LagnaPatrika'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LagnaPatrika/>
    </>
  )
}

export default App
