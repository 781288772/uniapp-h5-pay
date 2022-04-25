<template>
	<view class="content">
		<!-- <u-navbar :custom-back="customBack" back-text="" title="购买影片"></u-navbar> -->
		<view class="bar">
			<u-icon name="arrow-left" @click="customBack"></u-icon>
			<view>影片</view>
			<view></view>
		</view>
		<view class="media flex_st" style="align-items: center;">
			<view>
				<image :src="cover||'../../static/ic_share_logo.png'" mode="" style="width: 98px;height: 98px;">
				</image>
			</view>
			<view
				style="display: flex;flex-direction: column;text-align: left;margin-left: 1rem;justify-content: space-between;height:98px;">
				<view style="font-size: 20px;font-weight: 500;">《{{title}}》</view>
				<view style="color: #A6A5A5;font-size: 26px">在线观影</view>
				<view style="color: #FF6F4E;font-size: 26px">￥{{price}}</view>
			</view>

		</view>
		<view class="payType">
			<view class="title">
				支付方式
			</view>
			<!-- 	<view class="flex_bt" @click="handleSelectPayType(0)" style="margin-top: 18px;">
				<view class="flex_st">
					<image src="../../static/wx.png" mode="" style="width: 28px;height: 28px;"></image>
					<text style="margin-left: 10px;font-size: 20px;">微信</text>
				</view>
				<view>
					<image src="../../static/selected.png" mode="" style="width: 16px;height:16px;"
						v-if="payType==0"></image>
					<image src="../../static/unselected.png" mode="" style="width: 0.8rem;height: 0.8rem" v-else>
					</image>
				</view>
			</view> -->
			<!-- 支付宝 -->
			<view class="flex_bt" style="margin-top: 18px;" @click="handleSelectPayType(1)">
				<view class="flex_st">
					<image src="../../static/zfb.png" mode="" style="width: 28px;height: 28px;"></image>
					<text style="margin-left: 10px;font-size: 20px;">支付宝</text>
				</view>
				<view>
					<image src="../../static/selected.png" mode="" style="width: 16px;height:16px" v-if="payType==1">
					</image>
					<image src="../../static/unselected.png" mode="" style="width: 16px;height:16px" v-else>
					</image>
				</view>
			</view>

		</view>
		<view style="text-align: center;position: relative;margin-top: 28px;width: 100%;" @click="pay">
			<image src="../../static/btn_bg@2x.png" mode="widthFix"></image>
			<view style="position: absolute;left: 50%;top: 50%;transform: translate(-50%,-65%);">立即支付</view>
		</view>
	</view>
</template>

<script>
	import config from '../../utils/config.js'
	let apiUrl = config.api.baseUrl;
	let imgUrl = config.api.imageBaseUrl;
	import {
		pay,
		aliPay,
		queryInfo
	} from "@/api/index.js"
	export default {
		data() {
			return {
				//支付类型 0 微信 1 支付宝
				payType: 1,
				title: '',
				cover: '',
				price: 0.00,
				token: '',
				top: 0,
				//当前版本号2.7不开放微信支付
				ver: '',



			}
		},
		onShow() {
			// window.location.reload();
			// console.log('onshow')
		},
		onLoad(options) {
			//企图获取bar高度
			uni.getSystemInfo({
				success(e) {
					console.log(e)
					this.top = e.statusBarHeight;
				}
			})
			// alert(this.top)
			// console.log(this.$u.config.v);
			console.log(options)
			let {
				productId,
				token,
				ver
			} = options;
			// productId= '1319571973050785793'
			this.productId = productId;
			this.ver = ver;
			uni.setStorageSync('id', productId)
			this.token = token
			let _this = this;
			uni.request({
				url: apiUrl + `/api/content/video/queryInfo?id=${productId}`,
				method: 'GET',
				header: {
					'X-Access-Token': this.token,
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
					_this.price = res.data.result.chargeAmount;




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
				// window.location.href = "HQSJback://back"
			},
			pay() {
				if (this.payType == 0) {
					console.log('微信支付')
					// uni.showToast({
					// 	title: '暂不支持',
					// 	icon: 'none'
					// })
					if (this.ver != '2.7') {
						this.handlePay('wechat');
					} else {
						console.log('当前版本不支持微信支付')
					}
				} else {
					console.log('支付宝支付')
					this.handlePay('alipay');
				}
			},
			handleSelectPayType(flag) {
				this.payType = flag;


			},
			handlePay(platform) {
				//alipay
				let that = this;
				// this.$u.route('pages/index/success')
				// return;
				uni.request({
					url: apiUrl + `api/payOrder/${platform}/toPay`,
					method: 'POST',
					data: {
						"productId": this.productId,
						"productType": "ALBUM_VIDEO",
						"channel": "H5"
					},
					header: {
						'X-Access-Token': this.token,
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

						if (platform == 'alipay') {
							const div = document.createElement('div');
							div.innerHTML = res.data.result.result;
							document.body.appendChild(div);
							document.forms[0].submit();

						} else {
							window.location.href = res.data.result.h5_url;
						}



					},
					fail: function(res) {
						console.log('请求接口失败', res)

					}
				});

			}
		}
	}
</script>

<style lang="scss" scoped>
	.top-bar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 44px;
		background-color: #fff;
		width: 100%;


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


	}

	.media {
		padding: 10px;
		background: #fff;
		border-radius: 5px;
		height: 140px;
		margin-top: 10px;
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
		// width: 3.2rem;
		padding: 10px 0;
		// height: 1.1rem;
		font-size: 16px;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #000000;
		white-space: nowrap;
		text-align: left;
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
