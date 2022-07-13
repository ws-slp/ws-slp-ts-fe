import {INSPECT_MAX_BYTES} from 'buffer';
import React from 'react';
import {LibraryItem, Controller, Hardware, Book, DVD} from '~/models/models';
import {Tag} from './micro/Tag';

interface ItemProps {
  item: Controller | Hardware | Book | DVD | LibraryItem;
}

const LibraryItemBuilder: React.FunctionComponent<ItemProps> = ({item}) => {
  console.log('item', item);
  return (
    <div key={item.inventory_id} style={styles.card}>
      <h3>{item.name}</h3>
      {item.image_url ? (
        <img src={item.image_url} alt={item.name} style={styles.image} />
      ) : (
        <p>No image available.</p>
      )}
      <div style={styles.tagsContainer}>
        {item.tags && item.tags.map(tag => <Tag tag={tag}></Tag>)}
      </div>
      <text>Availability: {item.availability}</text>
    </div>
  );
};

export {LibraryItemBuilder};

const styles = {
  image: {width: '200px'},
  tagsContainer: {
    display: 'flex',
  },
  card: {
    border: 'black 2px solid',
    margin: '2em',
    width: '210px',
    borderRadius: '.5em',
    padding: '.5em',
  },
};
