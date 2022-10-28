import styles from './Column.module.scss';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import { useSelector } from 'react-redux';
import { getFilteredCards } from '../../redux/subreducers/cardsReducer';

const Column = props => {
  const cards = useSelector(state => getFilteredCards(state, props.id));

  return (
    <article className={styles.column}>
      <div className={styles.header}>
        <span className={styles.icon + ' ' + props.icon} />
        <h2 className={styles.title}>{props.title}</h2>
      </div>
      <ul className={styles.cards}>{cards.map(card => <Card key={card.id} id={card.id} clickableFavorite={true}>{card.title}</Card>)}</ul>
      <div className={styles.cardForm}>
        <CardForm columnId={props.id} />
      </div>
    </article>
  )
}

export default Column;