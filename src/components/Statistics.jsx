import React from 'react';

const Statistics = ({ props }) => {
  return (
    <span className="stat">
      <span>STATISTICS - {props.kills / props.match}</span> 
      {/* / <span>Kills / Match</span> */}
    </span>
  );
};

export default Statistics;
