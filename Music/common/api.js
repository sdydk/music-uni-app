import {baseUrl} from "./config.js"

export function topList(){
	
	let listIds = ["3","0","2","1"]
	return new Promise(function(resolve,reject){
		uni.request({
			url:`${baseUrl}/toplist/detail`,
			method:'GET',
			data:{},
			success: res => {
				let result = res.data.list;
				// 总共有26个榜单，这里只用到了前四个榜单，你可以自己修改
				result.length = 4;
				for (var i = 0; i < listIds.length;i++){
					result[i].listId = i;
				}
				resolve(result);
			},
			fail: () => {
				
			},
			complete:()=>{},
		})
	})
	
}
export function list(listId){
	return uni.request({
		url:`${baseUrl}/playlist/detail?id=${listId}`,
		method:'GET',
	});
}

// 歌曲详情
export function songDetail(songId){
	return uni.request({
		url:`${baseUrl}/song/detail?ids=${songId}`,
		method:'GET',
	});
	
}
export function songSimi(songId){
	return uni.request({
		url:`${baseUrl}/simi/song?id=${songId}`,
		method:'GET',
	});
	
}
export function songComment(songId){
	return uni.request({
		url:`${baseUrl}/comment/music?id=${songId}`,
		method:'GET',
	});
	
}

export function songLyric(songId){
	return uni.request({
		url:`${baseUrl}/lyric?id=${songId}`,
		method:'GET',
	});
	
}

export function songUrl(songId){
	return uni.request({
		url:`${baseUrl}/song/url?id=${songId}`,
		method:'GET',
	});
	
}


// 搜索模块
export function searchHot(){
	return uni.request({
		url:`${baseUrl}/search/hot/detail`,
		method:'GET',
	});
}

export function searchWord(word){
	return uni.request({
		url:`${baseUrl}/search?keywords=${word}`,
		method:'GET',
	});
}

export function searchSuggest(word){
	return uni.request({
		url:`${baseUrl}/search/suggest?keywords=${word}&type=mobile`,
		method:'GET',
	});
}