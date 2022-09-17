import {
  mockGetAllLibraryItems,
  mockSearchLibraryItemsByAvailability,
  mockSearchLibraryItemsByCategory,
  mockSearchLibraryItemsByName,
  mockSearchLibraryItemsByTags,
  mockSearchAllLibraryItems,
} from './mockData';
import {TLibraryItems} from '~/models/models';

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
): Promise<ReadonlyArray<TLibraryItems>> => {
  const response = new Promise<Array<TLibraryItems>>(resolve => {
    setTimeout(() => {
      resolve(mockSearchLibraryItemsByName);
    }, 500);
  });

  return response;
};

const searchLibraryItemByTags = (
  tags: string[]
): Promise<ReadonlyArray<TLibraryItems>> => {
  const response = new Promise<Array<TLibraryItems>>(resolve => {
    setTimeout(() => {
      resolve(mockSearchLibraryItemsByTags);
    }, 500);
  });

  return response;
};

const searchLibraryItemsByCategory = (
  category: string
): Promise<ReadonlyArray<TLibraryItems>> => {
  const response = new Promise<Array<TLibraryItems>>(resolve => {
    setTimeout(() => {
      resolve(mockSearchLibraryItemsByCategory);
    }, 500);
  });

  return response;
};

const searchLibraryItemsByAvailability = (): Promise<
  ReadonlyArray<TLibraryItems>
> => {
  const response = new Promise<Array<TLibraryItems>>(resolve => {
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
): Promise<ReadonlyArray<TLibraryItems>> => {
  const response = new Promise<Array<TLibraryItems>>(resolve => {
    setTimeout(() => {
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
