import './app.scss'
import Topbar from './components/topbar/Topbar'
import Intro from './components/intro/Intro'
import Portfolio from './components/portfolio/Portfolio'
import Works from './components/works/Works'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'

function App() {
  return (
    <div className='app'>
      <Topbar></Topbar>
      <div className='sections'>
        <Intro></Intro>
        <Portfolio />
        <Works></Works>
        <Testimonials></Testimonials>
        <Contact></Contact>
      </div>
    </div>
  )
}

export default App
