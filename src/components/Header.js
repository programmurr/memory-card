import React from 'react';
import Title from './Title';
import Scores from './Scores';
import Instructions from './Instructions';

function Header(props) {
  return (
    <div className="Header">
      <Title />
      <Scores 
        bestScore={props.bestScore} 
        currentScore={props.currentScore} 
      />
      <Instructions />
    </div>
  );
}

export default Header;