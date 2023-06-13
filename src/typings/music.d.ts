export type LevelLabel = "Basic" | "Advanced" | "Expert" | "Master" | "Re:MASTER";
export type ChartRank =
  | "D"
  | "C"
  | "B"
  | "BB"
  | "BBB"
  | "A"
  | "AA"
  | "AAA"
  | "S"
  | "Sp"
  | "SS"
  | "SSp"
  | "SSS"
  | "SSSp";
export type LevelIndex = 0 | 1 | 2 | 3 | 4;
export type ChartFC = "fc" | "fcp" | "ap" | "app";
export type ChartFS = "fs" | "fsp" | "fsd" | "fsdp";
export type MusicDs = Tuple<number, 4> | Tuple<number, 5>;
export type MusicLevel = Tuple<string, 4> | Tuple<string, 5>;

/* 谱面类型 */
export type ChartType = "DX" | "SD";

/**
 * @interface 谱面记录
 */
export interface ChartRecord {
  /* 谱面达成率 */
  achievements: number;
  /* 谱面定数 */
  ds: number;
  /* 谱面 dx 分数 */
  dxScore: number;
  /* 谱面 fc 情况 */
  fc: ChartFC;
  /* 谱面 fs 情况 */
  fs: ChartFS;
  /* 谱面标级 */
  level: string;
  /* 谱面标级序号 */
  level_index: LevelIndex;
  /* 谱面标级标签 */
  level_label: LevelLabel;
  /* 谱面达成率对应的 rating */
  ra: number;
  /* 谱面评级 */
  rate: ChartRank;
  /* 谱面对应的歌曲的id */
  song_id: number;
  /* 谱面对应的歌曲的标题 */
  title: string;
  /* 谱面类型 */
  type: ChartType;
}

/**
 * @interface 谱面信息
 */
export interface Chart {
  /* 各键型物量 */
  notes: number[];
  /* 谱师 */
  charter: string;
}

/**
 * @interface 歌曲基础信息
 */
export interface BasicInfo {
  /* 歌曲标题 */
  title: string;
  /* 歌曲作者 */
  artist: string;
  /* 歌曲所属代 */
  genre: string;
  /* 歌曲bpm */
  bpm: number;
  /* 歌曲发布日 */
  release_date: string;
  /* 歌曲所属包 */
  from: string;
  /* 是否是新歌 */
  is_new: boolean;
}

/**
 * @interface 歌曲信息接口返回结果
 * @apis music_data
 */
declare interface MusicInfo {
  /* 歌曲id */
  id: string;
  /* 歌曲标题 */
  title: string;
  /* 歌曲类型 */
  type: ChartType;
  /* 歌曲各谱面定数 */
  ds: MusicDs;
  /* 歌曲各谱面标级 */
  level: MusicLevel;
  /* 歌曲难度等级 1 2 3 4 */
  cids: number[];
  /* 各难度谱面信息 */
  charts: Chart[];
  /* 歌曲基础信息 */
  basic_info: BasicInfo;
}

