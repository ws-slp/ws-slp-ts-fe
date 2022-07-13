import React from 'react';
import {LibraryItem, Controller, Hardware, Book, DVD} from '~/models/models';

/* ItemProps will eventually be a union type; eg. item: Modular | Book | DVD | ..., */
interface ItemProps {
  item: Controller | Hardware | Book | DVD | LibraryItem;
}

const LibraryItemBuilder: React.FunctionComponent<ItemProps> = ({item}) => {
  return (
    <div key={item.inventory_id}>
      <h3>{item.name}</h3>
      {item.quantity ? <p>In Stock</p> : <p>Out of Stock</p>}
      {item.image_url ? (
        <img src={item.image_url} alt={item.name} />
      ) : (
        <p>No image available.</p>
      )}
    </div>
  );
};

export {LibraryItemBuilder};
