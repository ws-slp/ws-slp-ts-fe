import Layout from '../components/Layout';
import {useState, useEffect} from 'react';
import {LibraryItemBuilder} from '../components/Library/LibraryItemBuilder';
import {LibraryItem, Controller, Hardware, Book, DVD} from '~/models/models';
import {getAllLibraryItems} from '~/lib/supabase/library/library';

const Library: React.FunctionComponent = () => {
  const [libraryItemList, setLibraryItemList] = useState<
    LibraryItem[] | Controller[] | Hardware[] | Book[] | DVD[]
  >([]);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await getAllLibraryItems();
      if (response) {
        setLibraryItemList(response);
      }
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
