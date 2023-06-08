/* eslint-disable react/prop-types */
import { useState, useEffect, Children } from 'react'
import { EVENTS } from './const'
import { match } from 'path-to-regexp'

export function Router ({ children, routes = [], defaultComponent: DefaultComponent = () => <h1>404</h1>}) {
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

    // añadir las Routes que vienen del children <Route /> component
    const routesFromChildren =  Children.map(children, ({ props, type  }) => {
      const { name } = type
      const isRoute = name === 'Route'

      return isRoute ? props : null
      // esto es lo mismo 
      // if (!isRoute) return null

      // return props 
    })

    const routesToUse = routes.concat(routesFromChildren)

    const Page = routesToUse.find(({ path }) => {
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