import Layout from '../components/Layout';
import {useState, useEffect} from 'react';
import {LibraryItemBuilder} from '../components/LibraryItemBuilder/LibraryItemBuilder';
import {LibraryItem, Controller, Hardware, Book, DVD} from '~/models/models';
import {SearchBar} from '~/components/SearchBar/SeartchBar';
import core from '../lib/supabase/index';

const Library: React.FunctionComponent = () => {
  const [libraryItemList, setLibraryItemList] = useState<
    Array<LibraryItem | Hardware | Book | DVD | Controller>
  >([]);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await core.library.getAllLibraryItems();
      setLibraryItemList([...response]);
    };
    fetchItems();
  }, []);

  return (
    <>
      <Layout>
        <h2>welcome to the library</h2>
        <SearchBar></SearchBar>
        <div style={styles.container}>
          {libraryItemList.map(item => (
            <LibraryItemBuilder key={item.inventory_id} item={item} />
          ))}
        </div>
      </Layout>
    </>
  );
};

export default Library;

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-evenly',
    gap: '20px',
  },
};
