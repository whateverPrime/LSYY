let imgs = ['../images/slider/slider_1.jpg', '../images/slider/slider_2.jpg']
let index = 0
function changeSilder() {
	document.getElementById('img').src = imgs[index]
	index++
	if (index > 1) {
		index = 0
	}
}
setInterval('changeSilder()', 3000)
