import React, { useState } from 'react';

function Card(props) {
  const { content } = props;
  const [ clicked, setClicked ] = useState(props.clicked);

  const handleClick = () => {
    props.onClick(content);
    setClicked(true);
  }

  return (
    <div 
      className="Card"
      onClick={handleClick}
    >
      {props.content}
    </div>
  );
}

export default Card;