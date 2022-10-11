import styles from './Column.module.scss';
import Card from '../Card/Card';

const Column = props => {
  console.log('Column props.key:', props.cards[0].id);
  return (
    <article className={styles.column}>
      <span className={styles.icon + ' ' + props.icon} />
      <h2 className={styles.title}>{props.title}</h2>
      <ul className={styles.cards}>{props.cards.map(card => <Card key={card.id}>{card.title}</Card>)}</ul>
    </article>
  )
}

export default Column;