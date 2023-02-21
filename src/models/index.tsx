import React from 'react';
import utils from './utils';
import Web3 from './Web3Provider';
import web3Storage from './Web3Provider/storage';

// 注意排序，
const models = {
  web3Storage,
  utils,
  Web3,
};

function compose(containers: any) {
  return function Component(props: any) {
    return containers.reduceRight(
      (children: any, Container: any) => (
        <Container.Provider>{children}</Container.Provider>
      ),
      props.children,
    );
  };
}

const ComposedStore = compose(Object.values(models));

function Web3ReactProvider({ children }: any) {
  return <ComposedStore>{children}</ComposedStore>;
}

export default React.memo(Web3ReactProvider);
