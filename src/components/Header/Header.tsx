import {FunctionComponent} from 'react';
import Head from 'next/head';
import Link from 'next/link';

interface Props {
  children: React.ReactChild | React.ReactChildren;
}

const Header: FunctionComponent<Props> = ({children}: Props) => {
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
