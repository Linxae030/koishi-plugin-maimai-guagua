import { Context, Schema } from "koishi";

import { commandCreator } from "./creator/commandCreator";

import { apiCreator } from "./creator/apiCreator";

export const name = "koishi-plugin-maimai-fes";

export interface Config {}

export const Config: Schema<Config> = Schema.object({});

export async function apply(ctx: Context) {
  const api = apiCreator(ctx);
  commandCreator(ctx, api);
  // registerCommands(ctx);
  // const data = await api.getMusicData();
  // console.log(data);
}

