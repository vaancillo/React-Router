import { Link } from '../Link.jsx'

export default function AboutPage () {
    return (
      <>
      <h1>About</h1>
      <div>
      <img src='https://pbs.twimg.com/profile_images/1663771469678034949/3m8QJ3wr_400x400.jpg' alt='imagen floppa' />
      <p>Hola me llamo Jared y estoy creando un clon de React Router. </p>
      </div>
      <Link to='/'>Ir a home</Link>
      </>
    )
  }