import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../Pages/Home';
import Team from '../Pages/Team';
import Scorers from "../Pages/Scorers";
// import NavBar from "../components/NavBar";
import Header from '../Components/Header';
import GameScores from "../Pages/GameScores"
import Competition from '../Pages/Competition';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/competition/:id" component={Competition} />
          <Route path="/scorers/:id" component={Scorers} />
          <Route path="/team/:id" component={Team} />
          <Route path="/livescores" component={GameScores} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
