import './Squad.scss';

import { differenceInYears, parseISO } from 'date-fns';
import React from 'react';

function Squad(props) {
  const { players } = props;

  if (players === undefined) return "";

  return (
    <div className="Squad">
      {players.map(player => (
        <dl key={player.id}>
          <dt>Name</dt>
          <dd>{player.name}</dd>
          <dt>Nationality</dt>
          <dd>{player.nationality}</dd>
          <dt>Age</dt>
          <dd>{differenceInYears(new Date(), parseISO(player.dateOfBirth))}</dd>
          <dt>Position</dt>
          <dd>{player.position}</dd>
        </dl>
      ))}
    </div>
  );
}

export default Squad;
