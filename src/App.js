import './App.scss';
import Navigation from './components/Nav/Nav';
import LandingPage from './LandingPage'
import Footer from './components/Footer/Footer';
// import { BrowserRouter as Router, Switch , Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <Navigation />
       <LandingPage />
       <Footer />
      {/* <Router>
        
         <Switch>
           <Route exact path='/' component={Home} />  
           <Route path='/about' component={About} />  
           <Route path='/service' component={Service} /> 
           <Route path='/blog' component={Blog} /> 
         </Switch>
      </Router> */}
    </div>
  );
}

export default App;
