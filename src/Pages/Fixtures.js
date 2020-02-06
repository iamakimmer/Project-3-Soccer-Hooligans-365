import React, { useEffect, useState } from 'react';
import API from '../API';
import Loading from '../Components/Loading';

function MatchList({ match }) {
    const [matches, setFixtures] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const id = match.params.id;

    useEffect(() => {
        const fetchMatches = async () => {
            setIsLoading(true);
            const result = await API.get(`competitions/${id}/matches`);

            setFixtures(result.data.matches);
            setIsLoading(false);
        };

        fetchMatches();
    }, [id]);

    return (
        <div>
            {isLoading ? (
                <Loading />
            ) : (
                    <div className="Fixtures">
                        <div className="Fixtures" key={matches.id}>
                            <h2 key={matches.homeTeam.id}>{matches.homeTeam.name}</h2>
                            <h3 key={matches.id}>{matches.score.fullTime.homeTeam} : {matches.score.fullTime.awayTeam}</h3>
                            <h2 key={matches.awayTeam.id}>{matches.awayTeam.name}</h2>
                        </div>
                    </div>
                )}
        </div>
    )
}

export default MatchList;