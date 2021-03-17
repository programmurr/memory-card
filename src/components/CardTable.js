import React, { useEffect, useState } from 'react';
import Card from './Card';

function CardTable(props) {
  const [ clickedArray, setClickedArray ] = useState([]);

  useEffect(() => {
    // Generate random order of cards
    // Randomize at every click - maybe add clickedArray as dependency to generate
    //  new randomization
  })

  function handleCardClick(content) {
    if (clickedArray.includes(content)) {
      props.gameReset(clickedArray.length)
      setClickedArray([]);
    } else {
      const newClickedArray = clickedArray.concat(content);
      props.onCardClick(newClickedArray.length);
      setClickedArray(newClickedArray);
    }
  }

  return (
    <div className="CardTable">
      <Card content="1" clicked={false} onClick={handleCardClick} />
      <Card content="2" clicked={false} onClick={handleCardClick} />
      <Card content="3" clicked={false} onClick={handleCardClick} />
      <Card content="4" clicked={false} onClick={handleCardClick} />
      <Card content="5" clicked={false} onClick={handleCardClick} />
      <Card content="6" clicked={false} onClick={handleCardClick} />
      <Card content="7" clicked={false} onClick={handleCardClick} />
      <Card content="8" clicked={false} onClick={handleCardClick} />
      <Card content="9" clicked={false} onClick={handleCardClick} />
      <Card content="10" clicked={false} onClick={handleCardClick} />
      <Card content="11" clicked={false} onClick={handleCardClick} />
      <Card content="12" clicked={false} onClick={handleCardClick} />
    </div>
  );
}

export default CardTable;