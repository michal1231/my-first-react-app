import styles from './TextInput.module.scss';

const TextInput = props => {
  console.log('props:', props);
  return (
    <input type="text" className={styles.input} placeholder={props.placeholder} value={props.value} onChange={props.onChange} />
  );
};

export default TextInput;