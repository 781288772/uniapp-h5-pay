<template>
	<view class="content">
		<!-- <u-navbar :custom-back="customBack" back-text="" title="支付成功"></u-navbar> -->
		<view class="bar">
			<u-icon name="arrow-left" @click="customBack"></u-icon>
			<view>影片</view>
			<view></view>
		</view>
		<view class="icon">
			<image src="../../static/success.png" mode="" style="width: 80px;height: 80px;"></image>
			<view class="unlock">影片已解锁</view>
		</view>
		<view class="media flex_st" style="align-items: center;">
			<view>
				<image :src="cover" mode="" style="width: 98px;height: 98px;"></image>
			</view>
			<view
				style="display: flex;flex-direction: column;text-align: left;margin-left: 20px;justify-content: space-between;height:98px;">
				<view style="font-size: 14px;font-weight: 500;">《{{title}}》</view>
				<view style="color: #A6A5A5;font-size: 13px">在线观影</view>
				<view style="color: #FF6F4E;font-size: 26px"></view>
			</view>

		</view>

		<view style="text-align: center;position: relative;margin-top: 28px;" @click="navToWatch">
			<image src="../../static/btn_bg@2x.png" mode="widthFix"></image>
			<view style="position: absolute;left: 50%;top: 50%;transform: translate(-50%,-65%);">立即观看</view>
		</view>
	</view>
</template>

<script>
	import config from '../../utils/config.js'
	let apiUrl = config.api.baseUrl;
	let imgUrl = config.api.imageBaseUrl;
	import {
		pay,
		aliPay
	} from "@/api/index.js"
	export default {
		data() {
			return {
				title: '支付宝支付',
				src: '',
				payType: '',
				title: '',
				cover: '',
			}
		},
		onLoad(options) {
			// console.log(this.$u.config.v);
			let productId = uni.getStorageSync('id');
			let _this = this;
			uni.request({
				url: apiUrl + `/api/content/video/queryInfo?id=${productId}`,
				method: 'GET',
				header: {
					'X-Access-Token': '',
					'content-type': 'application/json',
				},
				success: function(res) {
					console.log('请求封装接口成功', res)
					if (res.data.code != 200) {
						return uni.showToast({
							title: res.data.message,
							icon: 'none',
						})
					}
					_this.title = res.data.result.name;
					_this.cover = imgUrl + res.data.result.coverHome;




				},
				fail: function(res) {
					console.log('请求接口失败', res)

				}
			});
			// queryInfo(productId).then(res=>{
			// 	this.title = res.result.name;
			// 	this.cover =  imgUrl+res.result.coverHome;	
			// 	this.price = res.result.chargeAmount;
			// })








		},
		methods: {
			customBack() {
				// uni.showToast({
				// 	title:'调用返回',
				// 	icon:'none'
				// })
				window.webkit.messageHandlers.HQSJback.postMessage(null);

			},
			navToWatch() {
				// uni.showToast({
				// 	title: '立即观看',
				// 	icon: 'none'
				// })
				window.webkit.messageHandlers.HQSwatchNow.postMessage(null);
			}
		}

	}
</script>
<style lang="scss" scoped>
	.unlock {
		margin-top: 12px;
		margin-bottom: 46px;
		height: 22px;
		font-size: 16px;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #000000;
		line-height: 22px;
		text-align: center;
	}

	.content {
		background-color: #F4F4F4;
		width: 100%;
		height: 100%;
		padding-left: 20px;
		padding-right: 20px;
		padding-top: calc(20px + constant(safe-area-inset-top));
		padding-top: calc(20px + env(safe-area-inset-top));
		box-sizing: border-box;

		.bar {
			display: flex;
			justify-content: space-between;
			align-items: center;
			position: absolute;
			// top: 44px;
			top: constant(safe-area-inset-top);
			/* iOS 11.0 */
			top: env(safe-area-inset-top);
			/* iOS 11.2 */
			left: 0;
			background-color: #fff;
			width: 100%;
			height: 44px;
			box-sizing: border-box;
			padding: 0 20px;
		}

		.icon {
			margin-top: 20px;
		}
	}

	.media {
		padding: 10px;
		background: #fff;
		border-radius: 5px;
		height: 140px;
		/* border: 1px solid red; */
	}

	.payType {
		margin-top: 10px;
		padding: 10px;
		background: #fff;
		border-radius: 5px;
		height: 152px;

	}

	.title {
		width: 64px;
		padding: 10px 0;
		height: 22px;
		font-size: 16px;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #000000;
		white-space: nowrap;
	}

	.flex_bt {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.flex_ar {
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.flex_st {
		display: flex;
		justify-content: flex-start;

	}
</style>
