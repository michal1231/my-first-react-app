import TextInput from '../TextInput/TextInput';
import styles from './CardForm.module.scss';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCard } from '../../redux/store';

const CardForm = props => {
  const dispatch = useDispatch();
  const [cardText, setCardText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addCard({ title: cardText, columnId: props.columnId }));
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