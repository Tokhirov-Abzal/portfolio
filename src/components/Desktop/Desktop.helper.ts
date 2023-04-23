import { useRef, useEffect } from 'react';

interface IUsePrevieusDimensions {
  width: string | number;
  top: string | number;
  left: string | number;
  height: string | number;
  isMax: boolean;
}

export function usePrevieusDimensions({
  width,
  top,
  left,
  height,
  isMax,
}: IUsePrevieusDimensions) {
  const dimRef = useRef({
    prevHeight: height,
    prevWidth: width,
    prevTop: top,
    prevLeft: left,
  });

  useEffect(() => {
    dimRef.current = {
      prevWidth: width,
      prevTop: top,
      prevLeft: left,
      prevHeight: height,
    };

    //eslint-disable-next-line
  }, [isMax]);

  return dimRef.current;
}
