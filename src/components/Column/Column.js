import styles from './Column.module.scss';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';

const Column = props => {
  console.log(props.cards);
  return (
    <article className={styles.column}>
      <div className={styles.header}>
        <span className={styles.icon + ' ' + props.icon} />
        <h2 className={styles.title}>{props.title}</h2>
      </div>
      <ul className={styles.cards}>{props.cards.map(card => <Card key={card.id}>{card.title}</Card>)}</ul>
      <div className={styles.cardForm}>
        <CardForm columnId={props.id} action={props.action} />
      </div>
    </article>
  )
}

export default Column;