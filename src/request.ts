import { Context, Quester } from "koishi";
import { BASE_URL, TIME_OUT } from "./constant";
export class GuaRequest {
  private instance: Quester;
  constructor(ctx: Context) {
    this.instance = ctx.http;
  }

  private request<T>(config?: Quester.AxiosRequestConfig): Promise<T> {
    return new Promise(async (resolve, reject) => {
      this.instance
        .axios<T>({
          ...config,
          baseURL: BASE_URL,
          timeout: TIME_OUT
        })
        .then(res => {
          resolve(res.data);
        })
        .catch(err => reject(err));
    });
  }

  get<T>(url: string, config?: Quester.AxiosRequestConfig) {
    return this.request<T>({
      ...config,
      method: "GET",
      url
    });
  }

  post<T>(url: string, config?: Quester.AxiosRequestConfig) {
    return this.request<T>({
      ...config,
      method: "POST",
      url
    });
  }
}

export default GuaRequest;

