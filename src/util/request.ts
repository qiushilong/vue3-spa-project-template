import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { getItem } from "@/util/storage";

interface IResponse<T> {
  code: number;
  msg: string;
  data: T;
  token?: string;
}

const instance = axios.create({
  baseURL: "http://127.0.0.1:8080/api/private",
  timeout: 10000,
  headers: {},
});

instance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    if (config.headers) {
      config.headers.authorization = getItem("token");
    }
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    return response;
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    const {
      status,
      statusText,
      data: { code, msg },
    } = error.response;

    if (status === 401) {
      location.pathname = "/login";
    }

    if (msg) {
      console.error(`${code}: ${msg}`);
    } else {
      console.error(`${status}: ${statusText}`);
    }
    return Promise.reject(error);
  }
);

async function get<T>(
  url: string,
  config?: AxiosRequestConfig<any> | undefined
) {
  let result: AxiosResponse<IResponse<T>, any> | undefined = undefined;
  try {
    result = await instance.get(url, config);
  } catch (error) {
    console.error(`get 请求异常：${error}`);
  }
  return result;
}

async function post<T>(
  url: string,
  payload?: any,
  config?: AxiosRequestConfig<any> | undefined
) {
  let result: AxiosResponse<IResponse<T>, any> | undefined = undefined;
  try {
    result = await instance.post(url, payload, config);
  } catch (error) {
    console.error(`post 请求异常：${error}`);
  }
  return result;
}

export default {
  get,
  post,
};
