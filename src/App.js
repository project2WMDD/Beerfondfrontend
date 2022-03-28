import './App.css';
import './components/Signup';
import Reservation from './components/Reservation';
// import {useState} from 'react';
// import Footer from './components/Footer';
import Preferences from './components/Preferences';
import LandingPage from './pages/LandingPage/LandingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm';
import Signup from './pages/Signup/Signup';
import YourResults from './pages/YourResults/YourResults';
import Brewery from './pages/Brewery/Brewery';
import BeerInfo from './pages/BeerInfo/BeerInfo';
import { useGlobalContext } from './context/globalContext';
import NavNew from './components/NavNew';
// import axios from "axios";

function App() {
  let { user, isLoading, createUser } = useGlobalContext();
  return (
    <Router>
      <div>
        {user ? <NavNew /> : <Navbar />}
        <Routes>
          <Route path='/' element={<LandingPage />} exact />
          {/* <LandingPage />
          </Route> */}
          <Route path='/preferences' element={<Preferences />} exact />
          {/* <Preference />
          </Route> */}
          <Route path='/results' element={<YourResults />} exact />
          <Route path='/beers/:id' element={<BeerInfo />} exact />
          <Route path='/reservation' element={<Reservation />} />
          <Route path='/details/:id' element={<Brewery />} exact />
          {/* <Reservation />
          </Route> */}
          <Route path='/signup' element={<Signup />} />
          {/* <Signup />
          </Route> */}
          <Route path='/login' element={<LoginForm />} />
          {/* <LoginForm />
          </Route> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
