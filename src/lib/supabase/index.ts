export * from './supabase';
import {
  getAllLibraryItems,
  searchLibraryItemsByName,
  searchLibraryItemByTags,
  searchLibraryItemsByAvailability,
  searchLibraryItemsByCategory,
  searchAllLibraryItems,
} from './library/library';

const core = {
  library: {
    getAllLibraryItems,
    searchLibraryItemsByName,
    searchLibraryItemByTags,
    searchLibraryItemsByAvailability,
    searchLibraryItemsByCategory,
    searchAllLibraryItems,
  },
};

export default core;
