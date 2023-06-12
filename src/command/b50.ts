import { CommandConfig, BaseConfig } from '../types';

const baseConfig: BaseConfig = {
  command: 'b50',
  options: [
    {
      name: 'japan',
      desc: '-j',
      config: { fallback: false }
    }
  ],
  alias: ['逼50']
};

const B50CommandCreator = () => {};

export default {
  ...baseConfig,
  callback: B50CommandCreator
};

