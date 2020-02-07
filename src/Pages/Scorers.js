import API from '../API';
import NavBar from '../Components/NavBar';
import Loading from '../Components/Loading';
import React, { useEffect, useState } from 'react';

function GoalScorers({ goal}) {
    const [score, setGoals] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const id = goal.params.id;

    useEffect(() => {
        const fetchScorers = async () => {
            setIsLoading(true);
            const result = await API.get(`competitions/${id}/scorers`);

            setGoals(result.data.scorers);
            setIsLoading(false);
        };

        fetchScorers();
    }, [id]);

    return (
        <div>
            {isLoading ? (
                <Loading />
            ) : (
                    <div>
                        <br/>
                        <NavBar />
                        <div className="Scorers">
                            <div className="Scorers" key={score.id}>
                                <h2 key={score.homeTeam.id}>{score.homeTeam.name}</h2>
                                <h3 key={score.id}>{score.score.fullTime.homeTeam} : {score.score.fullTime.awayTeam}</h3>
                                <h2 key={score.awayTeam.id}>{score.awayTeam.name}</h2>
                            </div>
                        </div>
                    </div>
                )}
        </div>
    )
}

export default GoalScorers;