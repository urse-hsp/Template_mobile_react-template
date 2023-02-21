import React, { useState, useEffect } from 'react';

import models from '@/models';
import utils from '@/models/utils';
import Web3Provider from '@/models/Web3Provider';

interface IndexType {
  isVisible?: boolean;
  onClose?: () => any;
}

const Index: React.FC<IndexType> = (props) => {
  const res = utils.useContainer();

  return (
    <>
      {res.theme} home2
      <button
        onClick={() => {
          res.setTheme('123');
        }}
      >
        dianji
      </button>
    </>
  );
};
export default Index;
