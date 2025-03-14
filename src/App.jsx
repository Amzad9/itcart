import './App.scss';
import Navigation from './components/Nav/Nav';
import LandingPage from './LandingPage';
import Footer from './components/Footer/Footer';
import Careers from './components/Careers/Careers';
import Resources from './components/Resources/Resources';
import OurTeam from './components/OurTeam/OurTeam';
import CartSolution from './components/CartSolution/CartSolution';
import OurService from './components/OurService/OurService';
import Job from './components/Careers/Job';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' element={<LandingPage />} />  {/* Corrected: using `element` */}
          <Route path='/careers' element={<Careers />} />
          <Route path='/job' element={<Job />} />
          <Route path='/resources' element={<Resources />} />
          <Route path='/ourteam' element={<OurTeam />} />
          <Route path='/cartsolution' element={<CartSolution />} />
          <Route path='/ourservice' element={<OurService />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
