import React from 'react';
import Card from '../Card/Card';

import './CardsList.css';

interface Props {
  cards: { img?: string; title: string; label?: string }[];
}

const CardsList = ({ cards }: Props) => (
  <div className="cards-list">
    {cards.map((card, index) => (
      <Card key={`${card.title}`} title={card.title} label={card.label} img={card.img} />
    ))}
  </div>
);

export default CardsList;
