import React, { useState } from 'react';
import { CommonFile, Desktop } from 'components';
import { data } from './constants';

import { IModal, IData } from './FileList.types';

export const FileList = () => {
  const [cascade, setCascade] = useState<IData>([data[0]]);

  const onClose = (modal: IModal) => {
    setCascade(cascade.filter((item) => item.title !== modal.title));
  };

  const onDoubleClick = ({ icon, title, key, Component }: IModal) => {
    if (!cascade.some((item) => item.key === key)) {
      setCascade([...cascade, { icon, title, key, Component }]);
    }
  };

  return (
    <>
      {cascade.map((modal) => (
        <Desktop
          key={modal.title}
          Component={modal.Component}
          onClose={() => onClose(modal)}
        />
      ))}
      {data?.map(({ icon, title, Component, key }) => (
        <CommonFile
          key={key}
          src={icon}
          title={title}
          alt={title}
          onDoubleClick={() => onDoubleClick({ icon, title, Component, key })}
        />
      ))}
    </>
  );
};
