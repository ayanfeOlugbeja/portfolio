import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Loader from './components/Loader';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const HeroSection = lazy(() => import('./pages/HeroSection'));

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <div className='App'>
          {/* Navbar remains present on all pages */}
          <Navbar />

          {/* Content Wrapper for page transitions */}
          <div className='content'>
            <Switch>
              <Route exact path='/' component={HeroSection} />
              <Route path='/about' component={About} />
              <Route path='/projects' component={Projects} />
              <Route path='/contact' component={Contact} />
            </Switch>
          </div>
        </div>
      </Router>
    </Suspense>
  );
};

export default App;
