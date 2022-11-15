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
      <div className="flex justify-between">
        <Link href="/">
          <a>ws-slp</a>
        </Link>
        <nav className="flex gap-12">
          <Link href="/">
            <a>home</a>
          </Link>
          <Link href="/library">
            <a>library</a>
          </Link>
          <Link href="/workshops">
            <a>workshops</a>
          </Link>
          <Link href="/membership">
            <a>membership</a>
          </Link>
          <Link href="/about">
            <a>about</a>
          </Link>
          <Link href="/auth">
            <a>login/register</a>
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Header;
