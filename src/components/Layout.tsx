import {Fragment, FunctionComponent} from 'react';
import classNames from 'classnames';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import {MessageList, useMessage} from '~/lib/message';

type LayoutProps = {
  children: React.ReactNode;
  usePadding?: boolean;
  useBackdrop?: boolean;
};

const FullLayout: FunctionComponent<LayoutProps> = ({
  children,
  usePadding,
  useBackdrop,
}) => {
  const {messages} = useMessage();
  return (
    <Fragment>
      <Header children={''} />
      <main
        className={classNames(
          'w-full h-screen mx-auto relative',
          usePadding && 'px-2 sm:px-6 lg:px-8',
          useBackdrop && 'bg-gray-200'
        )}
      >
        <MessageList messages={messages} />
        {children}
      </main>
      <Footer />
    </Fragment>
  );
};

FullLayout.defaultProps = {
  usePadding: true,
  useBackdrop: false,
};

export default FullLayout;
