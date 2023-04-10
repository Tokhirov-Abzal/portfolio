import React from 'react';
import styles from './Main.module.scss';

interface IMainProps {
  children: React.ReactNode;
}

export const Main = ({ children }: IMainProps) => {
  return <div className={styles.main_container}>{children}</div>;
};
