<template>
	<view class="music-head" :style="{color : color}">
		<view v-if="icon" class="music-head-icon" :class="{'music-head-iconblack':iconblack}">
			<view class="iconfont iconzuojiantou-copy" @tap="handelToBack"></view> | <view class="iconfont iconshouye"@tap="handelToHome"></view>
		</view>
		{{title}}
		
	</view>
</template>

<script>
	export default {
		name:"musichead",
		data() {
			return {
				
			};
		},
		props:['title','icon','color','iconblack'],
		methods:{
			handelToBack(){
				uni.navigateBack()
			},
			handelToHome(){
				uni.navigateTo({
					url:'../../pages/index/index'
				});
			},
		},
	}
</script>

<style scoped>
	.music-head{
		width: 100%;
		height: 75px;
		font-size: 16px;
		line-height: 80px;
		text-align: center;
		color: #000000;
		position: relative;
	}
	.music-head-icon{
		position: absolute;
		display: flex;
		justify-content: space-around;
		left: 8px;
		top: 26px;
		width: 90px;
		height: 31px;
		line-height: 31px;
		background: rgba(0,0,0,0.4);
		color: white;
		border-radius: 15px;
	}
	.music-head-iconblack{
		color: #000000;
		border: 1px #eaeaea solid;
		background:white;
	}

</style>
