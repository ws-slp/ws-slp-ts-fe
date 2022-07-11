import React from 'react';
import {Modular} from '../../pages/library';

/* ItemProps will eventually be a union type; eg. item: Modular | Book | DVD | ..., */
interface ItemProps {
  item: Modular;
}

const LibraryItemBuilder: React.FunctionComponent<ItemProps> = props => {
  return (
    <div key={props.item.inventory_id}>
      <h3>{props.item.name}</h3>
      {props.item.quantity ? <p>In Stock</p> : <p>Out of Stock</p>}
      {props.item.image_url ? (
        <img src={props.item.image_url} alt={props.item.name} />
      ) : (
        <p>No image available.</p>
      )}
    </div>
  );
};

export default LibraryItemBuilder;
