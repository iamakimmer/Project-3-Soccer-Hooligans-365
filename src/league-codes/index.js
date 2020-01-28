import logoPremierLeague from "../img/premier-league.png";
import logoBundesliga from "../img/bundesliga.png";
import logoLigue1 from "../img/ligue-1.png";
import logoSerieA from "../img/serie-a.png";
import logoLaLiga from "../img/la-liga.png";
import logoDutch from "../img/eredivisie.png";
import logoPortugal from "../img/liga-nos.png";
import logoBrazil from "../img/brazil-league.png";

export const leagues = [
    { id: 1, name: "Premier League", country: "England", src: logoPremierLeague, code: "PL" },
    { id: 2, name: "Bundesliga", country: "Germany", src: logoBundesliga, code: "BL1" },
    { id: 3, name: "Ligue 1", country: "France", src: logoLigue1, code: "FL1" },
    { id: 4, name: "Serie A", country: "Italy", src: logoSerieA, code: "SA" },
    { id: 5, name: "La Liga", country: "Spain", src: logoLaLiga, code: "PD" },
    { id: 6, name: "Eredivisie", country: "Netherlands", src: logoDutch, code: "DED" },
    { id: 7, name: "Liga NOS", country: "Portugal", src: logoPortugal, code: "PPL" },
    { id: 8, name: "Brazil Serie-A", country: "Brazil", src: logoBrazil, code: "BSA" },
];