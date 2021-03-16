import React, { useState } from 'react';
import Header from './Header';
import CardTable from './CardTable';

function MemoryGame() {
  const [ bestScore, setBestScore ] = useState(0);
  const [ currentScore, setCurrentScore ] = useState(0);

  return (
    <div className="MemoryGame">
      <Header bestScore={bestScore} currentScore={currentScore} />
      <CardTable />
    </div>
  );
}

export default MemoryGame;