import React from "../../node_modules/react";
import Bundesliga from "../Images/bundesliga.png";
import Eredivisie from "../Images/eredivisie.png";
import LaLiga from "../Images/la-liga.png";
import Ligue1 from "../Images/ligue-1.png";
import PremierLeague from "../Images/premier-league.png";
import SerieA from "../Images/serie-a.png";
import LigaNos from "../Images/liga-nos.png";
import Brazil from "../Images/brazil-league.png";


const LeagueInfo = (props) => {
    let imgSrc;
    switch (props.leagueCaption) {

        case "Bundesliga":
            imgSrc = Bundesliga;
            break;

        case "Eredivisie":
            imgSrc = Eredivisie;
            break;

        case "Primera Division":
            imgSrc = LaLiga;
            break;

        case "Ligue 1":
            imgSrc = Ligue1;
            break;

        case "Premier League":
            imgSrc = PremierLeague;
            break;

        case "Serie A":
            imgSrc = SerieA;
            break;

        case "Liga NOS":
            imgSrc = LigaNos;
            break;

        case "Brazil Serie A":
            imgSrc = Brazil;
            break;

        default:
            imgSrc = PremierLeague;
            break;
    }

    return (
        <div className="league-info">
            <img src={imgSrc} alt="" />
        </div>
    );
};

export default LeagueInfo;