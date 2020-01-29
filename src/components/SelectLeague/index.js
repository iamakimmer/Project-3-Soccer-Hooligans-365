import "./style.css";
import React from "react";
import { leagues } from "../../league-codes/index"

const SelectLeague = props => {
    return (
        <React.Fragment>
            <h2>Select the league of your choice for more information</h2>
            <div className="league-select">
                {leagues.map(league => (
                    <div
                        className="league-cards-container"
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
}

export default SelectLeague;