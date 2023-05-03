import React from 'react';
import styles from './Navbar.module.scss';

interface INavElement {
  title: string;
  active: boolean;
}

interface INavbar {
  data: INavElement[];
  className?: string;
  onClickHandler: (navItem: string) => void;
}

export const Navbar = ({ data, className, onClickHandler }: INavbar) => {
  return (
    <ul className={className}>
      {data.map((navItem) => (
        <li
          key={navItem.title}
          className={navItem.active ? styles.active : ''}
          onClick={() => onClickHandler(navItem.title)}
        >
          {navItem.title}
        </li>
      ))}
    </ul>
  );
};
