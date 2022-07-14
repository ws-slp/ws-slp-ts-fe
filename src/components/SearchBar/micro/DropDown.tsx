import React, {ChangeEventHandler} from 'react';

export interface DropDownProps {
  props: {
    label: string;
    items: string[];
    handleChange: ChangeEventHandler<HTMLSelectElement>;
  };
}

export default function DropDown({props}: DropDownProps) {
  return (
    <section className={styles.section}>
      <div className={styles.div}>
        <label tabIndex={0} className="m-1">
          {`${props.label}:`}
        </label>
        <select
          tabIndex={0}
          className={styles.select}
          onChange={props.handleChange}
          name={props.label}
        >
          {props.items.map(item => {
            return (
              <option value={item} key={item}>
                {item}
              </option>
            );
          })}
        </select>
      </div>
    </section>
  );
}

const styles = {
  section: 'flex-row',
  div: '',
  select:
    'dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 select-ghost m-1',
};
