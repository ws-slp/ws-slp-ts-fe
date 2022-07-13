import Layout from '../components/Layout';
import {useState, useEffect} from 'react';
import {LibraryItemBuilder} from '../components/LibraryItemBuilder/LibraryItemBuilder';
import {LibraryItem, Controller, Hardware, Book, DVD} from '~/models/models';
import core from '../lib/supabase/index';

const Library: React.FunctionComponent = () => {
  const [libraryItemList, setLibraryItemList] = useState<
    Array<LibraryItem | Hardware | Book | DVD | Controller>
  >([]);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await core.library.searchLibraryItemByTags([
        'something',
      ]);
      setLibraryItemList([...response]);
    };
    fetchItems();
  }, []);

  return (
    <>
      <Layout>
        <h2>welcome to the library</h2>
        {libraryItemList.map(item => (
          <LibraryItemBuilder key={item.inventory_id} item={item} />
        ))}
      </Layout>
    </>
  );
};

export default Library;
