import config from './config.js'

import {
	getToken
} from './auth.js'
import common from '@/common/common.js'
let apiUrl = config.api.baseUrl

function requestType(type, url, params, resolve, reject) {
	uni.request({
		url: apiUrl + url,
		method: type,
		data: params,
		header: {
			'X-Access-Token': getToken(),
			
		},
		success: function(res) {
			console.log('请求封装接口成功', res)
			if (res.data.code == '101') { // 校验token值
				wx.showToast({
					 title: '未登录或登录已过期',
					 icon:'none',
					 duration: 1000,
					 success: function () {
						 setTimeout(function () {
						 wx.reLaunch({
						 url: '/pagesC/login/login',
						  })
						}, 1000);
				  }
				})
			}
			resolve(res.data)
		},
		fail: function(res) {
			console.log('请求封装接口失败', res)
			if (!reject) {
				//自动处理程序
				if(res.data.code==500) common.toast(res.data.message)
			} else {
				reject(res)
			}
		}
	});
}

const request = {
	get(url, params) {
		return new Promise((resolve, reject) => {
			requestType('GET', url, params, resolve, reject)
		})
	},
	post(url, params) {
		return new Promise((resolve, reject) => {
			requestType('POST', url, params, resolve, reject)
		})
	},
	delete(url, params) {
		return new Promise((resolve, reject) => {
			requestType('DELETE', url, params, resolve, reject)
		})
	},
	put(url, params) {
		return new Promise((resolve, reject) => {
			requestType('PUT', url, params, resolve, reject)
		})
	},
}

export default request
