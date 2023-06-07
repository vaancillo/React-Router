import { useState, useEffect } from 'react'
import { EVENTS } from './const'
import { match } from 'path-to-regexp'

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
  
    let routeParams = {}

    const Page = routes.find(({ path }) => {
      if (path === currentPath) return  true
      
      // hemos usado path-tp-regexp
      // para detectar rutas dinamicas por ejemplo:
      // /search/:query <-- :query es una ruta dinamica
      const matcherUrl = match(path, { decode: decodeURIComponent})
      const matched = matcherUrl(currentPath)
      if (!matched) return false
      
      // guardar los parametros de la url  que eran dinamicos
      // y que hemos extraido con path-to-regexp
      // por ejemplo, si la ruta es /search/query:
      // matched.params.query === 'javascript
      routeParams = matched.params 
      return true

    })?.Component
  
    return Page 
    ? <Page routeParams={routeParams}/> 
    : <DefaultComponent routeParams={routeParams}/>
  }