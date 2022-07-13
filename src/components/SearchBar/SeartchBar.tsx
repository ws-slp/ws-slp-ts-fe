import React from 'react';
import {useFormFields} from '../../lib/utils';

interface SearchBar {
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

const SearchBar = () => {
  const [values, handleChange, resetFormFields] =
    useFormFields<SearchBar>(initialFormState);
  return <div>SearchBar</div>;
};

export {SearchBar};
