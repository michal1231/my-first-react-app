import styles from './Card.module.scss';
import clsx from 'clsx';
import { useSelector, useDispatch } from 'react-redux';
import { getIsFavorite, toggleCardFavorite } from '../../redux/store';

const Card = ({ children, id, clickableFavorite }) => {
  const dispatch = useDispatch();
  const isFavorite = useSelector(state => getIsFavorite(state, id));

  const handleClick = () => {
    if (clickableFavorite)
      dispatch(toggleCardFavorite(id));
  }

  return (
    <li className={styles.card}>{children}<span className={clsx("fa-regular fa-star", isFavorite && styles.favorite)} onClick={handleClick}></span></li>
  )
}

export default Card;