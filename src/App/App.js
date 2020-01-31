import React, { Component } from "react";
import "./App.css";
import Header from "../Components/Header";
import Button from "../Components/Button";
import Row from "../Components/Row";
import TableBody from "../Components/TableBody";
import LeagueInfo from "../Components/LeagueInfo";

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      leagueName: "Premier League",
      rows: [],
      leagueId: "PL",
      leagues: {
        "Premier League": "PL",
        "La Liga": "PD",
        "Eredivisie": "DED",
        "Ligue 1": "FL1",
        "Bundesliga": "BL1",
        "Serie A": "SA",
        "Liga NOS": "PPL",
        "Brazil Serie A": "BSA"
      },
      buttons: []
    }
    this.handleLeagueClick = this.handleLeagueClick.bind(this);
  }

  handleLeagueClick(e) {
    const newId = e.target.getAttribute("data-leagueid");
    this.setState({
      leagueId: newId
    }, () => { this.fetchData() });
  }

  fetchData() {
    const Token = "f500a2871e0e423d9fe1ba869f73155e",
      leagueId = this.state.leagueId,
      URL = "https://api.football-data.org/v2/competitions/" + leagueId + "/standings";

    fetch(URL, { headers: { "X-Auth-Token": Token } })
      .then((response) => response.json())
      .then((responseJson) => {
        const rows = [];
        responseJson.standings[0].table.map(
          (item, index) => {
            const { position, playedGames, won, draw, lost, goalsFor, goalsAgainst, goalDifference, points } = item;
            const {crestUrl, name} = item.team;
            
            return (
              rows.push(
                <Row key={index} position={position} crestURI={crestUrl} teamName={name} playedGames={playedGames} wins={won} draws={draw} losses={lost} goalsFor={goalsFor} goalsAgainst={goalsAgainst} goalDifference={goalDifference} points={points} />
              )
            )
          }
        )
        this.setState({
          leagueName: responseJson.competition.name,
          rows: rows
        })
      })
      .catch((error) => {
        console.error(error);
      });
  }

  componentDidMount() {
    this.fetchData();
    for (let key in this.state.leagues) {
      this.state.buttons.push(
        <Button handleClick={this.handleLeagueClick} key={this.state.leagues[key]} leagueId={this.state.leagues[key]} text={key} />
      )
    }
  }

  render() {
    return (
      <div className="App">
        <Header>
          {this.state.buttons}
        </Header>
        <div className="container">
          <LeagueInfo leagueCaption={this.state.leagueName} />
          <TableBody>
            {this.state.rows}
          </TableBody>
        </div>
      </div>
    );
  }
}

export default App;