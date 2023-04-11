import React, { FC, useCallback, useRef, useState } from 'react';
import NextImage, { StaticImageData } from 'next/image';
import styles from './CommonFile.module.scss';
import { useOnClickOutside } from 'hooks/useOnClickOutside';

interface ICommonFile {
  src: StaticImageData;
  alt: string;
  title: string;
  onDesktopOpen?: (arg: boolean) => void;
}

export const CommonFile: FC<ICommonFile> = ({
  src,
  alt,
  title,
  onDesktopOpen,
}) => {
  const [active, setActive] = useState(false);
  const ref = useRef(null);

  const onClickOutside = useCallback(() => {
    setActive(false);
  }, []);

  const onClickHandler = useCallback(() => {
    setActive(true);
  }, []);

  useOnClickOutside(ref, onClickOutside);

  return (
    <div
      className={`${styles.file_wrapper} ${active ? styles.active : null}`}
      onClick={onClickHandler}
      onDoubleClick={() => onDesktopOpen?.(true)}
      ref={ref}
      draggable
    >
      <NextImage className={styles.file_icon} src={src} alt={alt} />
      <h1 className={styles.file_title}>{title}</h1>
    </div>
  );
};
