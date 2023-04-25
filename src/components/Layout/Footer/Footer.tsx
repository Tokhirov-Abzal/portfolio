import React, { useContext, useState } from 'react';
import styles from './Footer.module.scss';
import { CommonButton } from 'components/Buttons/CommonButton/CommonButton';
import StartIcon from 'public/icons/start.svg';
import { Time } from 'components/Buttons/Time/Time';
import { DesktopContext } from 'helpers/Desktop.context';
import NextImage from 'next/image';

export const Footer = () => {
  const { desktopArr, setDesktopArr } = useContext(DesktopContext);

  const onClickHandler = (id: string) => {
    setDesktopArr((prev) =>
      prev.map((item) =>
        item.key === id ? { ...item, isActive: !item.isActive } : item
      )
    );
  };

  return (
    <div className={styles.footer}>
      <CommonButton
        icon={StartIcon}
        alt='start icon'
        title='Start'
        onClickHandler={() => {}}
      />
      <div className={styles.taskbar}>
        {desktopArr.map((item) => (
          <div
            key={item.key}
            className={`${styles.taskbar_item} ${
              item.isActive ? styles['taskbar_item-active'] : null
            }`}
            onClick={() => onClickHandler(item.key)}
          >
            <NextImage src={item.icon} alt={item.title} />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
      <Time />
    </div>
  );
};
