import React, { useContext, useState } from 'react';
import { CommonFile, Desktop } from 'components';
import { data } from './constants';

import { IModal } from './FileList.types';
import { DesktopContext } from 'helpers/Desktop.context';

export const FileList = () => {
  const { setDesktopArr, desktopArr } = useContext(DesktopContext);

  const onClose = (modal: IModal) => {
    setDesktopArr(desktopArr.filter((item) => item.title !== modal.title));
  };

  const onDoubleClick = ({ icon, title, key, Component, isActive }: IModal) => {
    if (desktopArr.some((item) => item.key === key)) {
      setDesktopArr((prev) =>
        prev.map((item) =>
          item.key === key ? { ...item, isActive: false } : item
        )
      );
    } else {
      setDesktopArr([...desktopArr, { icon, title, key, Component, isActive }]);
    }
  };

  const onMinimize = (id: string) => {
    setDesktopArr((prev) =>
      prev.map((item) => (item.key === id ? { ...item, isActive: true } : item))
    );
  };

  console.log(desktopArr);

  return (
    <>
      {desktopArr.map((modal) => (
        <Desktop
          key={modal.title}
          Component={modal.Component}
          onClose={() => onClose(modal)}
          isActive={modal.isActive}
          onMinimize={() => onMinimize(modal.key)}
        />
      ))}
      {data?.map(({ icon, title, Component, key, isActive }) => (
        <CommonFile
          key={key}
          src={icon}
          title={title}
          alt={title}
          onDoubleClick={() =>
            onDoubleClick({ icon, title, Component, key, isActive })
          }
        />
      ))}
    </>
  );
};
