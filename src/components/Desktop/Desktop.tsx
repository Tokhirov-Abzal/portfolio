import React, { useEffect, useRef, useState } from 'react';
import NextImage from 'next/image';
import styles from './Desktop.module.scss';
import CloseIcon from 'public/icons/close.svg';
import MinimizeIcon from 'public/icons/minimize.svg';
import MaximizeIcon from 'public/icons/resize.svg';
import ResizerIcon from 'public/icons/resizer.png';

interface IDesktop {
  Component: () => JSX.Element;
  onClose: () => void;
}

export const Desktop = ({ isOpen, onClose, Component }: IDesktop) => {
  const [top, setTop] = useState(400);
  const [left, setLeft] = useState(400);
  const [width, setWidth] = useState(700);
  const [height, setHeight] = useState(700);

  const [clientHeight, setClientHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const resizerRef = useRef<HTMLImageElement>(null);
  const [isDragging, setDragging] = useState(false);
  const dragProps = useRef<{ dragX: number; dragY: number }>();
  const dragRef = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: MouseEvent) => {
    const currWidth = e.clientX - left;
    const currHeight = e.clientY - top;

    if (currWidth > 400) {
      setWidth(currWidth);
    }
    if (currHeight > 400) {
      setHeight(currHeight);
    }
  };

  const onStopResize = () => {
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onStopResize);
  };

  const onStartResizing = (e: any) => {
    e.preventDefault();

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onStopResize);
  };

  const onStartDrag = (e: any) => {
    setDragging(true);
    e.preventDefault();
    dragProps.current = { dragX: e.clientX, dragY: e.clientY };

    window.addEventListener('mousemove', onDrag, false);
    window.addEventListener('mouseup', onStopDrag, false);
  };

  const onDrag = ({ clientX, clientY }: any) => {
    const { x, y } = getDragPropsXY(clientX, clientY);

    if (clientHeight - y < 70 || y <= 0) return;
    setTop(y);
    setLeft(x);
  };

  const onStopDrag = () => {
    setDragging(false);

    window.removeEventListener('mousemove', onDrag, false);
    window.removeEventListener('mouseup', onStopDrag, false);
  };

  const getDragPropsXY = (
    clientX: number,
    clientY: number
  ): { x: number; y: number } => {
    if (!dragProps.current) return { x: 0, y: 0 };
    const { dragX, dragY } = dragProps.current;

    const x = clientX - dragX + left;
    const y = clientY - dragY + top;

    return { x, y };
  };

  useEffect(() => {
    const onSetClientHeight = () => {
      setClientHeight(document.body.clientHeight);
    };
    onSetClientHeight();

    window.addEventListener('resize', onSetClientHeight);

    return () => {
      window.removeEventListener('resize', onSetClientHeight);
    };
  }, []);

  return (
    <div
      className={styles.desktop}
      ref={ref}
      style={{
        width: width + 'px',
        height: height + 'px',
        top: top + 'px',
        left: left + 'px',
      }}
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
          <div className={styles.content}>
            <Component />
          </div>
          <div className={styles.bottom}>
            <div>&copy;Abzal Tokhirov</div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <div className={styles.resizer} onMouseDown={onStartResizing}>
        <NextImage src={ResizerIcon} ref={resizerRef} alt='resize icon' />
      </div>
      <div
        ref={dragRef}
        onMouseDown={onStartDrag}
        className={`${styles.dragArea} ${
          isDragging ? styles.isDragging : null
        }`}
      ></div>
    </div>
  );
};
