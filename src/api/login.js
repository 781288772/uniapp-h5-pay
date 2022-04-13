import
request
from '@/utils/request.js';

//获取验证码
export async function sendDynamicCode(params) {
	return request.get("/api/member/account/sendDynamicCode", params);
}

// 验证码登陆 
export async function loginByCode(params) {
	return request.post("/api/member/account/loginByCode", params);
}

// 第三方登陆注册 
export async function loginOrRegister(params) {
	return request.post("/api/member/account/loginOrRegister", params);
}

// 微信授权登陆 
export async function loginWX(params) {
	return request.get("/api/member/account/loginWX", params);
}
// 获取当前用户信息
export async function userInfo(params) {
	return request.get("/api/member/mine/user", params);
}
// 第三方登录

export async function thirdLogin(params) {
	return request.post("/api/member/account/thirdLogin", params);
}
// 解析手机号
export async function getUserPhone(params) {
	return request.post("/api/member/account/getUserPhone", params);
}


// 完善信息
export async function informationV2(params) {
	return request.post("/api/member/account/informationV2", params);
}

