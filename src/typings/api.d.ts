import { MusicInfo } from "./music";

declare interface GuaApi {
  getMusicData: () => Promise<MusicInfo[]>;
}

