import axios from './$ajax.js';
import path from './BasePath.js';
// 登陆
export const login = params => {return axios.post(`${path.fullPath('private')}private/from`,params).then(res=>res)};