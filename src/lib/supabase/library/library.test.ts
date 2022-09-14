import core from '../index';

const {getAllLibraryItems} = core.library;

describe('call supabase stub functions', () => {
  test('call function getAllLibraryItems', () => {
    getAllLibraryItems();
    expect(getAllLibraryItems).toHaveBeenCalled();
  });
});
