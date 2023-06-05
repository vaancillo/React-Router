import { Link } from "./Link"

export default function Page404 () {
    return (
        <>
          <div>
            <h1>This is not fine 404</h1>
              <p>You are lost 404</p>
              <img src='https://midu.dev/images/this-is-fine-404.gif' alt='Gif del perro this is fine quemandose vivo' />
          </div>
        <p>aquí tienes volver a la home, ¡para que encuentres algo!</p>
        <Link to='/'>Volver a la home</Link>
        </>
    )

}