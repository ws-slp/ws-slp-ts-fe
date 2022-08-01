/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import {useState} from 'react';
import {LibraryItem, Hardware, Book, DVD, Controller} from '~/models/models';
import {SearchBarState} from './SearchBar';
import core from '~/lib/supabase';

export function useSearchFormFields<T>(
  initialValues: T
): [
  T,
  (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void,
  () => void
] {
  const [values, setValues] = useState<T>(initialValues);
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    event.persist();
    const {target} = event;
    const {name, value} = target;
    setValues({...values, [name]: value});
  };
  const resetFormFields = () => setValues(initialValues);
  return [values, handleChange, resetFormFields];
}

export const uniqueArray = (array: any[]) => {
  return array.reduce((acc, next) => {
    if (!acc.includes(next)) {
      acc.push(next);
    }
    return acc;
  }, []);
};

export const removeItem = (array: any[], itemToBeRemoved: any) => {
  return array.filter(item => {
    return item !== itemToBeRemoved;
  });
};

export const dropDownPropGetter = (
  libraryItems: Array<LibraryItem | Hardware | Book | DVD | Controller>,
  label: 'tags' | 'availability'
) => {
  const dropDownProp = libraryItems.reduce(
    (acc, next) => {
      if (typeof next[label] === 'string') {
        return {...acc, label, items: uniqueArray([...acc.items, next[label]])};
      }
      return {
        ...acc,
        label,
        items: uniqueArray([...acc.items, ...(next[label] as Array<string>)]),
      };
    },
    {label, items: []}
  );
  return dropDownProp;
};

const truthyCounter = (values: SearchBarState): number => {
  const total: number = Object.values(values).reduce((acc, value) => {
    if (value) {
      return (acc += 1);
    }
    return acc;
  }, 0);
  return total;
};

export const handleNewSearch = async (
  values: SearchBarState,
  selectedTags: string[]
): Promise<Array<LibraryItem | Hardware | Book | DVD | Controller>> => {
  const {category, availability, tags, name} = values;
  try {
    if (truthyCounter(values) > 1) {
      const response = await core.library.searchAllLibraryItems(
        name,
        selectedTags,
        category,
        availability
      );
      return [...response];
    }

    if (category) {
      const response = await core.library.searchLibraryItemsByCategory(
        category
      );
      return [...response];
    }

    if (availability) {
      const response = await core.library.searchLibraryItemsByAvailability(
        availability
      );
      return [...response];
    }

    if (name) {
      const response = await core.library.searchLibraryItemsByName(name);
      return [...response];
    }

    if (selectedTags.length > 0) {
      const response = await core.library.searchLibraryItemByTags(selectedTags);
      return [...response];
    }

    return [];
  } catch (err) {
    console.error(err);
    return [];
  }
};
