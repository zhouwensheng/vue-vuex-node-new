import $ from './$ajax.js';
import path from './BasePath.js';
// 音乐数据
export const aggregateData = params => {return $.post(`${path.fullPath('private')}music/aggregateData`,params).then(res=>res)};