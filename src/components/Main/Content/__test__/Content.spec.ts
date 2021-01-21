import axios from 'axios';
import { getData } from '../Content';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('getData', () => {
  it('fetches successfully data from an API', async () => {
    const data = {
      data: [
        {
          title: 'Wolf Creek',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          programType: 'series',
          images: {
            'Poster Art': {
              url:
                'https://streamcoimg-a.akamaihd.net/000/128/61/12861-PosterArt-ec32a81986a45eac7e080112075ab466.jpg',
              width: 1000,
              height: 1500,
            },
          },
          releaseYear: 2016,
        },
        {
          title: 'No Activity',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          programType: 'series',
          images: {
            'Poster Art': {
              url:
                'https://streamcoimg-a.akamaihd.net/000/106/36/10636-PosterArt-9add943c5e62c2d89f6d31458d33508a.jpg',
              width: 1000,
              height: 1500,
            },
          },
          releaseYear: 2015,
        },
      ],
    };
    mockedAxios.get.mockImplementationOnce(() => Promise.resolve(data));

    await expect(getData('series')).resolves.toEqual(data);
    expect(axios.get).toHaveBeenCalledWith(
      'http://localhost:5000/streaming?programType=series',
    );
  });

  it('fetches erroneously data from an API', async () => {
    const errorMessage = 'Network Error';
 
    mockedAxios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage)),
    );
 
    await expect(getData('react')).rejects.toThrow(errorMessage);
  });
});
