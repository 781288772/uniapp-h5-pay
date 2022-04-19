<template>
	<view class="content">
			<u-navbar :custom-back="customBack" back-text="" title="支付成功"></u-navbar>
			<view>
				<image src="../../static/success.png" mode="" style="width: 4rem;height: 4rem;"></image>
				<view class="unlock">影片已解锁</view>
			</view>
		<view class="media flex_st" style="align-items: center;">
			<view>
				<image :src="cover" mode="" style="width: 4.9rem;height: 4.9rem;"></image>
			</view>
			<view style="display: flex;flex-direction: column;text-align: left;margin-left: 1rem;justify-content: space-between;height:4.9rem;">
				<view style="font-size: 0.7rem;font-weight: 500;">《{{title}}》</view>
				<view style="color: #A6A5A5;font-size: 0.65rem">在线观影</view>
				<view style="color: #FF6F4E;font-size: 1.3rem"></view>
			</view>
			
		</view>
	
	<view style="text-align: center;position: relative;margin-top: 1.4rem;" @click="navToWatch">
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
				src:'',
				payType:'',
				title: '',
				cover: '',
			}
		},
		onLoad(options) {
			// console.log(this.$u.config.v);
			console.log(options)
			// let {productId} = options;
			// this.productId = productId;
			let {out_trade_no} = options
				let _this = this;
				uni.request({
					url: apiUrl + `/api/payOrder/queryOrderStatus?outTradeNo=PAY-202204192232550357`,
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
						_this.cover =  imgUrl+res.data.result.coverHome;	
				
				
				
				
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
				
				
			

			
			
			window.webkit.messageHandlers.HQSJbuySucess.postMessage(null);

		},
		methods: {
			customBack(){
				// uni.showToast({
				// 	title:'调用返回',
				// 	icon:'none'
				// })
				 window.webkit.messageHandlers.HQSJback.postMessage(null);
				  // window.location.href = "HQSJback://back"
			},
			navToWatch(){
				 window.webkit.messageHandlers.HQSwatchNow.postMessage(null);
			}
			}
			
	}
</script>
<style lang="scss" scoped>
	.unlock{
		margin-top: 0.6rem;
		margin-bottom: 2.3rem;
		height: 1.1rem;
		font-size: 0.8rem;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #000000;
		line-height: 1.1rem;
		text-align: center;
	}
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
		width: 3.2rem;
		padding: 0.5rem 0;
		height: 1.1rem;
		font-size: 0.8rem;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #000000;
		white-space: nowrap;
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
