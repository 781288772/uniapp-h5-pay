import
request
from '@/utils/request.js';

//活动首页
export async function activityHome(params) {
	return request.get("/api/activity/home", params);
}

//活动详情
export async function activity(params) {
	return request.get(`/api/activity/${params}` );
}

// 专题首页
export async function subjectHome(params) {
	return request.get("/api/content/subject/home", params);
}

//专题详情 
export async function subject(params) {
	return request.get(`/api/content/subject/${params}` );
}