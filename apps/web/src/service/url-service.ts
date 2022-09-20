import { serverBaseUrl } from '../config';

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

const urlService = {
  convertParams,
  getServerFullUrl,
};

export default urlService;
