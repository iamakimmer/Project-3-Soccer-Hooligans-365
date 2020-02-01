import './Loading.scss';

import React from 'react';

function Loading() {
  return (
    <div className="Loading">
      <img src={`${process.env.PUBLIC_URL}/icon.png`} alt="" />
    </div>
  );
}

export default Loading;
