import core from '../index';

const {
  getAllLibraryItems,
  searchLibraryItemsByName,
  searchLibraryItemByTags,
  searchLibraryItemsByAvailability,
  searchLibraryItemsByCategory,
  searchAllLibraryItems,
} = core.library;

describe('call supabase stub functions', () => {
  test('call function getAllLibraryItems', () => {
    getAllLibraryItems();
    expect(getAllLibraryItems).toHaveBeenCalled();
  });
});
