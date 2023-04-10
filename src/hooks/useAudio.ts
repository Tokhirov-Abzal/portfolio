import { useRef, useState, useEffect } from 'react';

interface useAudioProps {
  volumeObj: { volume1: number; volume2: number };
}

export function useAudio<T extends useAudioProps>({ volumeObj }: T) {
  const ref = useRef<{ sound1: HTMLAudioElement; sound2: HTMLAudioElement }>();
  const [state, setState] = useState(false);
  const onMouseDown = () => {
    setState(!state);
    ref.current?.sound1.play();
  };

  const onMouseUp = () => {
    ref.current?.sound2.play();
  };

  useEffect(() => {
    ref.current = {
      sound1: new Audio('sound/mouse_down.mp3'),
      sound2: new Audio('sound/mouse_up.mp3'),
    };

    ref.current.sound1.volume = volumeObj.volume1;
    ref.current.sound2.volume = volumeObj.volume2;

    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);

    return () => {
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
    };

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return ref;
}
