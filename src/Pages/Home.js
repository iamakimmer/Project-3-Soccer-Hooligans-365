import './Home.scss';
import API from '../API';
import { Link } from 'react-router-dom';
import Loading from '../Components/Loading';
import React, { useEffect, useState } from 'react';

function Home() {
  const [competitions, setCompetitions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await API.get("competitions");

      setCompetitions(
        result.data.competitions.filter(
          competition =>
            competition.plan === "TIER_ONE"
        )
      );
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="Home">
      {isLoading ? (
        <Loading />
      ) : (
          <div>
            <ul className="=competitions">
              {competitions.map(competition => {
                const emblem = require("../assets/competitions/" +
                  competition.id +
                  ".png");
                return (
                  <li key={competition.id}>
                    <Link to={`/competition/${competition.id}`}>
                      <img src={emblem} alt="" />
                      <h5>{competition.name}</h5>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
    </div>
  );
}

export default Home;
