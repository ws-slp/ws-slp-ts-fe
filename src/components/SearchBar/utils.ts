import {useState} from 'react';

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
    if (!array.includes(itemToBeRemoved)) {
      return item;
    }
    return;
  });
};
