import React, {useEffect} from 'react';
import {uniqueArray, useSearchFormFields} from './utils';
import DropDown from './micro/DropDown';
import {useState} from 'react';
import {Tag} from '../LibraryItemBuilder/micro/Tag';
import {TagsBuilder} from './micro/TagsBuilder';

export interface SearchBarState {
  name: string;
  category: string;
  availability: string;
  tags: string;
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
  tags: '',
};

const SearchBar = ({dropDownMeta}: SearchBarProps) => {
  const [values, handleChange, resetFormFields] =
    useSearchFormFields<SearchBarState>(initialFormState);

  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  useEffect(() => {
    const newTagsArray: string[] = [...selectedTags, values.tags];
    setSelectedTags(uniqueArray(newTagsArray));
  }, [values.tags]);

  return (
    <>
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
      <TagsBuilder selectedTags={selectedTags} />
    </>
  );
};

export {SearchBar};

const styles = {
  input: 'bg-neutral-focus m-5',
  button: 'btn m-5',
  section:
    'flex flex-row flex-wrap m-1 border-solid border-2 border-sky-500 p-1 justify-left',
};
