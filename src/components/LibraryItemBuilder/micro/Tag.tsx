import React from 'react';

interface TagProps {
  tag: string;
}
const Tag = ({tag}: TagProps) => {
  return <div className={styles.tag}>{tag}</div>;
};

export {Tag};

const styles = {
  tag: 'badge badge-md gap-2',
};
