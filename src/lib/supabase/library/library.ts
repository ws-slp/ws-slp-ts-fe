import {
  mockGetAllLibraryItems,
  mockSearchLibraryItemsByAvailability,
  mockSearchLibraryItemsByCategory,
  mockSearchLibraryItemsByName,
  mockSearchLibraryItemsByTags,
  mockSearchAllLibraryItems,
} from './mockData';
import {
  Accessory,
  Book,
  Controller,
  Film,
  Hardware,
  LibraryItem,
} from '~/models/models';

type TLibraryItems =
  | Accessory
  | Book
  | Controller
  | Film
  | Hardware
  | LibraryItem;

//Stub Cloud Functions for the Library Page

const getAllLibraryItems = (): Promise<ReadonlyArray<TLibraryItems>> => {
  const response = new Promise<Array<TLibraryItems>>(resolve => {
    setTimeout(() => {
      resolve(mockGetAllLibraryItems);
    }, 500);
  });

  return response;
};

const searchLibraryItemsByName = (
  name: string
): Promise<
  ReadonlyArray<LibraryItem | Hardware | Book | Film | Controller | Accessory>
> => {
  const response = new Promise<
    Array<LibraryItem | Hardware | Book | Film | Controller | Accessory>
  >(resolve => {
    setTimeout(() => {
      console.log('name', name);
      resolve(mockSearchLibraryItemsByName);
    }, 500);
  });

  return response;
};

const searchLibraryItemByTags = (
  tags: string[]
): Promise<
  ReadonlyArray<LibraryItem | Hardware | Book | Film | Controller | Accessory>
> => {
  const response = new Promise<
    Array<LibraryItem | Hardware | Book | Film | Controller | Accessory>
  >(resolve => {
    setTimeout(() => {
      console.log('tags', tags);
      resolve(mockSearchLibraryItemsByTags);
    }, 500);
  });

  return response;
};

const searchLibraryItemsByCategory = (
  category: string
): Promise<
  ReadonlyArray<LibraryItem | Hardware | Book | Film | Controller | Accessory>
> => {
  const response = new Promise<
    Array<LibraryItem | Hardware | Book | Film | Controller | Accessory>
  >(resolve => {
    setTimeout(() => {
      console.log('category', category);
      resolve(mockSearchLibraryItemsByCategory);
    }, 500);
  });

  return response;
};

const searchLibraryItemsByAvailability = (): Promise<
  ReadonlyArray<LibraryItem | Hardware | Book | Film | Controller | Accessory>
> => {
  const response = new Promise<
    Array<LibraryItem | Hardware | Book | Film | Controller | Accessory>
  >(resolve => {
    setTimeout(() => {
      resolve(mockSearchLibraryItemsByAvailability);
    }, 500);
  });

  return response;
};

const searchAllLibraryItems = (
  name: string,
  tags: string[],
  category: string
): Promise<
  ReadonlyArray<LibraryItem | Hardware | Book | Film | Controller | Accessory>
> => {
  const response = new Promise<
    Array<LibraryItem | Hardware | Book | Film | Controller | Accessory>
  >(resolve => {
    setTimeout(() => {
      console.table([name, tags, category]);
      resolve(mockSearchAllLibraryItems);
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
  searchAllLibraryItems,
};
