import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateSearchText } from '../../redux/store';

const SearchForm = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateSearchText(searchText));
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps 
  useEffect(() => { dispatch(updateSearchText('')) }, []);

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <TextInput placeholder="Search..." value={searchText} onChange={e => setSearchText(e.target.value)} />
      <Button>
        <span className="fa-solid fa-magnifying-glass" />
      </Button>
    </form>
  );
};

export default SearchForm;