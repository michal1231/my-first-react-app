import styles from './Favorite.module.scss';
import { getFavoriteCards } from '../../redux/subreducers/cardsReducer';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';

const Favorite = () => {
  const favoriteCards = useSelector(getFavoriteCards);

  return (
    <div className={styles.favorite}>
      <h1 className={styles.title}>Favorite</h1>
      <div className={styles.favorites}>
        <ul className={styles.cards}>
          {favoriteCards.length === 0 ?
            <p className={styles.noCardsText}>No favorite cards...</p> :
            favoriteCards.map(card => <Card key={card.id} id={card.id} clickableFavorite={false}>{card.title}</Card>)}
        </ul>
      </div>
    </div>
  );
};

export default Favorite;