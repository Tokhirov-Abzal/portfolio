import React, { useEffect, useState } from 'react';
import styles from './Time.module.scss';

export const Time = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      const hours = date.getHours();
      const minutes = date.getMinutes();

      setTime(
        `${hours < 10 ? '0' + hours.toString() : hours}:${
          minutes < 10 ? '0' + minutes.toString() : minutes
        }`
      );
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <div className={styles.time}>{time}</div>;
};
