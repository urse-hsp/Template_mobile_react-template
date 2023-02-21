import chains from './network.chains.json';
const { version } = require('@package');

const env = process.env.REACT_APP_ENV;

/**
 * @description 系统全局配置 统一调用接入
 *
 */

let BASE_URL: string = '';
if (env === 'development') {
  BASE_URL = '';
}

const config = {
  // 环境
  env,
  version,
  BASE_URL,

  DEFAULT_NETWORK_ID: 1230,
  DEFAULT_WALLET_TYPE: 'MetaMask',
  chains, // 支持链
  WEBSITE: 'FlySwap',
};
export default config;
