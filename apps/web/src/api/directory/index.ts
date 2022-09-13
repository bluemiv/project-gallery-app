import axios from 'axios';

const prefix = process.env.REACT_APP_SERVER_BASE_URL;

export const fetchDirectoryAll = () => axios.get(`${prefix}/directory`);
