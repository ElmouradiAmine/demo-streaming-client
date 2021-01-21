import React from 'react';
import { Link } from 'react-router-dom';
import Bar from '../Bar/Bar';
import Card from '../Card/Card';

import './Home.css';

const Home = () => (
  <div className="home">
    <Bar title="Popular Titles" />
    <div className="home__cards">
      <Link to="/series">
        <Card title="Popular Series" label="series" />
      </Link>
      <Link to="/movies">
        <Card title="Popular Movies" label="movies" />
      </Link>
    </div>
  </div>
);

export default Home;
