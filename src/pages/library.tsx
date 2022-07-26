import Layout from '../components/Layout';
import {useState, useEffect} from 'react';
import {LibraryItemBuilder} from '../components/LibraryItemBuilder/LibraryItemBuilder';
import {LibraryItem, Controller, Hardware, Book, DVD} from '~/models/models';
import {DropDownMeta, SearchBar} from '~/components/SearchBar/SearchBar';
import core from '../lib/supabase/index';
import {dropDownPropGetter} from '~/components/SearchBar/utils';

const Library: React.FunctionComponent = () => {
  const [libraryItemList, setLibraryItemList] = useState<
    Array<LibraryItem | Hardware | Book | DVD | Controller>
  >([]);
  const [dropDownProps, setDropDownProps] = useState<Array<DropDownMeta>>([]);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await core.library.getAllLibraryItems();
      setLibraryItemList([...response]);
    };
    fetchItems();
  }, []);

  useEffect(() => {
    const setProps = async () => {
      const tagsDropDownProp = dropDownPropGetter(libraryItemList, 'tags');
      const availabilityDropDownProp = dropDownPropGetter(
        libraryItemList,
        'availability'
      );
      setDropDownProps([
        {
          label: 'category',
          items: ['hardware', 'books'],
        },
        availabilityDropDownProp,
        tagsDropDownProp,
      ]);
    };
    setProps();
  }, [libraryItemList]);

  return (
    <>
      <Layout>
        <h2>welcome to the library</h2>
        <SearchBar
          dropDownMeta={dropDownProps}
          setLibraryItemList={setLibraryItemList}
        />
        <div className={styles.container}>
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
  container: 'flex flex-row flex-wrap',
};
