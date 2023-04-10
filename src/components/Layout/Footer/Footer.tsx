import React from 'react';
import styles from './Footer.module.scss';
import { CommonButton } from 'components/Buttons/CommonButton/CommonButton';
import StartIcon from 'public/icons/start.svg';
import { Time } from 'components/Buttons/Time/Time';

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <CommonButton
        icon={StartIcon}
        alt='start icon'
        title='Start'
        onClickHandler={() => {}}
      />
      <Time />
    </div>
  );
};
