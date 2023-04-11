import React, { ReactElement, ReactNode } from 'react';
import NextImage from 'next/image';
import styles from './Desktop.module.scss';
import CloseIcon from 'public/icons/close.svg';
import MinimizeIcon from 'public/icons/minimize.svg';
import MaximizeIcon from 'public/icons/resize.svg';

interface IDesktop {
  isOpen: boolean;
  onClose: () => void;
  renderBody: () => ReactElement;
}

export const Desktop = ({ isOpen, onClose, renderBody }: IDesktop) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.desktop}>
      <div className={styles.inner}>
        <div className={styles.inner_inner}>
          <div className={styles.top}>
            <div>
              <NextImage src={MinimizeIcon} alt='minimize icon' />
            </div>
            <div>
              <NextImage src={MaximizeIcon} alt='maximize icon' />
            </div>
            <div onClick={onClose}>
              <NextImage src={CloseIcon} alt='close icon' />
            </div>
          </div>
          {renderBody()}
        </div>
      </div>
    </div>
  );
};
