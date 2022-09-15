import core from '../index';

const {getAllLibraryItems} = core.library;
//TODO: actually write test for each cloud function.
describe('call supabase stub functions', () => {
  test('call function getAllLibraryItems', () => {
    getAllLibraryItems();
    expect(getAllLibraryItems).toHaveBeenCalled();
  });
});
