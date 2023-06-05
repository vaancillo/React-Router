import { useState, useEffect } from 'react'
import { EVENTS } from './const'

// eslint-disable-next-line react/prop-types
export function Router ({ routes = [], defaultComponent: DefaultComponent = () => <h1>404</h1>}) {
    const [currentPath, setCurrentPath] = useState(window.location.pathname)
  
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
  
    const Page = routes.find(({ path }) => path === currentPath)?.component
  
    return Page ? <Page/> : <DefaultComponent/>
  }