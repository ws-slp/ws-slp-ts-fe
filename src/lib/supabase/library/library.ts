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

const getAllLibraryItems = async (): Promise<ReadonlyArray<TLibraryItems>> => {
  const response = await new Promise<Array<TLibraryItems>>(resolve => {
    resolve(mockGetAllLibraryItems);
  });
  return response;
};

const searchLibraryItemsByName = async (
  name: string
): Promise<ReadonlyArray<TLibraryItems>> => {
  const response = await new Promise<Array<TLibraryItems>>(resolve => {
    resolve(mockSearchLibraryItemsByName);
  });
  return response;
};

const searchLibraryItemByTags = async (
  tags: string[]
): Promise<ReadonlyArray<TLibraryItems>> => {
  const response = await new Promise<Array<TLibraryItems>>(resolve => {
    resolve(mockSearchLibraryItemsByTags);
  });

  return response;
};

const searchLibraryItemsByCategory = async (
  category: string
): Promise<ReadonlyArray<TLibraryItems>> => {
  const response = await new Promise<Array<TLibraryItems>>(resolve => {
    resolve(mockSearchLibraryItemsByCategory);
  });

  return response;
};

const searchLibraryItemsByAvailability = async (): Promise<
  ReadonlyArray<TLibraryItems>
> => {
  const response = await new Promise<Array<TLibraryItems>>(resolve => {
    resolve(mockSearchLibraryItemsByAvailability);
  });

  return response;
};

const searchAllLibraryItems = async (
  name: string,
  tags: string[],
  category: string
): Promise<ReadonlyArray<TLibraryItems>> => {
  const response = await new Promise<Array<TLibraryItems>>(resolve => {
    resolve(mockSearchAllLibraryItems);
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
