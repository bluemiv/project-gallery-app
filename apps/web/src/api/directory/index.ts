import axios from 'axios';
import { serverBaseUrl } from '../../config';

const parseQueryString = (params: { [key: string]: any }) =>
  Object.keys(params)
    .reduce((acc: string[], k: string) => (params[k] ? [...acc, `${k}=${params[k]}`] : acc), [])
    .join('&');

const get = async (url: string, params: {} = {}) => {
  const fullUrl = `${url}?${parseQueryString(params)}`;
  const res = await axios.get(fullUrl);
  return res.data;
};

export const fetchFiles = (url: string = '/', params: {} = {}) => get(`${serverBaseUrl}/${url}`, params);
