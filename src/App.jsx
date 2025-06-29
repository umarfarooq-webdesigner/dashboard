import { useState } from 'react'
import AllPageConnecter from './pages/allPageConnecter'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AllPageConnecter />
    </>

  )
}

export default App
