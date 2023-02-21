/**
 * @description 系统全局配置
 */

const { version } = require('@package');

const config = {
  // 环境
  env: process.env.REACT_APP_ENV,
  version,
  BASE_URL: '',
};
export default config;
