import './App.scss';
import Navigation from './components/Nav/Nav';
import LandingPage from './LandingPage'
import Footer from './components/Footer/Footer';
import Careers from './components/Careers/Careers'
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
        <Router>
        <Navigation />
          <Switch>
            <Route exact path='/' component={LandingPage} />  
            <Route path='/careers' component={Careers} />  
          </Switch>
          <Footer />
        </Router>
     
    </div>
  );
}

export default App;
