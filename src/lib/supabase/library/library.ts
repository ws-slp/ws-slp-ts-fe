import {mockGetAllLibraryItems, mockSearchLibraryItemsByName} from './mockData';
import {LibraryItem, Hardware, Book, DVD, Controller} from '~/models/models';

//Stub Cloud Functions for the Library Page

const getAllLibraryItems = (): Promise<
  ReadonlyArray<LibraryItem | Hardware | Book | DVD | Controller>
> => {
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
const searchLibraryItemsByName = (
  name: string
): Promise<ReadonlyArray<LibraryItem | Hardware | Book | DVD | Controller>> => {
  const response = new Promise<
    LibraryItem[] | Hardware[] | Book[] | DVD[] | Controller[]
  >(resolve => {
    setTimeout(() => {
      resolve(mockSearchLibraryItemsByName);
    }, 500);
  });

  return response;
};

export {getAllLibraryItems, searchLibraryItemsByName};
