import React, {Dispatch, SetStateAction, useEffect} from 'react';
import {removeItem, uniqueArray, useSearchFormFields} from './utils';
import DropDown from './micro/DropDown';
import {useState} from 'react';
import {TagsBuilder} from './micro/TagsBuilder';
import {DVD, Hardware, LibraryItem, Book, Controller} from '~/models/models';
import core from '~/lib/supabase';

export interface SearchBarState {
  name: string;
  category: string;
  availability: string;
  tags: string;
}
interface SearchBarProps {
  dropDownMeta: ReadonlyArray<DropDownMeta>;
  setLibraryItemList: Dispatch<
    SetStateAction<(LibraryItem | Hardware | Book | DVD | Controller)[]>
  >;
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

const SearchBar = ({dropDownMeta, setLibraryItemList}: SearchBarProps) => {
  const [values, handleChange, resetFormFields] =
    useSearchFormFields<SearchBarState>(initialFormState);

  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  useEffect(() => {
    const currentTagsArray: string[] = [...selectedTags, values.tags];
    setSelectedTags(uniqueArray(currentTagsArray));
    handleNewSearch();
  }, [values]);

  const handleTagDelete = (tag: string): void => {
    const currentTagsArray: string[] = removeItem(selectedTags, tag);
    console.log('currentTagsArray', currentTagsArray);
    setSelectedTags(currentTagsArray);
  };
  console.log('values', values);

  // NEED TO MOVE THIS FUNCTION OUT OF HERE.
  const handleNewSearch = () => {
    const {category, availability, tags, name} = values;
    if (category && name) {
      const fetchItems = async () => {
        const response = await core.library.searchAllLibraryItems(
          name,
          selectedTags,
          category,
          availability
        );
        setLibraryItemList([...response]);
      };
      fetchItems();
    }
    if (name) {
      const fetchItems = async () => {
        const response = await core.library.searchLibraryItemsByName(name);
        setLibraryItemList([...response]);
      };
      fetchItems();
    } else if (tags) {
      const fetchItems = async () => {
        const response = await core.library.searchLibraryItemByTags(
          selectedTags
        );
        setLibraryItemList([...response]);
      };
      fetchItems();
    } else if (availability) {
      const fetchItems = async () => {
        const response = await core.library.searchLibraryItemsByAvailability(
          availability
        );
        setLibraryItemList([...response]);
      };
      fetchItems();
    }
    return;
  };

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
