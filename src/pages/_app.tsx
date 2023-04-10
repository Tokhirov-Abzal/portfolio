import type { AppProps } from 'next/app';
import { useAudio } from 'hooks/useAudio';
import 'styles/globals.scss';

export default function App({ Component, pageProps }: AppProps) {
  useAudio({ volumeObj: { volume1: 0.5, volume2: 0.5 } });

  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}
