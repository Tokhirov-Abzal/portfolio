import { StaticImageData } from 'next/image';

export interface IModal {
  key: string;
  icon: StaticImageData;
  title: string;
  isActive: boolean;
  Component: () => JSX.Element;
}

export type IData = IModal[];
