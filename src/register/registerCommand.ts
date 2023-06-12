import { Context } from 'koishi';
import { CommandConfig } from '../types';

export const registerCommands = (ctx: Context, commandConfigList: CommandConfig[]) => {
  (commandConfigList || []).forEach(config => {
    const { command, callback, options, alias } = config;
    // 注册指令
    const cmd = ctx.command(command);
    // 注册别名
    if (alias) {
      cmd.alias(...(Array.isArray(alias) ? alias : [alias]));
    }
    // 注册选项
    if (options) {
      (Array.isArray(options) ? options : [options]).forEach(option => {
        const { name, desc, config } = option;
        cmd.option(name, desc, config);
      });
    }
    // 注册回调
    cmd.action(callback);
  });
};

