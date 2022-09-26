import { serverBaseUrl } from '../../config';
import { urlService } from '../../service';

export const fetchStorage = (params: {} = {}) => urlService.get(`${serverBaseUrl}/config/storage-path`, params);

export const insertStorage = (params: {} = {}) => urlService.get(`${serverBaseUrl}/config/storage-path`, params);
