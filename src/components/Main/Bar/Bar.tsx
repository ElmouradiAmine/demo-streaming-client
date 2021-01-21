import React from 'react';

import './Bar.css';

interface Props {
  title: string
}

const Bar = ({ title }: Props) => (
  <div className="bar">
    <h2 className="bar__title">{title}</h2>
  </div>
);

export default Bar;
