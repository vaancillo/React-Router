/* eslint-disable react/prop-types */
import { useEffect } from 'react'

export default function SearchPage ({routeParams}) {
    useEffect(() => {
        document.title = `Has buscado ${routeParams.query}`
    },[routeParams.query])

    return (
         <h1>has buscado {routeParams.query}</h1> 
    )
}