import React from 'react';

const Tag = ({tag}: any) => {
  return <div style={styles.tag}>{tag}</div>;
};

export {Tag};

const styles = {
  tag: {
    width: '50px',
    backgroundColor: 'pink',
    color: 'black',
    fontSize: '.5em',
    borderRadius: '.5em',
    margin: '1em',
  },
};
