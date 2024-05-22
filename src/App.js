import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Loader from './components/Loader'
import About from '././pages/About'
import Projects from '././pages/Projects'
import Contact from '././pages/Contact'
const HeroSection = lazy(() => import('././pages/HeroSection'))

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <div className='App'>
          <Navbar />
          <div className='content'>
            <Switch>
              <Route exact path='/'>
                <HeroSection />
              </Route>
              <Route path='/about'>
                <About />
              </Route>
              <Route path='/contact'>
                <Contact />
              </Route>
              <Route path='/projects'>
                <Projects />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </Suspense>
  )
}

export default App
