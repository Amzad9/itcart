import './App.scss';
import Navigation from './components/Nav/Nav';
import Header from './components/Header/Header';
import Client from './components/Client/Client';
import Video from './components/Video/Video';
import Service from './components/Service/Service';
import Solution from './components/Solution/Solution';
import Business from './components/Business/Business';
import PeopleSay from './components/PeopleSay/PeopleSay';
import Team from './components/Team/Team'
import ContactUs from './components/ContactUs/ContactUs';
import NewsLetter from './components/NewsLetter/NewsLetter'
import Footer from './components/Footer/Footer';
import Comparison from './components/Comparison/Comparison';
// import { BrowserRouter as Router, Switch , Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <Navigation />
       <Header />
       <Client />
       <Video />
       <Service />
       <Solution />
       <Business />
       <PeopleSay />
       <Comparison />
       <Team />
       <ContactUs />
       <NewsLetter />
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
