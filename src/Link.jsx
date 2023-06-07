import { BUTTONS, EVENTS } from "./const"

// eslint-disable-next-line react-refresh/only-export-components
export function navigate (href) {
    window.history.pushState({}, '', href)
    // crear evento personalizado
    const navigationEvent = new Event(EVENTS.PUSHSTATE)
    window.dispatchEvent(navigationEvent)
  }

// eslint-disable-next-line react/prop-types
export function Link ({ target, to, ...props }) {
    const handleCLlick = (event) => {

      const isMainEvent = event.button === BUTTONS.primary // primary click
      const isModifiedEvent = event.metaKwy || event.altKey || event.ctrlKey || event.shiftKey

      const isManageeableEvent = target === undefined || target === '_self'

      if (isMainEvent && isManageeableEvent && !isModifiedEvent) {
        event.preventDefault()
        navigate(to) // navegacion SPA 
      } 

    }

    return <a onClick={handleCLlick} href={to} target={target} {...props}/>
}