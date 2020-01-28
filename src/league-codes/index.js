import PremierLeagueLogo from "../images/premier-league.png";
import BundesligaLogo from "../images/bundesliga.png";
import Ligue1Logo from "../images/ligue-1.png";
import SerieALogo from "../images/serie-a.png";
import LaLigaLogo from "../images/la-liga.png";
import DutchLogo from "../images/eredivisie.png";
import PortugalLogo from "../images/liga-nos.png";
import BrazilLogo from "../images/brazil-league.png";

export const leagues = [
    { id: 1, name: "Premier League", country: "England", src: PremierLeagueLogo, code: "PL" },
    { id: 2, name: "Bundesliga", country: "Germany", src: BundesligaLogo, code: "BL1" },
    { id: 3, name: "Ligue 1", country: "France", src: Ligue1Logo, code: "FL1" },
    { id: 4, name: "Serie A", country: "Italy", src: SerieALogo, code: "SA" },
    { id: 5, name: "La Liga", country: "Spain", src: LaLigaLogo, code: "PD" },
    { id: 6, name: "Eredivisie", country: "Netherlands", src: DutchLogo, code: "DED" },
    { id: 7, name: "Liga NOS", country: "Portugal", src: PortugalLogo, code: "PPL" },
    { id: 8, name: "Brazil Serie-A", country: "Brazil", src: BrazilLogo, code: "BSA" },
];