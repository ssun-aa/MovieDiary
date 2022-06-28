import axios from 'axios';
import { IMovieItem, IMovieAPIRes } from 'types/movie.d';
import { IActorItem, IActorAPIRes } from 'types/actor.d';

const MOVIE_OPEN_API_DOMAIN = 'https://api.themoviedb.org/3/movie';
const ACTOR_OPEN_API_DOMAIN = 'https://api.themoviedb.org/3/person';
const GENRE_OPEN_API_DOMAIN = 'https://api.themoviedb.org/3/discover/movie';

const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;

const movieUpcomingAPI = async (): Promise<IMovieItem[] | void> => {
  try {
    const response = await axios.get<IMovieAPIRes>(
      `${MOVIE_OPEN_API_DOMAIN}/upcoming`,
      {
        params: {
          api_key: API_KEY,
          language: 'ko-KR',
          region: 'KR',
        },
      }
    );

    return response.data.results;
  } catch (e) {
    // eslint-disable-next-line no-console
    return console.error(e);
  }
};

const moviePopularAPI = async (): Promise<IMovieItem[] | void> => {
  try {
    const response = await axios.get<IMovieAPIRes>(
      `${MOVIE_OPEN_API_DOMAIN}/popular`,
      {
        params: {
          api_key: API_KEY,
          language: 'ko-KR',
          region: 'KR',
        },
      }
    );

    return response.data.results;
  } catch (e) {
    // eslint-disable-next-line no-console
    return console.error(e);
  }
};

const movieInTheaterAPI = async (): Promise<IMovieItem[] | void> => {
  try {
    const response = await axios.get<IMovieAPIRes>(
      `${MOVIE_OPEN_API_DOMAIN}/now_playing`,
      {
        params: {
          api_key: API_KEY,
          language: 'ko-KR',
          region: 'KR',
        },
      }
    );

    return response.data.results;
  } catch (e) {
    // eslint-disable-next-line no-console
    return console.error(e);
  }
};

const movieInGenreAPI = async (num: number): Promise<IMovieItem[] | void> => {
  try {
    const response = await axios.get<IMovieAPIRes>(`${GENRE_OPEN_API_DOMAIN}`, {
      params: {
        api_key: API_KEY,
        language: 'ko-KR',
        region: 'KR',
        sort_by: 'popularity.desc',
        with_genres: num,
      },
    });

    return response.data.results;
  } catch (e) {
    // eslint-disable-next-line no-console
    return console.error(e);
  }
};

const actorAPI = async (): Promise<IActorItem[] | void> => {
  try {
    const response = await axios.get<IActorAPIRes>(
      `${ACTOR_OPEN_API_DOMAIN}/popular`,
      {
        params: {
          api_key: API_KEY,
          language: 'ko-KR',
        },
      }
    );

    return response.data.results.slice(0, 6);
  } catch (e) {
    // eslint-disable-next-line no-console
    return console.error(e);
  }
};

export {
  movieUpcomingAPI,
  movieInTheaterAPI,
  moviePopularAPI,
  actorAPI,
  movieInGenreAPI,
};
