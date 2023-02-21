import React, { useState, useEffect } from 'react';

import models from '@/models';
import utils from '@/models/utils';
import Web3Provider from '@/models/Web3Provider';
import './index.scss';

interface IndexType {
  isVisible?: boolean;
  onClose?: () => any;
}

const Index: React.FC<IndexType> = (props) => {
  const res = utils.useContainer();

  return (
    <div className="home">
      {res.theme} home2家里
      <button
        onClick={() => {
          res.setTheme('123');
        }}
      >
        dianji就这啊
      </button>
    </div>
  );
};
export default Index;
