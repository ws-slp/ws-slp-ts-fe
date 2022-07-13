import {
  mockGetAllLibraryItems,
  mockSearchLibraryItemsByAvailability,
  mockSearchLibraryItemsByCategory,
  mockSearchLibraryItemsByName,
  mockSearchLibraryItemsByTags,
} from './mockData';
import {LibraryItem, Hardware, Book, DVD, Controller} from '~/models/models';

//Stub Cloud Functions for the Library Page

const getAllLibraryItems = (): Promise<
  ReadonlyArray<LibraryItem | Hardware | Book | DVD | Controller>
> => {
  const response = new Promise<
    Array<LibraryItem | Hardware | Book | DVD | Controller>
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
    Array<LibraryItem | Hardware | Book | DVD | Controller>
  >(resolve => {
    setTimeout(() => {
      resolve(mockSearchLibraryItemsByName);
    }, 500);
  });

  return response;
};

const searchLibraryItemByTags = (
  tags: string[]
): Promise<ReadonlyArray<LibraryItem | Hardware | Book | DVD | Controller>> => {
  const response = new Promise<
    Array<LibraryItem | Hardware | Book | DVD | Controller>
  >(resolve => {
    setTimeout(() => {
      resolve(mockSearchLibraryItemsByTags);
    }, 500);
  });

  return response;
};

const searchLibraryItemsByCategory = (
  category: string
): Promise<ReadonlyArray<LibraryItem | Hardware | Book | DVD | Controller>> => {
  const response = new Promise<
    Array<LibraryItem | Hardware | Book | DVD | Controller>
  >(resolve => {
    setTimeout(() => {
      resolve(mockSearchLibraryItemsByCategory);
    }, 500);
  });

  return response;
};

const searchLibraryItemsByAvailability = (
  availability: string
): Promise<ReadonlyArray<LibraryItem | Hardware | Book | DVD | Controller>> => {
  const response = new Promise<
    Array<LibraryItem | Hardware | Book | DVD | Controller>
  >(resolve => {
    setTimeout(() => {
      resolve(mockSearchLibraryItemsByAvailability);
    }, 500);
  });

  return response;
};

export {
  getAllLibraryItems,
  searchLibraryItemsByName,
  searchLibraryItemByTags,
  searchLibraryItemsByAvailability,
  searchLibraryItemsByCategory,
};
