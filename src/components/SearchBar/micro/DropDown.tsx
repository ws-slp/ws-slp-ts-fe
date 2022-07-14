import React from 'react';

interface DropDownProps {
  props: {
    label: string;
    items: string[];
  };
}

export default function DropDown({props}: DropDownProps) {
  return (
    <div className={styles.div}>
      <label tabIndex={0} className="btn m-1">
        {props.label}
      </label>
      <ul tabIndex={0} className={styles.ul}>
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

const styles = {
  div: 'dropdown dropdown',
  ul: 'dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52',
};
