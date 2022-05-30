import {ReactChildren, FunctionComponent} from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Header: FunctionComponent = ({children}: {children: ReactChildren}) => {
  return (
    <>
      <Head>
        <title>I am header title</title>
      </Head>
      <header className="mx-auto max-w-7xl sm:px-6 lg:px-8">{children}</header>
      <Link href="/">
        <a>home</a>
      </Link>
      &nbsp;
      <Link href="/about">
        <a>about</a>
      </Link>
    </>
  );
};

export default Header;
