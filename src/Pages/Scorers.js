import API from '../API';
import { groupBy } from 'lodash';
import NavBar from '../Components/NavBar';
import Loading from '../Components/Loading';
import React, { useEffect, useState } from 'react';

function GoalScorers({ goal }) {
    const [score, setGoals] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const id = goal.params.id;
    const [activeCompetitions, setActiveCompetitions] = useState("");

    useEffect(() => {
        const fetchScorers = async () => {
            setIsLoading(true);
            const result = await API.get(`competitions/${id}/scorers`);
            setGoals(result.data.scorers);
            setIsLoading(false);
        };

        fetchScorers();
    }, [id]);

    useEffect(() => {
        const competitions = groupBy(
            goal.activeCompetitions,
            competition => competition.area.name
        );

        setActiveCompetitions(
            <div>
                {Object.keys(competitions).map((name, index) => (
                    <div key={index}>
                        <h5>{name}</h5>
                        <ul>
                            {competitions[name].map(competition => (
                                <li key={competition.id}>{competition.name}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        );
    }, [goal]);

    return (
        <div>
            {isLoading ? (
                <Loading />
            ) : (
                    <div className="Scorers">
                        <NavBar />
                        {activeCompetitions}
                        <h2>{score.player.id}</h2>
                        >
                                <h2 key={score.homeTeam.id}>{score.homeTeam.name}</h2>
                        <h3 key={score.id}>{score.score.fullTime.homeTeam} : {score.score.fullTime.awayTeam}</h3>
                        <h2 key={score.awayTeam.id}>{score.awayTeam.name}</h2>
                    </div>
                )}
        </div>
    )
}

export default GoalScorers;