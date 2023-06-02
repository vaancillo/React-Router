import { EVENTS } from "./const"

export function navigate (href) {
    window.history.pushState({}, '', href)
    // crear evento personalizado
    const navigationEvent = new Event(EVENTS.PUSHSTATE)
    window.dispatchEvent(navigationEvent)
  }

export function Link ({ target, to, ...props }) {
    const handleCLlick = () => {
        navigate(to)
    }

    return <a onClick={handleCLlick} href={to} target={target} {...props}/>
}