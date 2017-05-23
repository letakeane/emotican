import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { NavBar } from '../NavBar/NavBar';
import { Instructions } from '../Instructions/Instructions';
import { Play } from '../Play/Play';
import { Learn } from '../Learn/Learn';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <header>
            <h1>emot<span className='logo-i'>i</span>can</h1>
            <Route path='/' component={NavBar}/>
          </header>
            <Route exact path='/instructions' component={Instructions}/>
            <Route exact path='/' component={Play}/>
            <Route path='/learn' component={Learn} />
        </div>
      </Router>
    )
  }
}

export default App;
