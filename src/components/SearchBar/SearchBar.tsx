import React, {MouseEventHandler, useEffect} from 'react';
import {removeItem, uniqueArray, useSearchFormFields} from './utils';
import DropDown from './micro/DropDown';
import {useState} from 'react';
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
    const currentTagsArray: string[] = [...selectedTags, values.tags];
    setSelectedTags(uniqueArray(currentTagsArray));
  }, [values.tags]);

  const handleTagDelete = (tag: string): void => {
    const currentTagsArray: string[] = removeItem(selectedTags, tag);
    console.log('currentTagsArray', currentTagsArray);
    setSelectedTags(currentTagsArray);
  };

  console.log('removeItem', removeItem(['a', 'b', 'c'], 'b'));

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
      <TagsBuilder
        selectedTags={selectedTags}
        handleTagDelete={handleTagDelete}
      />
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
