import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import API from '../API';
import Loading from '../Components/Loading';

function Competition({ match }) {
  const [competition, setCompetition] = useState({});
  const [standings, setStandings] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const id = match.params.id;

  useEffect(() => {
    const fetchCompetition = async () => {
      setIsLoading(true);
      const result = await API.get(`competitions/${id}/standings`);

      setStandings(
        result.data.standings
          .filter(standing => standing.type === "TOTAL")[0]
          .table.sort((a, b) => a.position - b.position)
      );
      setCompetition(result.data.competition);
      setIsLoading(false);
    };

    fetchCompetition();
  }, [id]);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <h2>{competition.name}</h2>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Team</th>
                <th className="numeric">Played</th>
                <th className="numeric">Won</th>
                <th className="numeric">Drawn</th>
                <th className="numeric">Lost</th>
                <th className="numeric">For</th>
                <th className="numeric">Against</th>
                <th className="numeric">
                  <abbr title="Goal Difference">GD</abbr>
                </th>
                <th className="numeric">Points</th>
              </tr>
            </thead>
            <tbody>
              {standings.map((standing, index) => (
                <tr
                  key={index}
                  className={
                    index + 1 === standings.length - 3 ? "relegation" : ""
                  }
                >
                  <td>{standing.position}</td>
                  <td className="bold">
                    <Link to={`/team/${standing.team.id}`}>
                      {standing.team.name}
                    </Link>
                  </td>
                  <td className="numeric">{standing.playedGames}</td>
                  <td className="numeric">{standing.won}</td>
                  <td className="numeric">{standing.draw}</td>
                  <td className="numeric">{standing.lost}</td>
                  <td className="numeric">{standing.goalsFor}</td>
                  <td className="numeric">{standing.goalsAgainst}</td>
                  <td className="numeric">{standing.goalDifference}</td>
                  <td className="numeric bold">{standing.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Competition;
