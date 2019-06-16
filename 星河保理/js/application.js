
  /*表单验证*/
var checkForm = {
		//必填验证
		//传进来的对象均为jq对象
		mandatory:function(obj){		
			var oValue = obj.val();
			if(oValue != null && $.trim(oValue).length > 0){ 
				return true;
			}else{ 	
				return false;		
			};
		},
		//验证手机号码
		editMobile:function(obj){
			var mobile=obj.val();
		    var rl=/^1[3|4|5|8|7][0-9]\d{8}$/;
		    if(mobile!=null && $.trim(mobile).length>0 && !rl.test(mobile)){
		    	return true;
		    }else{
				return false;
			}
		},//验证手机号码
		/*editPwd:function(obj){
			var pwd=obj.val();
			if(pwd!=null && $.trim(pwd).length>0 && pwd.match(/\D/g) && !/^[a-zA-Z]*$/.test(pwd) && /\w/.test(pwd)){
		    	return true;
		    }else{
				return false;
			}
		},*/
		editPwd:function(obj){
			var yzm=obj.val();
		   // var rl=/^(\w){6,20}$/;
			var rl=/^.*[A-Za-z0-9\\w_-]+.*$/;
		    if(yzm!=null && $.trim(yzm).length>0 && rl.test(yzm)){
		    	return true;
		    }else{
				return false;
			}
		},
		//验证验证码
		editYzm:function(obj){
			var pwd=obj.val();
		    var rl=/^\d{6}$/;
		    if(pwd!=null && $.trim(pwd).length>0 && !rl.test(pwd)){
		    	return true;
		    }else{
				return false;
			}
		},
		//验证图片验证码
		editImgYzm:function(obj){
			var pwd=obj.val();
		    var rl=/^[0-9a-zA-Z]{6}$/;
		    if(pwd!=null && $.trim(pwd).length>0 && !rl.test(pwd)){
		    	return true;
		    }else{
				return false;
			}
		},
		//长度验证
		vLength:function(obj,min,max){
			var oValue = obj.val();
			if(oValue.length >= min && oValue.length <= max){
				return true;
			}else{
				return false;
			};
		},
		//手机座机一同验证
		telephone: function(obj){
			var tel = obj.val(); 
			var rl =/^((\d{3,4}-)?\d{7,8})|(1[3|4|5|7|8]\d{9})$/
			return rl.test(tel);
		}
};
/*登录注册验证*/
var bStop = false;
$('.js-sbm').on('click',function(){
	//手机号必填验证
	if($('#js-company_name').length && !checkForm.mandatory($('#js-company_name')) && !bStop){
		bStop = true;
		$('.m-fix-tips').html('请输入营业执照上的公司全称').fadeIn().css({'bottom':'80px'});
	}
	else if($('#js-realname').length &&!checkForm.mandatory( $('#js-realname')) && !bStop){
		//姓名必填验证
		bStop = true;
		$('.m-fix-tips').html('请输入姓名').fadeIn().css({'bottom':'80px'});
	}else if($('#js-realname').length &&($('#js-realname').val().length  < 2 || $('#js-realname').val().length > 20) && !bStop){
		bStop = true;
		$('.m-fix-tips').html('姓名为2～20个字符').fadeIn().css({'bottom':'80px'});
	}else if($('#js-telephone').length &&!checkForm.mandatory( $('#js-telephone')) && !bStop){
		//手机座机必填验证
		bStop = true;
		$('.m-fix-tips').html('请输入手机或座机号码').fadeIn().css({'bottom':'80px'});
	}else if($('#js-telephone').length &&!checkForm.telephone( $('#js-telephone')) && !bStop){
		//手机座机必填验证
		bStop = true;
		$('.m-fix-tips').html('请输入正确的手机或座机号码').fadeIn().css({'bottom':'80px'});
	}else if($('#js-tel').length && !checkForm.mandatory($('#js-tel')) && !bStop){
		bStop = true;
		$('.m-fix-tips').html('请输入手机号码').fadeIn().css({'bottom':'80px'});	
	}else if($('#js-tel').length && checkForm.editMobile( $('#js-tel') )&& !bStop){
		//手机号正确验证
		bStop = true;
		$('.m-fix-tips').html('请输入正确的手机号码').fadeIn().css({'bottom':'80px'});
	}else if($('#js-code').length && !checkForm.mandatory($('#js-code')) && !bStop){
		//验证码必填验证
		bStop = true;
		$('.m-fix-tips').html('请输入验证码').fadeIn().css({'bottom':'80px'});
	}else if($('#js-code').length && checkForm.editYzm( $('#js-code') )&& !bStop){
		//验证码正确验证
		bStop = true;
		$('.m-fix-tips').html('验证码位数不对').fadeIn().css({'bottom':'80px'});
	}else if($('#js-imgyzm').length && !checkForm.mandatory($('#js-imgyzm')) && !bStop){
		//验证码必填验证
		bStop = true;
		$('.m-fix-tips').html('请输入图片验证码').fadeIn().css({'bottom':'80px'});
	}else if($('#js-imgyzm').length && checkForm.editImgYzm( $('#js-imgyzm') )&& !bStop){
		//验证码正确验证
		bStop = true;
		$('.m-fix-tips').html('图片验证码输入不正确').fadeIn().css({'bottom':'80px'});
	}else if($('#js-psw').length && !checkForm.mandatory($('#js-psw')) && !bStop){
		//密码必填验证
		bStop = true;
		$('.m-fix-tips').html('请输入密码').fadeIn().css({'bottom':'80px'});
    }else if($('#js-psw').length && !checkForm.editPwd( $('#js-psw') )&& !bStop){
		//密码正确验证
		bStop = true;
		$('.m-fix-tips').html('密码输入不合法').fadeIn().css({'bottom':'80px'});
	}else if($('#js-xieyi').length && !$('#js-xieyi').hasClass('active') && !bStop){
		//密码必填验证
		bStop = true;
		$('.m-fix-tips').html('请同意协议').fadeIn().css({'bottom':'80px'});
	}else{
	};
	var timer = setTimeout(function(){
		if(bStop){
			$('.m-fix-tips').css({'bottom':'20px'}).fadeOut();
			bStop = false;	
			clearTimeout(timer);
		}
	},3000);
});
$('.m-register').bind('click',function(){
    $(this).children('em').toggleClass('active');
});
// tab切换
$('.switch a').click(function(){
    var _this=$(this),_index=$(this).index();
    _this.addClass('active').siblings('a').removeClass('active');
    $('.switch-box').eq(_index).fadeIn(1000).siblings('.switch-box').hide();
})
