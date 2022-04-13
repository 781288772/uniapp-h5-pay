<template>
	<view>
		<web-view src="https://uniapp.dcloud.io/api/router.html#navigateto"></web-view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				src:'',
			}
		},
		onLoad(options) {
			console.log(options.src)
			this.src = options.src;
		}
	}
</script>

<style>
</style>
