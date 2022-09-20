import {FunctionComponent} from 'react';
import Head from 'next/head';
import Link from 'next/link';

interface Props {
  children: React.ReactChild | React.ReactChildren;
}

const Header: FunctionComponent<Props> = () => {
  return (
    <>
      <Head>
        <title>I am header title</title>
      </Head>
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
