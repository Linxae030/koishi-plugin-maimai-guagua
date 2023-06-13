import { Context } from "koishi";

declare module "koishi" {
  interface Context {
    request: () => {};
  }
}

