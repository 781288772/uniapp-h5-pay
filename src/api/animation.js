import
request
from '@/utils/request.js';

//看世界首页
export async function videoHome(params) {
	return request.get("/api/content/video/home", params);
}

// 看世界查看更多 
export async function videoSearch(params) {
	return request.get("/api/content/video/search", params);
}

// 短知识 
export async function shortSearch(params) {
	return request.get("/api/content/short/search", params);
}

// 练思维
export async function gameHome(params) {
	return request.get("/api/content/game/home", params);
}
// 获取视频信息

export async function queryVideoItemById(params) {
	return request.get("/api/content/video/queryVideoItemById", params);
}
// 专辑播放列表

export async function playItem(params) {
	return request.get("/api/content/video/playItem", params);
}
// 获取媒体播放地址

export async function getMediaUrl(params) {
	return request.get("/api/common/vod/getMediaUrl", params);
}
// 获取短知识信息
export async function shortPlayById(params) {
	return request.get("/api/content/short/play/getById", params);
}
// 收藏
export async function addOrCancelCollect(params) {
	return request.post("/api/member/collect/addOrCancel", params);
}
// 是否收藏
export async function isCollected(params) {
	return request.get("/api/member/collect/isCollected", params);
}
