import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Wrapper from './components/Wrapper';
import Search from './pages/Search';
import Saved from './pages/Saved';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Hero />
          <Wrapper>
            <Search />
            <Route exact path = '/' compononet = {Search} />
            <Route exact path = '/saved' compononet = {Saved} />
          </Wrapper>
        </div>
      </Router>
    );
  }
}

export default App;
