import React from 'react';
import Image, { StaticImageData } from 'next/image';

import styles from './CommonButton.module.scss';

interface CommonButton {
  icon: StaticImageData;
  alt: string;
  title: string;
  onClickHandler: () => void;
}

export const CommonButton = ({
  title,
  icon,
  alt,
  onClickHandler,
}: CommonButton) => {
  return (
    <button className={styles.button} onClick={onClickHandler}>
      <Image src={icon} alt={alt} className={styles.buttonIcon} />
      <h3>{title}</h3>
    </button>
  );
};
