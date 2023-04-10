import React, { FC } from 'react';
import { CommonFile } from 'components';
import { StaticImageData } from 'next/image';

interface IFileListProps {
  data: Array<{ icon: StaticImageData; title: string }>;
}

export const FileList: FC<IFileListProps> = ({ data }) => {
  return (
    <>
      {data?.map(({ icon, title }) => (
        <CommonFile key={title} src={icon} title={title} alt={title} />
      ))}
    </>
  );
};
