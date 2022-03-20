import "./App.css";
import "./components/Signup";
import Reservation from './components/Reservation'
// import {useState} from 'react';
// import Footer from './components/Footer';
import Preference from './components/prefrences'
import LandingPage from "./components/LandingPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";
import Signup from "./components/Signup";
// import axios from "axios";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <LandingPage />
          </Route>
          <Route path="/prefrences" exact >
        <Preference />
      </Route>
      <Route path="/reservation">
        <Reservation />
      </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <LoginForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
