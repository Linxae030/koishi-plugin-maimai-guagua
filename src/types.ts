import { Argv, Command } from 'koishi';

export interface BaseConfig {
  command: string;
  options?: KoishiCmdOption | KoishiCmdOption[];
  alias?: string | string[];
}

interface ConfigWithCallback {
  callback: Command.Action;
}

export interface KoishiCmdOption {
  name: string;
  desc?: string;
  config?: Argv.OptionConfig;
}

export type CommandConfig = BaseConfig & ConfigWithCallback;

