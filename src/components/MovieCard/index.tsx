import styles from './movieCard.module.scss';

interface Props {
  poster: string;
  width: number;
  height: number;
}

const IMAGE_URL = process.env.REACT_APP_MOVIE_IMAGE_URL;

function MovieCard({ poster, width, height }: Props) {
  return (
    <div className={styles.movieCard}>
      <img src={IMAGE_URL + poster} width={width} height={height} alt="logo" />
    </div>
  );
}

export default MovieCard;
