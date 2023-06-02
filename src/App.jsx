import { useEffect, useState } from 'react'
import { EVENTS } from './const.js'
import HomePage from './pages/Home.jsx'
import AboutPage from './pages/About.jsx'
import './App.css'

function App () {
  const [cuerrentPath, setCurrentPath]= useState(window.location.pathname)

  useEffect(() => {
    const onLocalionChange = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener(EVENTS.PUSHSTATE, onLocalionChange)
    window.addEventListener(EVENTS.POPSTATE, onLocalionChange)
  
    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocalionChange)
      window.removeEventListener(EVENTS.POPSTATE, onLocalionChange)
    }

  },[])

  return (
    <main>
      {cuerrentPath === '/' && <HomePage />}
      {cuerrentPath === '/about' && <AboutPage />}
    </main>
  )
}

export default App
