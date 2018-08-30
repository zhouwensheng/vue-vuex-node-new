import $ from './$ajax.js';
import path from './BasePath.js';
// 电子书数据
export const catalogue  = params => {return $.post(`${path.fullPath('private')}book/catalogue`,params).then(res=>res)};