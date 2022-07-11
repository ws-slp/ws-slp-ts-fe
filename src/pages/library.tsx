/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import Layout from '../components/Layout';
import {useState, useEffect} from 'react';
import {supabase} from '~/lib/supabase';
import LibraryItemBuilder from '../components/Library/LibraryItemBuilder';

export interface Modulars {
  modular_id: number;
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
  const [modulars, setModulars] = useState<Modulars[]>([]);

  useEffect(() => {
    const fetchModulars = async () => {
      const {error, data} = await supabase
        .from<Modulars>('modulars')
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
        {modulars.map(item => {
          console.log(item);
          <LibraryItemBuilder key={item.modular_id} props={item} />;
        })}
      </Layout>
    </>
  );
};

export default Library;
