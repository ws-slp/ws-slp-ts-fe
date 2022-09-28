import {FunctionComponent} from 'react';
import Head from 'next/head';
import Link from 'next/link';

interface Props {
  // TODO: Replace deprecated types
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
      &nbsp;
      <Link href="/library">
        <a>library</a>
      </Link>
      &nbsp;
      <Link href="/workshops">
        <a>workshops</a>
      </Link>
      &nbsp;
      <Link href="/membership">
        <a>membership</a>
      </Link>
      &nbsp;
      <Link href="/auth">
        <a>login/register</a>
      </Link>
    </>
  );
};

export default Header;
