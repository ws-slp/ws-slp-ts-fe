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
// TODO: console.logs are only for getting rid of unused variable errors, delete them when implementing backend/supabase.

const getAllLibraryItems = async (): Promise<ReadonlyArray<TLibraryItems>> => {
  const response = await new Promise<Array<TLibraryItems>>(resolve => {
    resolve(mockGetAllLibraryItems);
  });
  return response;
};

const searchLibraryItemsByName = async (
  name: string
): Promise<ReadonlyArray<TLibraryItems>> => {
  console.log('name', name);
  const response = await new Promise<Array<TLibraryItems>>(resolve => {
    resolve(mockSearchLibraryItemsByName);
  });
  return response;
};

const searchLibraryItemByTags = async (
  tags: string[]
): Promise<ReadonlyArray<TLibraryItems>> => {
  console.log('tags', tags);
  const response = await new Promise<Array<TLibraryItems>>(resolve => {
    resolve(mockSearchLibraryItemsByTags);
  });

  return response;
};

const searchLibraryItemsByCategory = async (
  category: string
): Promise<ReadonlyArray<TLibraryItems>> => {
  console.log('category', category);
  const response = await new Promise<Array<TLibraryItems>>(resolve => {
    resolve(mockSearchLibraryItemsByCategory);
  });

  return response;
};

const searchLibraryItemsByAvailability = async (
  availability: string
): Promise<ReadonlyArray<TLibraryItems>> => {
  console.log('availability', availability);
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
  console.log('search params', name, tags, category);
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
