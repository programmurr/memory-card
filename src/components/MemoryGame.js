import React, { useState } from 'react';
import Header from './Header';
import CardTable from './CardTable';

// TODO: 
// Detect when card has already been clicked
// Reset current/best scores accordingly
function MemoryGame() {
  const [ bestScore, setBestScore ] = useState(0);
  const [ currentScore, setCurrentScore ] = useState(0);

  function handleCardClick(length) {
    setCurrentScore(length);
  }

  return (
    <div className="MemoryGame">
      <Header bestScore={bestScore} currentScore={currentScore} />
      <CardTable onCardClick={handleCardClick}/>
    </div>
  );
}

export default MemoryGame;