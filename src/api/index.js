import
request
from '@/utils/request.js';
// export default loginService;

export async function aliPay(payType) {
	return request.post(`api/payOrder/alipay/toPay`, {
		productId: 1509778324908523521,
		productType: "ALBUM_VIDEO",
		channel: "H5"
	});
}

export async function pay(payType) {
	return request.post(`/api/payOrder/:payType/toPay?payType=wechat`, {
		"productId": 1319571973050785800,
		"productType": "ALBUM_VIDEO"
	});
}
//首页数据
export async function indexHome(params) {
	return request.get("/api/content/home/list", params);
}

//首页轮播
export async function advertisingList(params) {
	return request.get("/api/advertising/list", params);
}


// 绘本 
export async function bookHome(params) {
	return request.get("/api/content/book/home", params);
}
// 绘本详情
export async function bookDetail(params) {
	return request.get("/api/content/book/getById", params);
}
// 阅读
export async function readBook(params) {
	return request.get("/api/content/book/play/getById", params);
}
// 加入或取消收藏
export async function addOrCancel(params) {
	return request.post("/api/member/collect/addOrCancel", params);
}
// 是否被收藏
export async function isCollected(params) {
	return request.get("/api/member/collect/isCollected", params);
}
// 获取当前用户信息
export async function getUserInfo(params) {
	return request.get("/api/member/mine/user", params);
}
// 登录完善信息
export async function informationV2(params) {
	return request.post("/api/member/account/informationV2", params);
}
// 搜索
export async function search(params) {
	return request.get("/api/content/book/search", params);
}
// 我的书架
export async function myCollect(params) {
	return request.get("/api/content/book/collect", params);
}
// 批量添加或取消收藏
export async function addOrCancelByIds(params) {
	return request.post("/api/member/collect/addOrCancelByIds", params);
}
// 专题详情

export async function subjectGetById(params) {
	return request.get(`/api/content/subject/getById`, params);
}
// 根据关键词搜索
export async function homeSearch(params) {
	return request.get(`/api/content/search`, params);
}
// 删除历史搜索
export async function delHistory() {
	return request.get(`/api/content/search/delHistory`);
}
// 历史记录
export async function history(params) {
	return request.get(`/api/content/search/history`, params);
}
// 热门搜索记录
export async function hotKeyword(params) {
	return request.get(`/api/content/searchbak/hotKeyword`, params);
}
// 签到列表
export async function signInList(params) {
	return request.get(`/api/member/mine/signInList`, params);
}
// 签到
export async function sign(params) {
	return request.get(`/api/member/mine/signIn`, params);
}
// 每日任务完成情况
export async function dailyTasks(params) {
	return request.get(`/api/member/mine/dailyTasks`, params);
}
// 是否有未完成任务
export async function hasNotCompleted(params) {
	return request.get(`/api/member/mine/hasNotCompleted`, params);
}
// 完成任务
export async function finishTask(params) {
	return request.post(`/api/member/mine/finishTask`, params);
}
// 拍照贴纸

// export async function photoBackground(params) {
// 	return request.post(`/api/global/photoBackground/list`, params);
// }
// 消息列表

export async function messageList(params) {
	return request.get(`/api/member/message/list`, params);
}
// 播放记录
export async function visitList(params) {
	return request.get(`/api/member/visit/list`, params);
}
// 收藏列表
export async function collectList(params) {
	return request.get(`/api/member/collect/list`, params);
}
// 修改手机号
export async function changeMobile(params) {
	return request.post(`/api/member/mine/mobile`, params);
}
// 修改密码
export async function changePassword(params) {
	return request.post(`/api/member/mine/password`, params);
}

// 查询当前用户的未读消息数量
export async function messageQueryCount(params) {
	return request.get(`/api/member/message/queryCount`, params);
}

// 根据id查询消息详情
export async function messageGetById(params) {
	return request.get(`/api/member/message/getById`, params);
}


// 是否接收系统消息
export async function messageisReceive(params) {
	return request.post(`/api/member/mine/message`, params);
}
// 设置播放时间
export async function playTime(params) {
	return request.post(`/api/member/mine/playTime`, params);
}

/**
 * 反馈意见
 * @param {Object} params
 */
export async function feedback(params) {
	return request.post(`/api/member/mine/feedback`, params);
}
/**反馈意见列表
 * @param {Object} params
 */
export async function feedbackList(params) {
	return request.get(`/api/member/mine/feedback/list`, params)
}
/**
 * 根据id获取区域名称
 * @param {Object} ids
 */
export async function queryAreaText(ids) {
	return request.get(`/api/content/home/queryAreaText?ids=${ids}`)
}

/**
 * 弹框
 */
export async function tagList() {
	return request.get(`/api/popup/tagListV2`)
}
//添加播放记录
export async function visitAdd(params) {
	return request.post(`/api/member/visit/add`, params)
}

// 删除动态
export async function removeActivityMemberV2(params) {
	return request.post(`/api/activity/removeActivityMemberV2`, params)
}
//拍照图片
export async function photoBackground() {
	return request.post(`/api/global/photoBackground/list`)
}
