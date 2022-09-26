import { serverBaseUrl } from '../config';
import axios from 'axios';

const convertParams = (queryString: string): { [key: string]: string } => {
  const query = queryString.startsWith('?') ? queryString.replace('?', '') : queryString;
  return query.split('&').reduce((params, qs) => {
    const [key, value] = qs.split('=');
    if (!key || !value) return params;
    return {
      ...params,
      [key]: value,
    };
  }, {});
};

const getServerFullUrl = (path: string) => `${serverBaseUrl}/${path.startsWith('/') ? path.replace('/', '') : path}`;

const parseQueryString = (params: { [key: string]: any }) =>
  Object.keys(params)
    .reduce((acc: string[], k: string) => (params[k] ? [...acc, `${k}=${params[k]}`] : acc), [])
    .join('&');

const get = async (url: string, params: {} = {}) => {
  const fullUrl = `${url}?${parseQueryString(params)}`;
  const res = await axios.get(fullUrl);
  return res.data;
};

const urlService = {
  convertParams,
  getServerFullUrl,
  parseQueryString,
  get,
};

export default urlService;
