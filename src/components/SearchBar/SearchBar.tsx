import React from 'react';
import {useSearchFormFields} from '../../lib/utils';
import DropDown from './micro/DropDown';

interface SearchBarState {
  name: string;
  category: string;
  availability: string;
  tags: string[];
}

const initialFormState = {
  name: '',
  category: '',
  availability: '',
  tags: [],
};

const mockDropDownProps = {
  label: 'category',
  items: ['hardware', 'books'],
};
const mockDropDownProps2 = {
  label: 'availability',
  items: ['in stock', 'search all', 'overdue'],
};
const mockDropDownProps3 = {
  label: 'tags',
  items: ['synth', 'keyboard', 'books'],
};

const SearchBar = () => {
  const [values, handleChange, resetFormFields] =
    useSearchFormFields<SearchBarState>(initialFormState);
  console.log('values', values);
  return (
    <section className={styles.section}>
      <DropDown props={{...mockDropDownProps, handleChange}} />
      <DropDown props={{...mockDropDownProps3, handleChange}} />
      <DropDown props={{...mockDropDownProps2, handleChange}} />
      <input
        type="text"
        name="name"
        className={styles.input}
        value={values.name}
        onChange={handleChange}
      />
      <button className={styles.button}>Submit</button>
    </section>
  );
};

export {SearchBar};

const styles = {
  input: 'bg-neutral-focus m-5',
  button: 'btn m-5',
  section: 'flex m-10 border-solid border-2 border-sky-500 p-5',
};
