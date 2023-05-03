import React, { FC, useRef, useState } from 'react';
import { Navbar } from 'components/Navbar/Navbar';
import { About } from './About/About';
import { Experience } from './Experience/Experience';

import styles from './Info.module.scss';

const navItems = [
  { title: 'About', active: true, Component: About },
  { title: 'Experience', active: false, Component: Experience },
  { title: 'Contact ', active: false, Component: About },
];

export const Info = ({ width }: { width: number | string }) => {
  const ref = useRef(null);
  const [data, setData] = useState(navItems);
  const ActiveContent = data.find((item) => Boolean(item.active))
    ?.Component as FC;

  const onClickHandler = (title: string) => {
    setData((prev) =>
      prev.map((item) =>
        item.title === title
          ? { ...item, active: true }
          : { ...item, active: false }
      )
    );
  };

  return (
    <div className={styles.about_container} ref={ref}>
      <div className={styles.title}>
        <h1>Abzal</h1>
        <h1>Tokhirov</h1>
      </div>
      <div
        className={`${styles.content} ${
          Number(width) < 800 ? styles.flex_column : ''
        }`}
      >
        <div className={styles.left_side}>
          <Navbar
            className={styles.navbar}
            data={data}
            onClickHandler={onClickHandler}
          />
        </div>
        <div
          className={`${styles.right_side} ${
            Number(width) < 800 ? styles.flex_column : ''
          }`}
        >
          <ActiveContent />
        </div>
      </div>
    </div>
  );
};
