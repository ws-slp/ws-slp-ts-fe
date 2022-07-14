import React from 'react';
import {Tag} from '~/components/LibraryItemBuilder/micro/Tag';

interface TagsBuilderProps {
  selectedTags: string[];
  handleTagDelete?: (tag: string) => void;
}
const TagsBuilder = ({selectedTags, handleTagDelete}: TagsBuilderProps) => {
  return (
    <div>
      {selectedTags.map(tag => {
        if (tag) {
          return <Tag tag={tag} key={tag} handleTagDelete={handleTagDelete} />;
        }
      })}
    </div>
  );
};

export {TagsBuilder};
