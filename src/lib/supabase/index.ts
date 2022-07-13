export * from './supabase';
import {
  getAllLibraryItems,
  searchLibraryItemsByName,
  searchLibraryItemByTags,
  searchLibraryItemsByAvailability,
  searchLibraryItemsByCategory,
} from './library/library';

const core = {
  library: {
    getAllLibraryItems,
    searchLibraryItemsByName,
    searchLibraryItemByTags,
    searchLibraryItemsByAvailability,
    searchLibraryItemsByCategory,
  },
};

export default core;
