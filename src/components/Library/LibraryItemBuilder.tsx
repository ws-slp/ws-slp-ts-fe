import React from 'react';
import {Modulars} from '~/pages/library';

const LibraryItemBuilder = (props: Modulars) => {
  return (
    <div key={props.modular_id}>
      <h3>{props.name}</h3>
      {props.quantity ? <p>In Stock</p> : <p>Out of Stock</p>}
      {props.image_url ? (
        <img src={props.image_url} alt={props.name} />
      ) : (
        <p>No image available.</p>
      )}
    </div>
  );
};

export {LibraryItemBuilder};
