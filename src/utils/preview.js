/**
 * 预览图片
 * @param {Object} urls
 * @param {Object} current
 */
export function prePic(urls, current) {
	uni.previewImage({
		urls,
		current
	})
}