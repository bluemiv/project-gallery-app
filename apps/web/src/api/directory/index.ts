import axios from 'axios';

const prefix = process.env.REACT_APP_SERVER_BASE_URL;

const parseQueryString = (params: { [key: string]: any }) =>
  Object.keys(params)
    .reduce((acc: string[], k: string) => (params[k] ? [...acc, `${k}=${params[k]}`] : acc), [])
    .join('&');

const get = async (url: string, params: {} = {}) => {
  const fullUrl = `${url}?${parseQueryString(params)}`;
  const res = await axios.get(fullUrl);
  return res.data;
};

export const fetchFiles = (url: string = '/', params: {} = {}) => get(`${prefix}/${url}`, params);
