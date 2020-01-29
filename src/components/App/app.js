import "./style.css";
import { Route } from 'react-router-dom';
import React, { Component } from "react";
// import Header from "./components/Header";
// import Wrapper from "./components/Wrapper";
import SelectLeague from "../SelectLeague/index"
import LeagueDetails from "../LeagueDetails/LeagueDetails";
import BaseService from "../../api/BaseService";
import SoccerProvider from "../../api/SoccerService";

class App extends Component {
    render() {
        return (
            <div className="App">
                <SoccerProvider>
                    <Route exact path="/league-selector" Component={SelectLeague} />
                    <BaseService.Consumer>
                        {service => (
                            <React.Fragment>
                                <Route
                                    path="/league"
                                    render={props => (
                                        <LeagueDetails services={service} {...props} />
                                    )}
                                />
                            </React.Fragment>
                        )}
                    </BaseService.Consumer>
                </SoccerProvider>
            </div>
        );
    }
}
export default App;