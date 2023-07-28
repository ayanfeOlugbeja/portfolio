import Navbar from '././components/Navbar';
import HeroSection from '././pages/HeroSection';
import About from '././pages/About';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Projects from '././pages/Projects';
import Contact from '././pages/Contact';

function App() {
  return (
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
  );
}

export default App;
