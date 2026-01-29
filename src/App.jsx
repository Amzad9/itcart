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
import Hrms from './components/CartSolution/Hrms';
import Eservice from './components/CartSolution/Eservice';
import Mis from './components/CartSolution/Mis';
import Enterprise from './components/CartSolution/Enterprise';
import Web from './components/OurService/Web';
import ServiceApp from './components/OurService/ServiceApp';
import Business from './components/OurService/Business';
import Technology from './components/OurService/Technology';
import Blog from './components/Resources/Blog';
import CaseSudies from './components/Resources/CaseSudies';
import News from './components/Resources/News';
import HelpCenter from './components/Resources/HelpCenter';
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
          {/* <Route path='/cartsolution' element={<CartSolution />} /> */}
          <Route path='/ourservice' element={<OurService />} />
          {/* Solution Pages */}
          <Route path='/hrms' element={<Hrms />} />
          <Route path='/eservices' element={<Eservice />} />
          <Route path='/mis' element={<Mis />} />
          <Route path='/enterprise' element={<Enterprise />} />
          {/* Service Pages */}
          <Route path='/web-development' element={<Web />} />
          <Route path='/app-development' element={<ServiceApp />} />
          <Route path='/business-automation' element={<Business />} />
          <Route path='/technology-consulting' element={<Technology />} />
          {/* Resource Pages */}
          <Route path='/blog' element={<Blog />} />
          <Route path='/case-studies' element={<CaseSudies />} />
          <Route path='/news' element={<News />} />
          <Route path='/help-center' element={<HelpCenter />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
