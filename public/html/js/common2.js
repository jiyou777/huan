//移除某也元素
function remove(selectors) {
	selectors.removeNode = [];
	if (selectors.length != undefined) {
		var len = selectors.length;
		for (var i = 0; i < len; i++) {
			selectors.removeNode.push({
				parent: selectors[i].parentNode,
				inner: selectors[i].outerHTML,
				next: selectors[i].nextSibling
			});
		}
		for (var i = 0; i < len; i++)
			selectors[0].parentNode.removeChild(selectors[0]);
	}
	else {
		selectors.removeNode.push({
			parent: selectors.parentNode,
			inner: selectors.outerHTML,
			next: selectors.nextSibling
		});
		selectors.parentNode.removeChild(selectors);
	}
}
function $(id) {
	return document.getElementById(id)
}
//列表文字超长滚动,sw是span标签，dw是div标签
function scroll(s, d) {
	var txt = d.getAttribute("title");
	var pw = d.offsetWidth;
	var sw = s.offsetWidth;
	if (sw > pw) {
		d.removeChild(s)
		var node1 = document.createElement("marquee");
		var textnode = document.createTextNode(txt);
		node1.appendChild(textnode);
		d.appendChild(node1)

	}
}
//停止滚动
function stopscroll() {
	var marquee = document.getElementsByTagName("marquee")[0];
	if (marquee != undefined) {
		var txt = marquee.parentNode.getAttribute("title")
		var node1 = document.createElement("span");
		var textnode = document.createTextNode(txt);
		node1.appendChild(textnode);
		marquee.parentNode.appendChild(node1);
		marquee.parentNode.removeChild(marquee);
	}
}
//设置任意的一个元素,移动到指定的目标位置
function animate(element, target) {
	clearInterval(element.timeId);
	//定时器的id值存储到对象的一个属性中
	element.timeId = setInterval(function () {
		//获取元素的当前的位置,数字类型
		var current = element.offsetleft;
		//每次移动的距离
		var step = 50;
		step = current < target ? step : -step;
		//当前移动到位置
		current += step;

		if (Math.abs(current - target) > Math.abs(step)) {
			element.style.left = current+"px"
		} else {
			//清理定时器
			clearInterval(element.timeId);
			//直接到达目标
		
		   element.style.left = target + "px";
		}
	}, 20);

}

function autoPlay() {
	if (pic == ulObj.length-1) {
		pic = 0;//先设置pic=0
		box.style.left = "0px"
	}
	pic++;
	animate(box, -pic * imgWidth);
	if (pic == ulObj.length-1) {
		for(var i = 0;i<olObj.length;i++){
			olObj[i].className = ""
		}
		olObj[0].className = "active"
	} else {
		//干掉所有的小按钮的背景颜色
		for(var i = 0;i<olObj.length;i++){
			olObj[i].className = ""
		}
		olObj[pic].className = "active"
	}

}
