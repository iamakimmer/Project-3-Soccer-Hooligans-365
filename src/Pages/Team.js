//import './Team.scss';
import './Team.css';
import API from '../API';
import Squad from './Squad';
import { groupBy } from 'lodash';
import Loading from '../Components/Loading';
import React, { useEffect, useState } from 'react';

function Team({ match }) {
  const [team, setTeam] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const id = match.params.id;
  const [activeCompetitions, setActiveCompetitions] = useState("");

  useEffect(() => {
    const fetchTeams = async () => {
      setIsLoading(true);
      const result = await API.get(`teams/${id}`);

      setTeam(result.data);
      setIsLoading(false);
    };

    fetchTeams();
  }, [id]);

  useEffect(() => {
    const competitions = groupBy(
      team.activeCompetitions,
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
  }, [team]);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
          <div className="Team">
            <h2>{team.name}</h2>
            <h3>Details</h3>
            <img className="Crest" src={team.crestUrl} alt={team.shortName} />
            <p>From: {team.area && team.area.name ? team.area.name : ""}</p>
            <p>Founded: {team.founded}</p>
            <p>Stadium: {team.venue}</p>
            <p>
              Website: <a href={team.website}>{team.website}</a>
            </p>

            {activeCompetitions}
            <h3>Squad</h3>
            <Squad players={team.squad} />
          </div>
        )}
    </div>
  );
}

export default Team;
