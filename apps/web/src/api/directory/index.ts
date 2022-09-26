import { serverBaseUrl } from '../../config';
import { urlService } from '../../service';

export const fetchFiles = (params: {} = {}) => urlService.get(`${serverBaseUrl}/file`, params);
