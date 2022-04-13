import request from '../utils/request.js';
import config from '../utils/config.js';
import { getToken } from '../utils/auth.js';

/**
 * 互动轮播图
 */
export function banner() {
	return request.get('/api/advertising/list?type=3');
}

/**
 * 互动活动
 */
export function activity_list(page, size, type) {
	return request.get(`/api/activity/wonderfulV2?page=${page}&size=${size}&type=${type}`);
}

/**
 * 活动动态列表
 * @param {Object} page 页数
 * @param {Object} size 数量
 * @param {Object} type 类型
 * @param {Object} id id
 * @param {Object} isme 只显示我的
 */
export function activity_info(page, size, type, id = '', isme = false) {
	return request.get(`/api/activity/allWorksLoginV2?isOwn=${isme}&sort=${type}&id=${id}&pageNo=${page}&pageSize=${size}`);
}

/**
 * 活动点赞
 * @param {Object} id 活动id
 */
export function like(id) {
	return request.get(`/api/activity/like?id=${id}`)
}

/**
 * 查询动态详情
 * @param {Object} id id
 */
export function comment_detail(id) {
	return request.get(`/api/activity/queryInfoV2?activityMemberId=${id}`);
}

/**
 * 评论列表
 * @param {Object} id
 * @param {Object} page
 * @param {Object} size
 */
export function comment_list(id, page, size, orderBy = 'TIME') {
	return request.get(`/api/activityComment/commentsV2?activityMemberId=${id}&pageNo=${page}&pageSize=${size}&orderBy=${orderBy}`);
}

/**
 * 发送评论
 * @param {Object} data 对象
 */
export function comment_send(data) {
	let apiUrl = config.api.baseUrl
	return new Promise((resolve, reject) => {
		uni.request({
			url: apiUrl + '/api/activityComment/commentV2',
			method: 'POST',
			header: {
				'X-Access-Token': getToken(),
				'Content-Type':'application/json',
			},
			data,
			success(data) {
				resolve(data.data)
			},
			fail(err) {
				reject(err)
			}
		})
	});
}

/**
 * 点赞评论
 * @param {Object} id id
 */
export function comment_like(id) {
	return request.post(`/api/activityComment/commentLikeV2?activityCommentId=${id}`)
}

/**
 * 活动详情
 * @param {Object} id id
 */
export function activity_detail(id) {
	return request.get(`/api/activity/${id}`);
}

/**
 * @function 活动打卡
 * @param acid {Object} 活动id
 * @param memberid {Object} 孩子id
 */
export function activity_clock(acid, memberid) {
	return request.post('/api/activityLock/lockV2', {
		activityInfoId: acid,
		memberChildId: memberid
	});
}


/**
 * 发布动态
 * @param {Object} data 对象
 */
export function send_dynamic(data) {
	let apiUrl = config.api.baseUrl
	return new Promise((resolve, reject) => {
		uni.request({
			url: apiUrl + '/api/activity/act/addV2',
			method: 'POST',
			header: {
				'X-Access-Token': getToken(),
				'Content-Type':'application/json',
			},
			data,
			success(data) {
				resolve(data.data)
			},
			fail(err) {
				reject(err)
			}
		})
	});
}

/**
  * 已参加活动
  * @param id
  * @return 
  */
export function allWorksLoginV2(id) {
	return request.post('/api/activity/allWorksLoginV2', {
			id
	});
}
/**
  * 我的活动
  * @param 
  * @return 
  */
export function myActivities() {
	return request.get('/api/activity/myActivities', {
		
	});
}
/**动态投票
 * @param {Object} activityMemberId
 */
export function vote(activityMemberId) {
	return request.post('/api/activityVote/voteV2', {
		activityMemberId
		
	});
}