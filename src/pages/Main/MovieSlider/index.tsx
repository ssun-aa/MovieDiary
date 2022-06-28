import Slider from 'react-slick';
import './slick.css';
import './slick-theme.css';
import { IMovieItem } from 'types/movie.d';
import styles from './movieSlider.module.scss';

interface Props {
  movieList: Array<IMovieItem>;
  slidesToShow: number;
  size: string;
  rows: number;
}

const IMAGE_URL = process.env.REACT_APP_MOVIE_IMAGE_URL;

function MovieSlider({ movieList, size, slidesToShow, rows }: Props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow,
    slidesToScroll: 4,
    rows,
  };

  return (
    <Slider {...settings}>
      {movieList.map((movie) => (
        <div key={movie.id}>
          <img
            className={styles.poster}
            src={IMAGE_URL + movie.poster_path}
            width={size === 'small' ? 160 : 270}
            height={size === 'small' ? 230 : 420}
            alt="poster"
          />
        </div>
      ))}
    </Slider>
  );
}
export default MovieSlider;
