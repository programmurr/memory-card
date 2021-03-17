import React from 'react';

function Card(props) {
  const { content } = props;

  function handleClick() {
    props.onClick(content);
  }

  return (
    <div 
      className="Card"
      onClick={handleClick}
    >
      {content}
    </div>
  );
}

export default Card;