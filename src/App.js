import './App.scss';
import Navigation from './components/Nav/Nav';
import LandingPage from './LandingPage'
import Footer from './components/Footer/Footer';
import Careers from './components/Careers/Careers'
import Resources from './components/Resources/Resources';
import OurTeam from './components/OurTeam/OurTeam';
import CartSolution from './components/CartSolution/CartSolution';
import OurService from './components/OurService/OurService';
import Job from './components/Careers/Job';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Router>
        <Navigation />
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path='/careers' component={Careers} />
          <Route path='/job' component={Job} />
          <Route path='/resources' component={Resources} />
          <Route path='/ourteam' component={OurTeam} />
          <Route path='/cartsolution' component={CartSolution} />
          <Route path='/ourservice' component={OurService} />
        </Switch>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
