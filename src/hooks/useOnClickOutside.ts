import { RefObject, useEffect } from 'react';

export function useOnClickOutside(
  ref: RefObject<HTMLElement>,
  handler: (event: MouseEvent | TouchEvent) => void
) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as HTMLElement)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', (e) => listener(e));
    document.addEventListener('touchstart', (e) => listener(e));
    return () => {
      document.removeEventListener('mousedown', (e) => listener(e));
      document.removeEventListener('touchstart', (e) => listener(e));
    };
  }, [ref, handler]);
}
