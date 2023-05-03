import { StaticImageData } from 'next/image';
import { FC } from 'react';

export interface IModal {
  key: string;
  icon: StaticImageData;
  title: string;
  isActive: boolean;
  Component: FC<{ width: string | number }>;
}

export type IData = IModal[];
