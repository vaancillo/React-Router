import { BUTTONS, EVENTS } from "./const"

export function navigate (href) {
    window.history.pushState({}, '', href)
    // crear evento personalizado
    const navigationEvent = new Event(EVENTS.PUSHSTATE)
    window.dispatchEvent(navigationEvent)
  }

export function Link ({ target, to, ...props }) {
    const handleCLlick = (event) => {

      const isMainEvent = event.button === BUTTONS.primaryS// primary click
      const isModifiedEvent = event.metaKwy || event.altKey || event.ctrlKey || event.shiftKey

      const isManageeableEvent = target === undefined || target === '_self'

      if (isMainEvent && isManageeableEvent && !isModifiedEvent) {
        event.preventDefault()
        navigate(to) // navegacion SPA 
      }

    }

    return <a onClick={handleCLlick} href={to} target={target} {...props}/>
}