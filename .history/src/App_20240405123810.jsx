import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Exchange from './components/Exchange/Exchange'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Exchange/>
    </>
  )
}

export default App
