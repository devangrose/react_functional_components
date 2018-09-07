import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Contact from './Contact';
import Home from './Home';
import Projects from './Projects';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <nav>
              <Link to="/">Home</Link>{' '}
              <Link to="/projects">Projects</Link>{' '}
              <Link to="/contactme">Contact Me</Link>{' '}
              <Link to="/hjasgd">Stuff</Link>{' '}
            </nav>
            <Route exact path="/" component={Home} />
            <Route path="/projects" component={Projects} />
            <Route path="/contactme" component={
              () => (<Contact name="Brandi Butler" />)
            } />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
