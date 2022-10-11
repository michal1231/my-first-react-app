import TextInput from '../TextInput/TextInput';
import styles from './CardForm.module.scss';
import Button from '../Button/Button';
import { useState } from 'react';

const CardForm = props => {
  const [cardText, setCardText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    props.action({ title: cardText }, props.columnId);
    setCardText('');
  }

  return (
    <form className={styles.cardForm} onSubmit={handleSubmit}>
      <TextInput value={cardText} onChange={e => { setCardText(e.target.value) }} />
      <Button>Add card</Button>
    </form>
  );
};

export default CardForm;