import { Context } from "koishi";
import { GuaApi } from "../typings/api";

export const b50Command = (ctx: Context, api: GuaApi) => {
  ctx.command('b50')
    .option('japan', '-j', { fallback: false })
    .alias(...['逼50'])
    .action(() => '666')
}
