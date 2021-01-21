import React from 'react';
import PlaceholderImage from '../../../assets/placeholder.png';

import './Card.css';

interface Props {
  img?: string;
  title: string;
  label?: string;
}

const Card = ({ img = PlaceholderImage, title, label = '' }: Props) => (
  <div className="card">
    <div className="card__image">
      <img src={img} alt={`${title} ${label} card`} />
      <p className="card__label">{label}</p>
    </div>
    <p className="card__title">{title}</p>
  </div>
);

export default Card;
