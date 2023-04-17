import { StaticImageData } from 'next/image';

export interface IModal {
  key: string;
  icon: StaticImageData;
  title: string;
  Component: () => JSX.Element;
}

export type IData = IModal[];
