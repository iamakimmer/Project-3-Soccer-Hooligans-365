import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import API from '../API';
import Loading from '../Components/Loading';

function MatchList({ match }) {
    const [competition, setCompetition] = useState({});
    const [standings, setStandings] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const id = match.params.id;

    useEffect(() => {
        const fetchMatches = async () => {
            setIsLoading(true);
            const result = await API.get(`competitions/${id}/matches`);

            setStandings(
                result.data.matches
                    .filter(standing => standing.type === "TOTAL")[0]
                    .table.sort((a, b) => a.position - b.position)
            );
            setCompetition(result.data.competition);
            setIsLoading(false);
        };

        fetchMatches();
    }, [id]);

    return (
        <div className="matchContainer">
            <div className="matchCard" key={match.id}>
                <h2 key={match.homeTeam.id}>{match.homeTeam.name}</h2>
                <h3 key={match.id}>{match.score.fullTime.homeTeam} : {match.score.fullTime.awayTeam}</h3>
                <h2 key={match.awayTeam.id}>{match.awayTeam.name}</h2>
            </div>
        </div>
    );
}

export default MatchList;