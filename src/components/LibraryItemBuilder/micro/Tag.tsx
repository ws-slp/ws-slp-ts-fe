import React from 'react';

interface TagProps {
  tag: string;
  handleTagDelete?: (tag: string) => void;
}
const Tag = ({tag, handleTagDelete}: TagProps) => {
  const handleClick = () => {
    console.log('tag', tag);
    if (handleTagDelete) {
      handleTagDelete(tag);
    }
  };
  return (
    <div className={styles.tag}>
      {tag}
      <button onClick={handleClick}>x</button>
    </div>
  );
};

export {Tag};

const styles = {
  tag: 'badge badge-md gap-2',
};
