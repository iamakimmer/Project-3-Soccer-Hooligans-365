import React from "react";
import "./style.css";
import { leagues } from "../../league-codes/index"

const SelectLeague = props => (
    <React.Fragment>
        <h2>Select the league & See the details</h2>
        <div className="league-select">
            {leagues.map(league => (
                <div
                    className="league-card-container"
                    key={league.id}
                    onClick={() => props.history.push(`/league/${league.code}`)}
                >
                    <div className="league-img">
                        <img src={league.src} alt="" />
                    </div>
                    <div className="league-name">{league.name}</div>
                </div>
            ))}
        </div>
    </React.Fragment>
);

export default SelectLeague;