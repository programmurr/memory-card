import React, { useState } from 'react';
import Header from './Header';
import CardTable from './CardTable';

function MemoryGame() {
  const [ bestScore, setBestScore ] = useState(0);
  const [ currentScore, setCurrentScore ] = useState(0);

  function handleCardClick(length) {
    setCurrentScore(length);
  }

  function handleReset(length) {
    if (length >= bestScore) {
      setBestScore(length);
      setCurrentScore(0);
    } else {
      setCurrentScore(0);
    }
  }

  return (
    <div className="MemoryGame">
      <Header bestScore={bestScore} currentScore={currentScore} />
      <CardTable onCardClick={handleCardClick} gameReset={handleReset}/>
    </div>
  );
}

export default MemoryGame;