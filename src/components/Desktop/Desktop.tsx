import React, {
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';
import NextImage from 'next/image';
import styles from './Desktop.module.scss';
import CloseIcon from 'public/icons/close.svg';
import MinimizeIcon from 'public/icons/minimize.svg';
import MaximizeIcon from 'public/icons/resize.svg';

interface IDesktop {
  Component: () => JSX.Element;
  onClose: () => void;
}

export const Desktop = ({ isOpen, onClose, Component }: IDesktop) => {
  const [top, setTop] = useState(200);
  const [left, setLeft] = useState(600);
  const [width, setWidth] = useState(700);
  const [height, setHeight] = useState(700);
  const ref = useRef<HTMLDivElement>(null);
  const resizerRef = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: MouseEvent) => {
    const currWidth = e.clientX - left;
    const currHeight = e.clientY - top;

    setWidth(currWidth);
    setHeight(currHeight);
  };

  const onStopResize = () => {
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onStopResize);
  };

  const onStartResizing = (e: MouseEvent) => {
    e.preventDefault();

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onStopResize);
  };

  return (
    <div
      className={styles.desktop}
      ref={ref}
      style={{ width, height, top, left }}
    >
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
          <Component />
        </div>
      </div>
      <div
        className={styles.resizer}
        ref={resizerRef}
        onMouseDown={onStartResizing}
      ></div>
    </div>
  );
};
