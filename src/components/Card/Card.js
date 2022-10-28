import styles from './Card.module.scss';
import clsx from 'clsx';
import { useSelector, useDispatch } from 'react-redux';
import { getIsFavorite, toggleCardFavorite, deleteCard } from '../../redux/subreducers/cardsReducer';

const Card = ({ children, id, clickableFavorite }) => {
  const dispatch = useDispatch();
  const isFavorite = useSelector(state => getIsFavorite(state, id));

  const addToFavorites = () => {
    if (clickableFavorite)
      dispatch(toggleCardFavorite(id));
  }

  const removeCard = () => {
    dispatch(deleteCard(id));
  }

  return (
    <li className={styles.card}>
      {children}
      <div className={styles.iconsContainer}>
        <span className={clsx("fa-regular fa-star", styles.icon, isFavorite && styles.favorite)} onClick={addToFavorites}></span>
        <span className={clsx("fa-regular fa-trash-can", styles.icon)} onClick={removeCard}></span>
      </div>
    </li>
  )
}

export default Card;