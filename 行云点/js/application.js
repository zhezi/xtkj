$(function($) {

  (function(){
    
    // 菜单切换
  	$('.switch a').click(function(){
  		var _this=$(this),_index=$(this).index();
  		_this.addClass('active').siblings('a').removeClass('active');
  		$('.switch-box').eq(_index).fadeIn(1000).siblings('.switch-box').hide();
  	})

    
    if ($('.m-login').size()>0) {
        $('.m-login').bind('click',function(){
            $(this).find('em').toggleClass('active');
        });
    };

    //下拉选择
    if ($('.text-select').size()>0) {
        $(".text-select").each(function(){
            var _this=$(this);
            var _text=$(this).find(".text");
            var _item=$(this).children(".item");
            var _show=function(){
              _item.slideDown(200);
              _this.parent().parent("dl").css("z-index",3);
            };
            var _hide=function(){
              _item.slideUp(200);
              _this.parent().parent("dl").css("z-index",1);
            };
            _text.click(function(){
              _item.is(":hidden")?_show():_hide();
            });
            _item.find("li").click(function(){
              _text.val($(this).html());_hide();
            });
            $("body").click(function(i){
               if('undefined'!=typeof(event)){
      				   if (event.stopPropagation) {   
      					  // 针对 Mozilla 和 Opera   
      						event.stopPropagation();   
        					}   
        					else if (window.event) {   
        					// 针对 IE   
        						window.event.cancelBubble = true;   
        					} 
               }
                !$(i.target).parents(".text-select").first().is(_this) ? _hide():"";
            });
        })
    };

    // 左侧导航切换
    if($('.qa-box').size()>0){
        $('.qa-box').each(function(){
            var _this=$(this);
            _this.attr('data-open','false');
            $('.qa-box:first').attr('data-open','true');
            $('.qa-box:first').find('dd').slideDown(500);
        });

            $('.qa-box dd').bind('click',function(event){
                 if (event.stopPropagation) { 
                  // 针对 Mozilla 和 Opera     
                  event.stopPropagation();    
                }     
                else if (window.event) {    
                  // 针对 IE    
                  window.event.cancelBubble = true; 
                }
            })
        $('.qa-box').bind('click',function(){
            var _this=$(this),_dataOpen=_this.attr('data-open'),_index=_this.index();
            if(_dataOpen=='false'){
                $('.qa-box dd').slideUp(500);
                $('.qa-box').attr('data-open','false');
                $('.qa-box dt').removeClass('on');
                $('dd',_this).slideDown(500);
                $('dt',_this).addClass('on');
                _this.attr('data-open','true');
                function scroll(){
                    var scroll_offset = _this.offset();
                    $("body,html").animate({
                        scrollTop:scroll_offset.top
                    },0);
                    setTimeout(function () {
                        var scroll_offset = _this.offset();
                        $("body,html").animate({
                            scrollTop:scroll_offset.top
                        },0);
                    }, 400);
                }
                _this.eq(_index).trigger(scroll())
            }else{
                $('dd',_this).slideUp(500);
                $('dt',_this).removeClass('on');
                _this.attr('data-open','false');
            }
        });

        if($('.qa-box').attr('data-open') =='false'){
            var hash=window.location.href;
            if(!hash==''){
                var i=hash.lastIndexOf('q')+1;
                setTimeout(function(){
                    $('.qa-list .qa-box').eq(hash.substr(i,hash.length)-1).trigger('click');
                },10)
            }
        }
    }

    // back-top
    if($('.back-top').size()>0){
	    var offset = 300,offset_opacity = 1200,scroll_top_duration = 400,
		    $back_to_top = $('.back-top');
		$(window).scroll(function(){
			( $(this).scrollTop() > offset ) ? $back_to_top.hide() : $back_to_top.addClass('');
			if( $(this).scrollTop() > offset_opacity ) { 
				$back_to_top.show();
			}
		});
		$back_to_top.on('click', function(event){
			event.preventDefault();
			$('body,html').animate({
				scrollTop: 0
			 	}, scroll_top_duration
			);
		});
    }

  })();

});



 if ($('.product-details').size()>0){    
      $(window).scroll(function () {
         var $scrollTop = $(window).scrollTop(),
             _Height=$('.header').height(),
             _window=$(window).height(),
             _Height1=$('.location').height(),
             _Height2=$('.product-idea').height()+30;
         if($scrollTop >_Height+_Height1+_Height2){
           $('.scroll-div').stop().addClass('fixed');
         }else {
           $('.scroll-div').stop().removeClass('fixed');
         }
      })

      var _width=$(window).width();
     
      (function(a){
          a.extend({
              fastNav: function(b, c) {
                  b.click(function() {
                        var d = c.offset().top-40;
                        a("html, body").animate({scrollTop: d},500);
                        return false;
                  })
              }
          })
      })(jQuery); 
      $(function(){
        $.fastNav($("#scroll-nav-1"),$("#scroll-show-1"));
        $.fastNav($("#scroll-nav-2"),$("#scroll-show-2"));
        $.fastNav($("#scroll-nav-3"),$("#scroll-show-3"));
        $.fastNav($("#scroll-nav-4"),$("#scroll-show-4"));
        $.fastNav($("#scroll-nav-5"),$("#scroll-show-5"));
        $.fastNav($("#scroll-nav-6"),$("#scroll-show-6"));
        $(window).bind("scroll",fixednav);
      });
      var quick_height_1 = $("#scroll-show-1").offset().top;
      var quick_self_height_1 = quick_height_1 + $("#scroll-show-1").height();
      var quick_height_2 = $("#scroll-show-2").offset().top;
      var quick_self_height_2 = quick_height_2 + $("#scroll-show-2").height();
      var quick_height_3 = $("#scroll-show-3").offset().top;
      var quick_self_height_3 = quick_height_3 + $("#scroll-show-3").height();
      var quick_height_4 = $("#scroll-show-4").offset().top;
      var quick_self_height_4 = quick_height_4 + $("#scroll-show-4").height();
      var quick_height_5 = $("#scroll-show-5").offset().top;
      var quick_self_height_5 = quick_height_5 + $("#scroll-show-5").height();
      var quick_height_6 = $("#scroll-show-6").offset().top;
      var quick_self_height_6 = quick_height_6 + $("#scroll-show-6").height();
      function fixednav() {
        var K = $(".switch").offset().top+200;
        if (K > quick_height_1 && K < quick_self_height_1) {
            $(".switch a").siblings().removeClass("active");
            $("#scroll-nav-1").addClass("active");
        } else if (K > quick_height_2 && K < quick_self_height_2) {
            $(".switch a").siblings().removeClass("active");
            $("#scroll-nav-2").addClass("active")
        } else if (K > quick_height_3 && K < quick_self_height_3) {
            $(".switch a").siblings().removeClass("active");
            $("#scroll-nav-3").addClass("active")
        } else if (K > quick_height_4 && K < quick_self_height_4) {
            $(".switch a").siblings().removeClass("active");
            $("#scroll-nav-4").addClass("active")
        } else if (K > quick_height_5 && K < quick_self_height_5) {
            $(".switch a").siblings().removeClass("active");
            $("#scroll-nav-5").addClass("active")
        } else if (K > quick_height_6 && K < quick_self_height_6) {
            $(".switch a").siblings().removeClass("active");
            $("#scroll-nav-6").addClass("active")
        }
      }
      setTimeout(function(){fixednav();},200);
}

 if ($('.introduce-page').size()>0){    
      $(window).scroll(function () {
         var $scrollTop = $(window).scrollTop(),
             _Height=$('.header').height(),
             _window=$(window).height();
         if($scrollTop >_Height){
           $('.scroll-div').stop().addClass('fixed');
         }else {
           $('.scroll-div').stop().removeClass('fixed');
         }
      })

      var _width=$(window).width();
     
      (function(a){
          a.extend({
              fastNav: function(b, c) {
                  b.click(function() {
                        var d = c.offset().top-40;
                        a("html, body").animate({scrollTop: d},500);
                        return false;
                  })
              }
          })
      })(jQuery); 
      $(function(){
        $.fastNav($("#scroll-nav-1"),$("#scroll-show-1"));
        $.fastNav($("#scroll-nav-2"),$("#scroll-show-2"));
        $(window).bind("scroll",fixednav);
      });
      var quick_height_1 = $("#scroll-show-1").offset().top;
      var quick_self_height_1 = quick_height_1 + $("#scroll-show-1").height();
      var quick_height_2 = $("#scroll-show-2").offset().top;
      var quick_self_height_2 = quick_height_2 + $("#scroll-show-2").height();
      function fixednav() {
        var K = $(".switch").offset().top+170;
        if (K > quick_height_1 && K < quick_self_height_1) {
            $(".switch a").siblings().removeClass("active");
            $("#scroll-nav-1").addClass("active");
        } else if (K > quick_height_2 && K < quick_self_height_2) {
            $(".switch a").siblings().removeClass("active");
            $("#scroll-nav-2").addClass("active")
        }
      }
      setTimeout(function(){fixednav();},200);
}