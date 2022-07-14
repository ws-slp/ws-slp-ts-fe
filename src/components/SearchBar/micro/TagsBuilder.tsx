import React from 'react';
import {Tag} from '~/components/LibraryItemBuilder/micro/Tag';

interface TagsBuilderProps {
  selectedTags: string[];
}
const TagsBuilder = ({selectedTags}: TagsBuilderProps) => {
  return (
    <div>
      {selectedTags.map(tag => {
        if (tag) {
          return <Tag tag={tag} key={tag}></Tag>;
        }
      })}
    </div>
  );
};

export {TagsBuilder};
