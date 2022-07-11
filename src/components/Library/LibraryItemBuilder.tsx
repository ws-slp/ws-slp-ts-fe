import React from 'react';
import {Modulars} from '~/pages/library';

const LibraryItemBuilder = ({
  modular_id,
  name,
  image_url,
  quantity,
}: Modulars) => {
  console.log('modulars', image_url);
  return (
    <div key={modular_id}>
      <h3>{name}</h3>
      {quantity ? <p>In Stock</p> : <p>Out of Stock</p>}
      {image_url ? (
        <img src={image_url} alt={name} />
      ) : (
        <p>No image available.</p>
      )}
    </div>
  );
};

export {LibraryItemBuilder};
