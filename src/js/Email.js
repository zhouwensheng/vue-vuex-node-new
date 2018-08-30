import $ from './$ajax.js';
import path from './BasePath.js';
// 电子书数据
export const Emailpost  = params => {return $.post(`${path.fullPath('private')}Email/Emailpost`,params).then(res=>res)};