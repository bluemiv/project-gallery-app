export const parsePath = (prefix: string) => (subPath: string) => [prefix, subPath].join('/').replace(/\/+/g, '/');
