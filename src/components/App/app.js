import "./style.css";
import { Route } from 'react-router-dom';
import React, { Component } from "react";
// import Header from "./components/Header";
// import Wrapper from "./components/Wrapper";
import SelectLeague from "../SelectLeague/index"

class App extends Component {
    render() {
        return (
            <div className="App">
                <Route exact path="/league-selector" Component={SelectLeague} />
            </div>
        );
    }
}
export default App;