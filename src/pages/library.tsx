import Layout from '../components/Layout';
import {useState, useEffect} from 'react';
import {supabase} from '~/lib/supabase';

interface Library {
  modulars: {
    modular_id: number;
    created_at: Date;
    updated_at: Date;
    name: string;
    quantity: number;
    image_url: string;
    manufacturer: string;
    model: string;
    weight: number;
    description: string;
    accessories: string;
  };
}

const Library = () => {
  const [modulars, setModulars] = useState<Library['modulars'][]>([]);

  useEffect(() => {
    const fetchModulars = async () => {
      const {error, data} = await supabase
        .from<Library['modulars']>('modulars')
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
        {modulars.map(item => (
          <div key={item.modular_id}>
            <h3>{item.name}</h3>
            {item.quantity ? <p>In Stock</p> : <p>Out of Stock</p>}
            <img src={item.image_url} alt={item.name} />
            <ul>
              Item Details
              <li>Manufacturer: {item.manufacturer}</li>
              <li>Model: {item.model}</li>
              <li>Weight: {item.weight}</li>
              <li>Accessories: {item.accessories}</li>
            </ul>
            Description:
            <p>{item.description}</p>
          </div>
        ))}
      </Layout>
    </>
  );
};

export default Library;
