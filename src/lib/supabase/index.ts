export * from './supabase';
import {
  getAllLibraryItems,
  searchLibraryItemsByName,
  searchLibraryItemByTags,
} from './library/library';

const core = {
  library: {
    getAllLibraryItems,
    searchLibraryItemsByName,
    searchLibraryItemByTags,
  },
};

export default core;
