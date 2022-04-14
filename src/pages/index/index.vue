<template>
	<view class="content">
			<u-navbar back-text="" title="购买影片"></u-navbar>
		<view class="media flex_st" style="align-items: center;">
			<view>
				<image src="../../static/ic_share_logo.png" mode="" style="width: 4.9rem;height: 4.9rem;"></image>
			</view>
			<view style="display: flex;flex-direction: column;text-align: left;margin-left: 1rem;justify-content: space-between;height:4.9rem;">
				<view style="font-size: 1rem;font-weight: 500;">《熊出没 · 重返地球》</view>
				<view style="color: #A6A5A5;font-size: 1.3rem">在线观影</view>
				<view style="color: #FF6F4E;font-size: 1.3rem">￥9.9</view>
			</view>
			
		</view>
		<view class="payType">
			<view class="title">
				支付方式
			</view>
			<view class="flex_bt" @click="handleSelectPayType(0)" style="margin-top: 0.9em;">
				<view class="flex_st">
					<image src="../../static/wx.png" mode="" style="width: 1.4rem;height: 1.4rem;"></image>
						<text style="margin-left: 0.5rem;font-size: 1rem;">微信</text>
				</view>
				<view>
					<image src="../../static/selected.png" mode="" style="width: 0.8rem;height: 0.8rem;" v-if="payType==0"></image>
					<image src="../../static/unselected.png" mode="" style="width: 0.8rem;height: 0.8rem" v-else></image>
				</view>
			</view>
			<!-- 支付宝 -->
			<view class="flex_bt" style="margin-top: 0.9rem;" @click="handleSelectPayType(1)">
				<view class="flex_st">
					<image src="../../static/zfb.png" mode="" style="width: 1.4rem;height: 1.4rem;"></image>
						<text style="margin-left: 0.5rem;font-size: 1rem;">支付宝</text>
				</view>
				<view>
					<image src="../../static/selected.png" mode="" style="width: 0.8rem;height:0.8rem" v-if="payType==1"></image>
					<image src="../../static/unselected.png" mode="" style="width: 0.8rem;height: 0.8rem" v-else></image>
				</view>
			</view>
			
		</view>
	<view style="text-align: center;position: relative;margin-top: 1.4rem;" @click="pay">
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
			console.log(options)
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

<style lang="scss" scoped>
	.content {
		background-color: #F4F4F4;
		width: 100%;
		height: 100%;
		padding: 0.5rem 1rem;
		box-sizing: border-box;
	}

	.media{
		padding: 0.5rem;
		background: #fff;
		border-radius: 0.25rem;
		height: 7rem;
		/* border: 1px solid red; */
	}
	.payType{
		margin-top: 0.5rem;
		padding: 0.5rem;
		background: #fff;
		border-radius: 0.25rem;
		height: 7.6rem;

	}
	.title{
		// width: 3.2rem;
		padding: 0.5rem 0;
		// height: 1.1rem;
		font-size: 0.8rem;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #000000;
		white-space: nowrap;
		text-align: left;
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
