import axios, { InternalAxiosRequestConfig } from "axios";
import { BASE_URL } from "./constants";
import i18n from "../../i18next/i18n";

const axiosApi = axios.create({
  baseURL: BASE_URL,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

axiosApi.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const locale = i18n.language || 'ru';
    if (config.headers) {
      config.headers['Accept-Language'] = locale;
    }
    config.url = `/${locale}${config.url}`;
    return config;
  },
  (error) => {
    console.error('Request Error:', error);
    return Promise.reject(error);
  }
);

export default axiosApi;
