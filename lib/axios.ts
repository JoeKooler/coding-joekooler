import axios, { AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios';
import environment from 'utils/environment';

const axiosInstance = axios.create({
  baseURL: environment.API_URL,
});

export default axiosInstance;
