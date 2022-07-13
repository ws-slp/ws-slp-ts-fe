import {mockGetAllLibraryItems} from './mockData';
import {LibraryItem, Hardware, Book, DVD, Controller} from '~/models/models';

const getAllLibraryItems = () => {
  const response = new Promise<
    LibraryItem[] | Hardware[] | Book[] | DVD[] | Controller[]
  >(resolve => {
    setTimeout(() => {
      resolve(mockGetAllLibraryItems);
    }, 500);
  });

  console.log(response, 'response');
  return response;
};

export {getAllLibraryItems};
