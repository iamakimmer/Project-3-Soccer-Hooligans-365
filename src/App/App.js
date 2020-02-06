import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from '../Pages/Home';
import Team from '../Pages/Team';
import Scorers from "../Pages/Scorers";
import Fixtures from "../Pages/Fixtures";
// import NavBar from "../components/NavBar";
import Header from '../Components/Header';
import Competition from '../Pages/Competition';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/about" component={Competition} />
        <Route path="/competition/:id" component={Competition} />
        <Route path="/competition/:id/fixtures" component={Fixtures} />
        <Route path="/competition/:id/scorers" component={Scorers} />
        <Route path="/team/:id" component={Team} />
      </div>
    </Router>
  );
}

export default App;
