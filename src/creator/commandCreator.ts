import { Context } from "koishi";
import { CommandCreator } from "../typings/base";
import { GuaApi } from "../typings/api";
import { b50Command } from "../command";

export const commandCreator: CommandCreator = (ctx: Context, api: GuaApi) => {
  b50Command(ctx, api);
};

