import React from 'react';
import {useFormFields} from '../../lib/utils';
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
  items: ['item1', 'item2'],
};
const mockDropDownProps2 = {
  label: 'availability',
  items: ['in stock', 'out of stock', 'overdue'],
};
const mockDropDownProps3 = {
  label: 'tags',
  items: ['synth', 'keyboard', 'books'],
};

const SearchBar = () => {
  const [values, handleChange, resetFormFields] =
    useFormFields<SearchBarState>(initialFormState);

  return (
    <div>
      <DropDown props={mockDropDownProps} />
      <DropDown props={mockDropDownProps2} />
      <DropDown props={mockDropDownProps3} />
      <input
        type="text"
        name="name"
        className={styles.input}
        value={values.name}
        onChange={handleChange}
      />
      <button className={styles.button}>Submit</button>
    </div>
  );
};

export {SearchBar};

const styles = {
  input: 'bg-neutral-focus',
  button: 'btn',
};
