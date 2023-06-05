import { Router } from './Router.jsx'
import HomePage from './pages/Home.jsx'
import AboutPage from './pages/About.jsx'
import './App.css'
import Page404 from './404.jsx'

const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/about',
    component: AboutPage
  }
]

function App () {

  return (
    <main>
      <Router  routes={routes} defaultComponent={Page404}/>
    </main>
  )
}

export default App
