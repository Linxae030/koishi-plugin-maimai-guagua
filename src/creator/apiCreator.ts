import { Context } from "koishi";
import GuaRequest from "../request";
import type { MusicInfo } from "../typings/music";
import { GuaApi } from "../typings/api";

export const apiCreator = (ctx: Context): GuaApi => {
  const request = new GuaRequest(ctx);

  /** 获取全曲列表 */
  const getMusicData = () => {
    return request.get<MusicInfo[]>("/music_data");
  };

  return {
    getMusicData
  };
};

