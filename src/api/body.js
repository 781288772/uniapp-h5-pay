import
request
from '@/utils/requestBody.js';

// 新增收货地址
export async function saveOrUpdate(params) {
	return request.post("/api/member/address/saveOrUpdate",params)
}

// 下单 
export async function orderPlace(params) {
	return request.post("/api/order/place",params)
}