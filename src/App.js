import React from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './components/pages/Home'
import Services from './components/pages/Services'
import Products from './components/pages/Products'
import SignUp from './components/pages/SignUp'
import SignIn from './components/pages/SignIn'
import './App.css';



function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/services" exact component={Services}/>
            <Route path="/products" exact component={Products}/>
            <Route path="/sign-up" exact component={SignUp}/>
            <Route path="/sign-in" exact component={SignIn}/>
          </Switch>
      </Router>
    </>
  );
}

export default App;
