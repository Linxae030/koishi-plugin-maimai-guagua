import { Context, Schema } from 'koishi';

import { registerCommands } from './register/registerCommand';

import { commandConfigList } from './command';

export const name = 'koishi-plugin-maimai-fes';

export interface Config {}

export const Config: Schema<Config> = Schema.object({});

export function apply(ctx: Context) {
  // write your plugin here
  // ctx.on('message', session => {
  //   console.log(session.content);
  //   if (session.content === '天王盖地虎啊') {
  //     session.send('宝塔镇河妖');
  //   }
  // });
  // ctx
  //   .command('test')
  //   .option('best', '-b <type>')
  //   .action(({ options }) => JSON.stringify(options));
  registerCommands(ctx, commandConfigList);
}

