import React, { FC, useEffect, useRef, useState } from 'react';
import { usePrevieusDimensions } from './Desktop.helper';

import NextImage, { StaticImageData } from 'next/image';
import styles from './Desktop.module.scss';
import CloseIcon from 'public/icons/close.svg';
import MinimizeIcon from 'public/icons/minimize.svg';
import MaximizeIcon from 'public/icons/resize.svg';
import ResizerIcon from 'public/icons/resizer.png';

interface IDesktop {
  Component: FC<{ width: string | number }>;
  onClose: () => void;
  isActive: boolean;
  onMinimize: () => void;
  icon: StaticImageData;
}

export const Desktop = ({
  onClose,
  Component,
  isActive,
  onMinimize,
  icon,
}: IDesktop) => {
  const [clientHeight, setClientHeight] = useState(0);
  const [clientWidth, setClientWidth] = useState(0);
  const [top, setTop] = useState<string | number>(300);
  const [left, setLeft] = useState<string | number>(-900);
  const [width, setWidth] = useState<string | number>(900);
  const [height, setHeight] = useState<string | number>(700);
  const [isMax, setIsMax] = useState(false);
  const { prevHeight, prevWidth, prevTop, prevLeft } = usePrevieusDimensions({
    top,
    left,
    width,
    height,
    isMax,
  });

  const ref = useRef<HTMLDivElement>(null);
  const resizerRef = useRef<HTMLImageElement>(null);
  const [isDragging, setDragging] = useState(false);
  const dragProps = useRef<{ dragX: number; dragY: number }>();
  const dragRef = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: MouseEvent) => {
    if (clientHeight - e.clientY < 40) return;

    const currWidth = e.clientX - Number(left);
    const currHeight = e.clientY - Number(top);

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

    const x = clientX - dragX + Number(left);
    const y = clientY - dragY + Number(top);

    return { x, y };
  };

  const onMinMaxScreen = () => {
    setIsMax((prev) => !prev);
  };

  useEffect(() => {
    if (clientWidth < 800) {
      setWidth(400);
      setLeft((clientWidth - 400) / 2);
    } else {
      setLeft((clientWidth - Number(width)) / 2);
    }
  }, [clientWidth]);

  useEffect(() => {
    const onSetClientHeight = () => {
      setClientHeight(document.body.clientHeight);
    };
    onSetClientHeight();
    setClientWidth(document.body.clientWidth);

    window.addEventListener('resize', onSetClientHeight);

    return () => {
      window.removeEventListener('resize', onSetClientHeight);
    };
  }, []);

  useEffect(() => {
    if (isMax) {
      setTop(0);
      setLeft(0);
      setWidth(clientWidth);
      setHeight(clientHeight - 40);
    } else {
      setTop(prevTop);
      setLeft(prevLeft);
      setWidth(prevWidth);
      setHeight(prevHeight);
    }
    //eslint-disable-next-line
  }, [isMax]);

  return (
    <div
      className={`${styles.desktop} ${isActive ? styles.isActive : null}`}
      ref={ref}
      style={{
        width: width,
        height: height,
        top: top,
        left: left,
      }}
    >
      <div className={styles.inner}>
        <div className={styles.inner_inner}>
          <div className={styles.top}>
            <div className={styles.topIcon}>
              <NextImage src={icon} alt='main icon' />
            </div>
            <div className={styles.buttonsContainer}>
              <div onClick={onMinimize}>
                <NextImage src={MinimizeIcon} alt='minimize icon' />
              </div>
              <div onClick={onMinMaxScreen}>
                <NextImage src={MaximizeIcon} alt='maximize icon' />
              </div>
              <div onClick={onClose}>
                <NextImage src={CloseIcon} alt='close icon' />
              </div>
            </div>
          </div>
          <div className={styles.content}>
            <Component width={width} />
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
