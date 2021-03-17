import React from 'react';

function Scores(props) {
  return (
    <div className="Scores">
      <p>Best score: {props.bestScore}</p>
      <p>Current score: {props.currentScore}</p>
    </div>
  );
}

export default Scores;