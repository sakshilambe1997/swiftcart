import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <h1>hello</h1>
    </>
  )
}

export default App
