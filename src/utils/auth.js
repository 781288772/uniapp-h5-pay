/**
 * @/assets/js/auth.js
 * 封装和用户授权相关函数
 */

import config from './config.js'
const tokenKey = config.storageKeys.accessTokenKey;

//token存取
export function setToken(token) {
	uni.setStorageSync(tokenKey, token);
}
export function getToken() {
	try {
		return uni.getStorageSync(tokenKey);
	} catch (err) {
		return '';
	}
}
export function removeToken() {
	uni.removeStorageSync(tokenKey);
}