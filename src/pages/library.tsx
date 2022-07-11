import Layout from '../components/Layout';
import {useState, useEffect} from 'react';
import {supabase} from '~/lib/supabase';
import {LibraryItemBuilder} from '../components/Library/LibraryItemBuilder';

export interface Modular {
  inventory_id: number;
  created_at: Date;
  updated_at: Date;
  name: string;
  quantity: number;
  image_url: string | null;
  manufacturer: string | null;
  model: string | null;
  weight: number | null;
  description: string | null;
  accessories: string | null;
}

const Library: React.FunctionComponent = () => {
  const [modulars, setModulars] = useState<Modular[]>([]);

  useEffect(() => {
    const fetchModulars = async () => {
      const {error, data} = await supabase
        .from<Modular>('modulars')
        .select('*');
      if (!error) {
        setModulars(data);
      }
    };
    fetchModulars();
  }, []);

  return (
    <>
      <Layout>
        <h2>welcome to the library</h2>
        {modulars.map(modular => (
          <LibraryItemBuilder item={modular} />
        ))}
      </Layout>
    </>
  );
};

export default Library;
