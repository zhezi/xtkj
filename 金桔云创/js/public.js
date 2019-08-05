window.addEventListener('DOMContentLoaded', function (){
	var shuping = 'onorientationchange' in window ? 'orientationchange' : 'resize';
	var timer = null;

	//设置字体
	function setFontSize(){
		var w = window.innerWidth;
		if(w<750){
		  document.documentElement.style.fontSize = 100*w/750 + 'px';
	    }else{
		  document.documentElement.style.fontSize = 100 + 'px';
	    }
	}
	setFontSize();
	window.addEventListener(shuping, function (){
		clearTimeout(timer);
		timer = setTimeout(setFontSize, 300);
	}, false);
}, false);

