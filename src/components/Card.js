import React from 'react';

function Card(props) {
  // Report when clicked
  // Remember if clicked or not
  return (
    <div className="Card">
      {props.content}
    </div>
  );
}

export default Card;