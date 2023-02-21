import React, { useState, useEffect } from 'react';

import models from '@/models';
import utils from '@/models/utils';

interface IndexType {
  isVisible?: boolean;
  onClose?: () => any;
}

const Index: React.FC<IndexType> = (props) => {
  const res = utils.useContainer();

  console.log(props, '213', res);
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
