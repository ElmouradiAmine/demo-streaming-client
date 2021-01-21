import axios, { AxiosResponse } from 'axios';
import React, { useState, useEffect } from 'react';
import Bar from '../Bar/Bar';
import CardsList from '../CardsList/CardsList';

import './Content.css';

interface Props {
  title: string;
  programType: string;
}

interface Data {
  title: string;
  images: { 'Poster Art': { url: string } };
}

export const getData = async (programType: string): Promise<AxiosResponse> => {
  const url = `http://localhost:5000/streaming?programType=${programType}`;
  return axios.get(url);
};

const Content = ({ title, programType }: Props) => {
  const [data, setData] = useState<Data[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(() => true);
    getData(programType)
      .then((response) => {
        setData(response.data);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(() => false);
      });
  }, [programType]);

  const getCardsData = () =>
    data.map((item) => ({
      img: item.images['Poster Art'].url,
      title: item.title,
    }));

  const getContent = () => {
    if (loading) {
      return <p className="info">Loading...</p>;
    }
    if (error) {
      return <p className="info">Oops, something went wrong...</p>;
    }
    return <CardsList cards={getCardsData()} />;
  };

  return (
    <div className="content">
      <Bar title={title} />
      {getContent()}
    </div>
  );
};

export default Content;
