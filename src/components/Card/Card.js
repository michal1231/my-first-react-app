import styles from './Card.module.scss';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { getIsFavorite } from '../../redux/store';

const Card = ({ children, id }) => {
  const isFavorite = useSelector(state => getIsFavorite(state, id));
  console.log(isFavorite, id);
  return (
    <li className={styles.card}>{children}<span className={clsx("fa-regular fa-star")}></span></li>
  )
}

export default Card;