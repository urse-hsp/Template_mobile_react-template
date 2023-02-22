import React from 'react';

import utils from '@/models/utils';
import './index.scss';

interface IndexType {
  isVisible?: boolean;
  onClose?: () => any;
}

const Index: React.FC<IndexType> = (props) => {
  const res = utils.useContainer();

  return <div className="home">123</div>;
};
export default Index;
