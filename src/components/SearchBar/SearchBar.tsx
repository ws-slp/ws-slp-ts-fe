import React from 'react';
import {useSearchFormFields} from '../../lib/utils';
import DropDown from './micro/DropDown';
import {DropDownProps} from './micro/DropDown';

interface SearchBarState {
  name: string;
  category: string;
  availability: string;
  tags: string[];
}
interface SearchBarProps {
  dropDownMeta: ReadonlyArray<DropDownMeta>;
}
interface DropDownMeta {
  label: string;
  items: string[];
}

const initialFormState = {
  name: '',
  category: '',
  availability: '',
  tags: [],
};

const mockDropDownProps = [
  {
    label: 'category',
    items: ['hardware', 'books'],
  },
  {
    label: 'availability',
    items: ['in stock', 'search all', 'overdue'],
  },
  {
    label: 'tags',
    items: ['synth', 'keyboard', 'books'],
  },
];

const SearchBar = ({dropDownMeta}: SearchBarProps) => {
  const [values, handleChange, resetFormFields] =
    useSearchFormFields<SearchBarState>(initialFormState);
  return (
    <section className={styles.section}>
      {dropDownMeta.map(searchProps => {
        return (
          <DropDown
            props={{...searchProps, handleChange}}
            key={searchProps.label}
          />
        );
      })}
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
  section:
    'flex flex-row flex-wrap m-1 border-solid border-2 border-sky-500 p-1 justify-left',
};
