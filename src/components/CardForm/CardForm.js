import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCard } from '../../redux/subreducers/cardsReducer';

const CardForm = props => {
  const dispatch = useDispatch();
  const [cardText, setCardText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addCard({ title: cardText, columnId: props.columnId, isLiked: false }));
    setCardText('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextInput value={cardText} onChange={e => { setCardText(e.target.value) }} />
      <Button>Add card</Button>
    </form>
  );
};

export default CardForm;