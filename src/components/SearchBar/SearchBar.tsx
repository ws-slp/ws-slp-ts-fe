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

const SearchBar = () => {
  const [values, handleChange, resetFormFields] =
    useFormFields<SearchBarState>(initialFormState);

  console.log('values', values);

  return (
    <div>
      <DropDown props={mockDropDownProps} />
      <DropDown props={mockDropDownProps2} />
      <input
        type="text"
        name="name"
        className="bg-neutral-focus"
        value={values.name}
        onChange={handleChange}
      />
      <button className="btn">Submit</button>
    </div>
  );
};

export {SearchBar};
