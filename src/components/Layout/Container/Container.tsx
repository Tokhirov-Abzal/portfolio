import React, { ReactNode } from 'react';
import Head from 'next/head';
import { Footer, Main } from 'components';

import styles from './Container.module.scss';

interface MetaTags<T> {
  key?: T;
  name: string;
  content: string;
}

interface IContainer {
  children: ReactNode;
  title?: string;
  metaTags?: MetaTags<string | number>[];
}

export const Container = ({ title, children, metaTags }: IContainer) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title || 'Abzal Tokhirov'}</title>
        <meta name='description' content='Portfolio Abzal Tokhirov' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        {metaTags?.map((meta) => (
          <meta key={meta.key} {...meta} />
        ))}
      </Head>
      <Main>{children}</Main>
      <Footer />
    </div>
  );
};
