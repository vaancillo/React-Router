/* eslint-disable react/prop-types */
import { Link } from '../Link.jsx'

const i18n = {
  es: {
    title: 'Sobre nosotros',
    button: 'Ir a la Home',
    description: 'Hola me llamo Jared y estoy creando un clon de React Router.'
  },
  en: {
    title: 'About',
    button: 'Go to Home',
    description: 'Hi, my name is Jared and I am creating a React Router clone.'
  }
}

const useI18n = (lang) => {
  return i18n[lang] || i18n.en
}

export default function AboutPage ({ routeParams }) {
    const i18n = useI18n(routeParams.lang ?? 'es')
    return (
      <>
      <h1>{i18n.title}</h1>
      <div>
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Big_Floppa_and_Justin_2_%28cropped%29.jpg/528px-Big_Floppa_and_Justin_2_%28cropped%29.jpg' alt='Big floppa' />
      <p>{i18n.description}</p>
      </div>
      <Link to='/'>{i18n.button}</Link>
      </>
    )
  }