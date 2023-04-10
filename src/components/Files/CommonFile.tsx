import React, {
  FC,
  MouseEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import NextImage, { StaticImageData } from 'next/image';
import styles from './CommonFile.module.scss';
import { useOnClickOutside } from 'hooks/useOnClickOutside';

interface ICommonFile {
  src: StaticImageData;
  alt: string;
  title: string;
}

export const CommonFile: FC<ICommonFile> = ({ src, alt, title }) => {
  const [active, setActive] = useState(false);
  const ref = useRef(null);

  const onClickHandler = useCallback(() => {
    setActive(false);
  }, []);

  useOnClickOutside(ref, onClickHandler);

  return (
    <div
      className={`${styles.file_wrapper} ${active ? styles.active : null}`}
      onClick={() => setActive(true)}
      ref={ref}
    >
      <NextImage className={styles.file_icon} src={src} alt={alt} />
      <h1 className={styles.file_title}>{title}</h1>
    </div>
  );
};
