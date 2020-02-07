import API from '../API';
import NavBar from '../Components/NavBar';
import Loading from '../Components/Loading';
import React, { useEffect, useState } from 'react';

function MatchList({ fixture }) {
    const [match, setFixtures] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const id = fixture.params.id;

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
                    <div>
                        <br/>
                        <NavBar />
                        <div className="Fixtures">
                            <div className="Fixtures" key={match.id}>
                                <h2 key={match.homeTeam.id}>{match.homeTeam.name}</h2>
                                <h3 key={match.id}>{match.score.fullTime.homeTeam} : {match.score.fullTime.awayTeam}</h3>
                                <h2 key={match.awayTeam.id}>{match.awayTeam.name}</h2>
                            </div>
                        </div>
                    </div>
                )}
        </div>
    )
}

export default MatchList;