import React from 'react';
import Card from './Card';

function CardTable(props) {
  // Display 12 cards
  // Randomize order
  // Report card click

  return (
    <div className="CardTable">
      <Card content="1" />
      <Card content="2" />
      <Card content="3" />
      <Card content="4" />
      <Card content="5" />
      <Card content="6" />
      <Card content="7" />
      <Card content="8" />
      <Card content="9" />
      <Card content="10" />
      <Card content="11" />
      <Card content="12" />
    </div>
  );
}

export default CardTable;