/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import {useState} from 'react';
import {LibraryItem, Hardware, Book, DVD, Controller} from '~/models/models';
import {MouseEvent} from 'react';

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
