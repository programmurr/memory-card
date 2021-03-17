import React from 'react';

function Card(props) {

  function handleClick() {
    props.onClick(props.id);
  }

  return (
    <img 
      className="Card"
      onClick={handleClick}
      src={props.source}
    />
  );
}

export default Card;