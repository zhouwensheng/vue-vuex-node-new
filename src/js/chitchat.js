import $ from './$ajax.js';
import path from './BasePath.js';
// 电子书数据
export const ADD  = params => {return $.post(`${path.fullPath('private')}friend/add`,params).then(res=>res)};
export const DELETE  = params => {return $.post(`${path.fullPath('private')}friend/delete`,params).then(res=>res)};
export const INQUIRE  = params => {return $.post(`${path.fullPath('private')}friend/inquire`,params).then(res=>res)};
export const SEARCH  = params => {return $.post(`${path.fullPath('private')}friend/search`,params).then(res=>res)};