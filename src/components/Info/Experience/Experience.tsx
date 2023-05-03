import React from 'react';
import styles from './Experience.module.scss';

export const Experience = () => {
  return (
    <div className={styles.experience_container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h1>EPAM Systems</h1>
          <a href='https://www.epam.com' target='_blank'>
            <h3 className={styles.link}>www.epam.com</h3>
            <h2>Frontend Engineer</h2>
            <h2>(2021 Oct-2023 May)</h2>
          </a>
        </div>
        <div>
          <ul>
            <li>
              Worked on various web applications using ReactJS, NextJS, Redux,
              and Typescript.
            </li>
            <li>
              Utilized Antd and Material UI libraries for styling and UI
              components.
            </li>
            <li>Implemented new features using Clean Code principles</li>
            <li>Increased the test coverage from 40% to 70%</li>
            <li>Optimized application performance</li>
            <li>Participated in Scrum ceremonies</li>
          </ul>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <h1>EPAM RD Lab</h1>
          <a href='https://www.epam.com' target='_blank'>
            <h3 className={styles.link}>www.epam.com</h3>
            <h2>Intern</h2>
            <h2>(2021 May-2021 Oct)</h2>
          </a>
        </div>
        <div>
          <ul>
            <li>Fixed bugs</li>
            <li>Cover project with unit tests</li>
            <li>Improved my theoretical and practical knowledge</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
