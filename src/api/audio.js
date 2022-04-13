import
request
from '@/utils/request.js';

//听故事首页
export async function audioHome(params) {
	return request.get("/api/content/audio/home", params);
}

//听故事首页
export async function audioSearch(params) {
	return request.get("/api/content/audio/search", params);
}

//听故事首页
export async function musicHome(params) {
	return request.get("/api/content/music/home", params);
}
//听故事播放列表
export async function itemList(params) {
	return request.get("/api/content/audio/getById", params);
}
// 获取播放地址
export async function getMediaUrl(params) {
	return request.get("/api/common/vod/getMediaUrl", params);
}
