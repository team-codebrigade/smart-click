import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Register from './components/Register/Register';


function App() {

  return (
    <Router>
      <Route path='/' exact>
        <Header />
        <Search />
        <About />
        <Contact />
      </Route>
      <Route path='/register' exact>
        <Register />
      </Route>
      <Footer />
    </Router>
  );
}

export default App;
