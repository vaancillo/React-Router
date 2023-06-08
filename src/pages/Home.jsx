import { Link } from '../Link.jsx'

export default function HomePage () {
    return (
      <>
      <h1>Home</h1>
      <img style={{ width: '500px', height: '300px'}} src='https://res.cloudinary.com/practicaldev/image/fetch/s--rivLfdSN--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gkgxaoegocynro97ipsz.png' alt='React Router logo' />
      <p>Esta es una pagina de ejemplo para crear un React Router desde cero.</p>
      <Link to='/about'>Ir a Sobre nosotros</Link>
      </>
    )
  }