import React from 'react';
import styles from './About.module.scss';

export const About = () => {
  return (
    <div className={styles.container}>
      Hello!
      <p>
        I&apos;m <strong>Abzal Tokhirov</strong>, a Frontend Engineer with a
        strong background in{' '}
        <strong>ReactJS, NextJS, Typescript, Redux,</strong> and{' '}
        <strong>Mobx</strong>. I have 2 years of professional experience.
        Through these years, I&apos;ve worked on various web applications using
        modern technology stack and best practices. I always collaborate with my
        team of developers to deliver high-quality code and improve overall
        application performance. I&apos;ve also maintained unit tests using Jest
        and React testing library. To create visually appealing and
        user-friendly applications, I utilize Antd and Material UI libraries for
        styling and UI components.
      </p>
      <p>
        I&apos;m always eager to learn and take on new challenges, and I&apos;m
        passionate about creating high-quality applications that meet and exceed
        client expectations.
      </p>
      <div className={styles.skills}>
        <h3>Skills:</h3>

        <ul className={styles.skills_list}>
          <li>Typescript (Javascript)</li>
          <li>-React JS, NextJS</li>
          <li>-Redux , Mobx</li>
          <li>-SCSS, Antd</li>
          <li>-Jest, React testing library</li>
          <li>-Node JS, ExpressJS</li>
          <li>-Webpack, Vite</li>
        </ul>
      </div>
    </div>
  );
};
