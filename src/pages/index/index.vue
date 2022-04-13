<template>
	<view class="content">
			<u-navbar back-text="" title="购买影片"></u-navbar>
		<view class="media flex_st" style="align-items: center;">
			<view>
				<image src="../../static/ic_share_logo.png" mode="" style="width: 196upx;height: 196upx;"></image>
			</view>
			<view style="display: flex;flex-direction: column;text-align: left;margin-left: 20upx;justify-content: space-between;height: 196upx;">
				<view style="font-size: 28upx;font-weight: 500;">《熊出没 · 重返地球》</view>
				<view style="color: #A6A5A5;font-size: 26upx">在线观影</view>
				<view style="color: #FF6F4E;font-size: 26upx">￥9.9</view>
			</view>
			
		</view>
		<view class="payType">
			<view class="title">
				支付方式
			</view>
			<view class="flex_bt" @click="handleSelectPayType(0)" style="margin-top: 36upx;">
				<view class="flex_st">
					<image src="../../static/wx.png" mode="" style="width: 56upx;height: 56upx;"></image>
						<text style="margin-left: 20upx;">微信</text>
				</view>
				<view>
					<image src="../../static/selected.png" mode="" style="width: 32upx;height: 32upx;" v-if="payType==0"></image>
					<image src="../../static/unselected.png" mode="" style="width: 32upx;height: 32upx;" v-else></image>
				</view>
			</view>
			<!-- 支付宝 -->
			<view class="flex_bt" style="margin-top: 36upx;padding" @click="handleSelectPayType(1)">
				<view class="flex_st">
					<image src="../../static/zfb.png" mode="" style="width: 56upx;height: 56upx;"></image>
						<text style="margin-left: 20upx;">支付宝</text>
				</view>
				<view>
					<image src="../../static/selected.png" mode="" style="width: 32upx;height: 32upx;" v-if="payType==1"></image>
					<image src="../../static/unselected.png" mode="" style="width: 32upx;height: 32upx;" v-else></image>
				</view>
			</view>
			
		</view>
	<view style="text-align: center;position: relative;margin-top: 56upx;" @click="pay">
				<image src="../../static/btn_bg@2x.png" mode="widthFix"></image>
				<view style="position: absolute;left: 50%;top: 50%;transform: translate(-50%,-65%);">立即支付</view>
	</view>
	</view>
</template>

<script>
	import config from '../../utils/config.js'
	let apiUrl = config.api.baseUrl
	import {
		pay,
		aliPay
	} from "@/api/index.js"
	export default {
		data() {
			return {
				title: '支付宝支付',
				src:'',
				payType:'',
			}
		},
		onLoad(options) {
			// console.log(this.$u.config.v);
			let {productId} = options;
			this.productId = productId;

		},
		methods: {
			pay(){
				if(this.payType==0){
					console.log('微信支付')
					uni.showToast({
						title:'暂不支持',
						icon:'none'
					})
				}else{
						console.log('支付宝支付')
						this.handlePay();
				}
			},
			handleSelectPayType(flag){
				this.payType = flag;

				
			},
			handlePay() {
				let that = this;
				uni.request({
					url: apiUrl + `api/payOrder/alipay/toPay`,
					method: 'POST', 
					data: {
						"productId": this.productId||'1509778324908523521',
						"productType": "ALBUM_VIDEO",
						"channel": "H5"
					},
					header: {
						'X-Access-Token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NDk4MTQwMzEsInVzZXJuYW1lIjoiMTgzMjA2Njk3MzMifQ.QuWh975DdBQdnfNoJC-GrX6OsXRlpVE5IyCTKvJXSGI',
						'content-type': 'application/json',
					},
					success: function(res) {
						console.log('请求封装接口成功', res)
						that.src = res.data.result.result
						console.log(that.src)
						// uni.navigateTo({
						// 	url:`/pages/web/webview?src=${res.data.result.result}`
						// })
						const div = document.createElement('div');
						div.innerHTML = res.data.result.result;
						document.body.appendChild(div);
						document.forms[0].submit();

					},
					fail: function(res) {
						console.log('请求接口失败', res)
				
					}
				});
				// aliPay().then(res=>{
				// let {
				// 	appId,
				// 	nonceStr,
				// 	paySign,
				// 	signType,
				// 	timeStamp
				// } = res.data;
				// uni.requestPayment({
				// 	provider: 'wxpay',
				// 	timeStamp: timeStamp,
				// 	nonceStr: nonceStr,
				// 	package: package1,
				// 	signType: signType,
				// 	paySign: paySign,
				// 	success(res) {
				// 		uni.navigateBack();
				// 		uni.showToast({
				// 			title: '支付成功',
				// 			icon: 'success'
				// 		})
				// 		var pages = getCurrentPages();
				// 		var curPage = pages[pages.length - 1];
				// 		curPage.onLoad(_this.option);
				// 	},
				// 	fail(err) {
				// 		uni.showToast({
				// 			title: '支付失败',
				// 			icon: 'none'
				// 		})
				// 		console.log(err, '失败')
				// 	}
				// })
				// })
			}
		}
	}
</script>

<style>
	.content {
		background-color: #F4F4F4;
		width: 100%;
		height: 100%;
		padding: 20upx 40upx;
		box-sizing: border-box;
	}

	.media{
		padding: 20upx;
		background: #fff;
		border-radius: 10px;
		height: 280upx;
		/* border: 1px solid red; */
	}
	.payType{
		margin-top: 20upx;
		padding: 20upx;
		background: #fff;
		border-radius: 10px;
		height: 302upx;

	}
	.title{
		width: 128upx;
		padding: 20upx 0;
		height: 44upx;
		font-size: 32upx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #000000;
	}
	.flex_bt{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.flex_ar{
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	.flex_st{
		display: flex;
		justify-content: flex-start;
	
	}
</style>
