import styles from './actorCard.module.scss';

interface Props {
  img: string;
  name: string;
}

const IMAGE_URL = process.env.REACT_APP_MOVIE_IMAGE_URL;

function ActorCard({ img, name }: Props) {
  return (
    <div className={styles.actorCard}>
      <img src={IMAGE_URL + img} alt="profile" width={80} height={80} />
      <p>{name}</p>
    </div>
  );
}

export default ActorCard;
