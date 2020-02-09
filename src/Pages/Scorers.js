import API from '../API';
import NavBar from '../Components/NavBar';
import Loading from '../Components/Loading';
import React, { useEffect, useState } from 'react';

function Scorers({ goal }) {
    const [competition, setCompetition] = useState({});
    const [score, setGoals] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const id = goal.params.id;

    useEffect(() => {
        const fetchScorers = async () => {
            setIsLoading(true);
            const result = await API.get(`competitions/${id}/scorers`);

            setGoals(result.data.scorers          
            .filter(scorer => scorer.type === "TOTAL")[0]
            .table.sort((a, b) => a.position - b.position));

            setCompetition(result.data.competition);
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
                        <br />
                        <NavBar />
                        <br />
                        <h2>{competition.name}</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Position</th>
                                    <th>Nationality</th>
                                    <th className="numeric">Goals</th>
                                </tr>
                            </thead>
                            <tbody>
                                {score.map((scorer, index) => (
                                    <tr key={index}>
                                        <td>{scorer.player.name}</td>
                                        <td>{scorer.player.position}</td>
                                        <td>{scorer.player.nationality}</td>
                                        <td className="numeric bold">{scorer.numberOfGoals}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
        </div>
    );
}

export default Scorers;
