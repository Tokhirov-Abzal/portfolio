import React, { FC, useState } from 'react';
import { About, CommonFile, Desktop } from 'components';
import { StaticImageData } from 'next/image';

interface IFileListProps {
  data: Array<{ icon: StaticImageData; title: string }>;
}

export const FileList: FC<IFileListProps> = ({ data }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Desktop
        isOpen={open}
        renderBody={() => <About />}
        onClose={() => setOpen(false)}
      />
      {data?.map(({ icon, title }) => (
        <CommonFile
          key={title}
          src={icon}
          title={title}
          alt={title}
          onDesktopOpen={setOpen}
        />
      ))}
    </>
  );
};
