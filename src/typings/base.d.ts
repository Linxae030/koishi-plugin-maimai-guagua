import { Argv, Command, Context } from "koishi";

export type CommandCallBack = Command.Action;
export type BaseConfig = Omit<CommandConfig, "callback">;

declare interface CommandConfig {
  command: string;
  callback: CommandCallBack;
  options?: KoishiCmdOption | KoishiCmdOption[];
  alias?: string | string[];
}

declare interface KoishiCmdOption {
  name: string;
  desc?: string;
  config?: Argv.OptionConfig;
}

declare type CommandCreator = (ctx: Context, api: GuaApi) => void;

