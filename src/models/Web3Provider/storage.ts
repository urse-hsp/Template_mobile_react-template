import { useState } from 'react';
import { createContainer } from 'unstated-next';
import { storage } from '@/utils';
import config from '@/config';

const defaultStates: any = {
  NETWORK_ID: storage('NETWORK_ID') ?? config.DEFAULT_NETWORK_ID,
  WALLET_TYPE: storage('WALLET_TYPE') ?? config.DEFAULT_WALLET_TYPE,
};
function useStorage(customInitialStates = {}) {
  const initStates = Object.assign({}, defaultStates, customInitialStates);
  const [networkId, setNetworkId] = useState<number>(initStates.NETWORK_ID);
  const [walletType, setWalletType] = useState(initStates.WALLET_TYPE);

  return {
    networkId,
    walletType,
    setNetworkId: (payload: any) => {
      storage('NETWORK_ID', payload);
      setNetworkId(payload);
    },
    setWalletType: (payload: any) => {
      storage('WALLET_TYPE', payload);
      setWalletType(payload);
    },
  };
}

export default createContainer(useStorage);
