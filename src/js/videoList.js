import $ from './$ajax.js';
import path from './BasePath.js';
// 视频
export const videoList  = params => {return $.post(`${path.fullPath('private')}view/videoList`,params).then(res=>res)};