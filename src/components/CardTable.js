import React, { useState } from 'react';
import Card from './Card';
import Img1 from '../img/1.jpg'
import Img2 from '../img/2.jpg'
import Img3 from '../img/3.jpg'
import Img4 from '../img/4.jpg'
import Img5 from '../img/5.jpg'
import Img6 from '../img/6.jpg'
import Img7 from '../img/7.jpg'
import Img8 from '../img/8.jpg'
import Img9 from '../img/9.jpg'
import Img10 from '../img/10.jpg'
import Img11 from '../img/11.jpg'
import Img12 from '../img/12.jpg'


function CardTable(props) {
  const [ clickedArray, setClickedArray ] = useState([]);
  const imageArray = [ Img1, Img2, Img3, Img4, 
                       Img5, Img6, Img7, Img8, 
                       Img9, Img10, Img11, Img12 
                      ]

  function generateCards(number) {
    let cardArray = [];
    const range = [...Array(12).keys()].map((x) => x + 1);

    for (let i = 1; i <= number; i++) {
      const randomNumber = Math.floor(Math.random() * range.length) + 1;
      const index = range.indexOf(randomNumber);
      const id = (range.splice(index, 1)).toString();
      const source = imageArray[id - 1];

      cardArray.push(
        <Card 
          key={id} 
          id={id}
          source={source} 
          onClick={handleCardClick} 
        />
      )
    }

    return (cardArray);
  }

  function handleCardClick(id) {
    if (clickedArray.includes(id)) {
      props.gameReset(clickedArray.length)
      setClickedArray([]);
    } else {
      const newClickedArray = clickedArray.concat(id);
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