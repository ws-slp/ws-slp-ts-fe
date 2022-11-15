import React from 'react';
import {NextPage} from 'next';
import {NextAppPageProps} from '../types/app';
import Layout from '../components/Layout';

const IndexPage: NextPage<NextAppPageProps> = () => {
  return (
    <Layout>
      <div>
        <h1>this is home page</h1>
      </div>
    </Layout>
  );
};

export default IndexPage;

IndexPage.defaultProps = {
  meta: {
    title: 'WS-SLP',
  },
};
