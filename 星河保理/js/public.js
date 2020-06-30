window.addEventListener('DOMContentLoaded', function (){
	var shuping = 'onorientationchange' in window ? 'orientationchange' : 'resize';
	var timer = null;
	function setFontSize(){
		var w = window.innerWidth;
		if(w<640){
		  document.documentElement.style.fontSize = 100*w/640 + 'px';
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

