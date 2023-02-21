import chains from './network.chains.json';
const { version } = require('@package');

/**
 * @description 系统全局配置 统一调用接入
 */
const config = {
  // 环境
  env: process.env.REACT_APP_ENV,
  version,
  BASE_URL: '',

  DEFAULT_NETWORK_ID: 1230,
  DEFAULT_WALLET_TYPE: 'MetaMask',
  chains, // 支持链
  WEBSITE: 'FlySwap',
};
export default config;
