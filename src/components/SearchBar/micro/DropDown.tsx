import React from 'react';
import {getAllLibraryItems} from '~/lib/supabase/library/library';

interface DropDownProps {
  props: {
    label: string;
    items: string[];
  };
}

export default function DropDown({props}: DropDownProps) {
  return (
    <div className="dropdown dropdown">
      <label tabIndex={0} className="btn m-1">
        {props.label}
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        {props.items.map(item => {
          return (
            <li>
              <a>{item}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
