import SearchBar from 'pages/common/SearchBar';
import { useEffect, useState } from 'react';
import {
  moviePopularAPI,
  movieUpcomingAPI,
  actorAPI,
  movieInTheaterAPI,
  movieInGenreAPI,
} from 'utils';
import { IActorItem } from 'types/actor.d';
import { IMovieItem } from 'types/movie.d';
import ActorCard from 'components/ActorCard';
import { cx } from 'styles';
import styles from './main.module.scss';
import MovieSlider from './MovieSlider';

const genres = [
  {
    id: 28,
    name: '액션',
  },
  {
    id: 16,
    name: '애니메이션',
  },
  {
    id: 35,
    name: '코미디',
  },
  {
    id: 99,
    name: '다큐멘터리',
  },
  {
    id: 14,
    name: '판타지',
  },
  {
    id: 27,
    name: '공포',
  },
  {
    id: 9648,
    name: '미스터리',
  },
  {
    id: 10749,
    name: '로맨스',
  },
  {
    id: 878,
    name: 'SF',
  },
  {
    id: 53,
    name: '스릴러',
  },
];
const IMAGE_URL = process.env.REACT_APP_MOVIE_IMAGE_URL;

function Main() {
  const [actorList, setActorList] = useState<IActorItem[]>([]);
  const [genreMovieList, setGenreMovieList] = useState<IMovieItem[]>([]);
  const [clickedGenre, setClickedGenre] = useState('');

  const actorApi = async () => {
    const res = await actorAPI();
    if (res) setActorList(res);
  };

  const genreMovieApi = async (genre: number) => {
    const res = await movieInGenreAPI(genre);
    if (res) setGenreMovieList(res);
  };

  const handleGenreClick = (e: { currentTarget: { value: string } }) => {
    setClickedGenre(e.currentTarget.value);
  };

  useEffect(() => {
    if (clickedGenre) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const num = genres.find((genre) => genre.name === clickedGenre)!.id;
      genreMovieApi(num);
    }
  }, [clickedGenre]);

  useEffect(() => {
    actorApi();
    genreMovieApi(28);
  }, []);

  return (
    <main className={styles.main}>
      <SearchBar />
      <div className={styles.sliderBox}>
        <h2 className={styles.title}>POPULAR</h2>
        <MovieSlider
          api={moviePopularAPI}
          size="large"
          slidesToShow={4}
          rows={1}
        />
      </div>
      <div className={styles.bottom}>
        <div className={styles.left}>
          <div className={styles.sliderBox}>
            <h2 className={styles.title}>UP COMING</h2>
            <MovieSlider
              api={movieUpcomingAPI}
              size="small"
              slidesToShow={4}
              rows={1}
            />
          </div>
          <div className={styles.sliderBox}>
            <h2 className={styles.title}>IN THEATER</h2>
            <MovieSlider
              api={movieInTheaterAPI}
              size="small"
              slidesToShow={4}
              rows={1}
            />
          </div>
        </div>
        <div className={styles.right}>
          <h2>SPOTLIGHT CELEBRITES</h2>
          {actorList.map((actor) => (
            <ActorCard
              key={actor.id}
              img={actor.profile_path}
              name={actor.name}
            />
          ))}
        </div>
      </div>

      <div className={styles.genres}>
        <h2 className={styles.title}>GENRE</h2>
        <ul>
          {genres.map((genre) => {
            const isActive = genre.name === clickedGenre;

            return (
              <button
                key={genre.id}
                type="button"
                value={genre.name}
                className={cx(styles.tag, { [styles.active]: isActive })}
                onClick={handleGenreClick}
              >
                {genre.name}
              </button>
            );
          })}
        </ul>
        <div>
          {genreMovieList.map((movie) => (
            <img
              key={movie.id}
              className={styles.poster}
              src={IMAGE_URL + movie.poster_path}
              width={160}
              height={230}
              alt="poster"
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default Main;
