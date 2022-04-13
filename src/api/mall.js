import
request
from '@/utils/request.js';

//商城轮播
export async function advertisement(params) {
	return request.get("/api/mall/advertisement", params);
}

//商品分类
export async function cateList(params) {
	return request.get("/api/mall/goods/cate/list", params);
}

//商品列表 
export async function goodsList(params) {
	return request.get("/api/mall/goods/list",params)
}

//商品详情 
export async function getById(params) {
	return request.get("/api/mall/goods/getById",params)
}

// 收货地址 
export async function addressList(params) {
	return request.get("/api/member/address/list",params)
}

// 省市区树查询 
export async function queryTree(params) {
	return request.get("/api/member/address/queryTree",params)
}

// 删除地址 
export async function addressDelete(params) {
	return request.delete(`/api/member/address/${params}`)
}

// 金币明细 
export async function mineIntegral(params) {
	return request.get("/api/member/mine/integral",params)
}

// 我的订单
export async function orderPage(params) {
	return request.get("/api/order/page",params)
}

// 根据地区ID查询地区
export async function queryAreaText(params) {
	return request.get("/api/content/home/queryAreaText",params)
}

// 取消订单
export async function orderPut(params) {
	return request.put(`/api/order/${params}`)
}

// 订单详情 /{id}
export async function orderGet(params) {
	return request.get(`/api/order/${params}`)
}

// 确认收货 {id}
export async function confirmPut(params) {
	return request.put(`/api/order/confirm/${params}`)
}
// 获取当前用户信息
export async function userInfo(params) {
	return request.get("/api/member/mine/user", params);
}