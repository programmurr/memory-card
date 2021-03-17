import React, { useState } from 'react';
import Card from './Card';

function CardTable(props) {
  const [ clickedArray, setClickedArray ] = useState([]);

  function generateCards(number) {
    let cardArray = [];
    const range = [...Array(12).keys()].map((x) => x + 1);

    for (let i = 1; i <= number; i++) {
      const randomNumber = Math.floor(Math.random() * range.length) + 1;
      const index = range.indexOf(randomNumber);
      const content = (range.splice(index, 1)).toString();
      cardArray.push(<Card key={content} content={content} onClick={handleCardClick} />)
    }

    return (cardArray);
  }

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
      {generateCards(12)}
    </div>
  );
}

export default CardTable;