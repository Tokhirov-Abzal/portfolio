import React from 'react';
import { createContext, useState, ReactNode } from 'react';
import { IModal } from 'modules/FileList/FileList.types';

export const DesktopContext = createContext<{
  desktopArr: IModal[];
  setDesktopArr: React.Dispatch<React.SetStateAction<IModal[]>>;
}>({ desktopArr: [], setDesktopArr: () => {} });

export function DesktopContextProvider({ children }: { children: ReactNode }) {
  const [desktopArr, setDesktopArr] = useState<IModal[]>([]);

  return (
    <DesktopContext.Provider value={{ desktopArr, setDesktopArr }}>
      {children}
    </DesktopContext.Provider>
  );
}
