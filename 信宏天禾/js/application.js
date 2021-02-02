$(function($) {

  (function(){
  	// 头部
	if($('.header').size()>0){
	    $(".header .list").hover(function() {
	            $(this).find('.name').addClass('current');
			    $(this).find('.subnav').slideDown();
	    }, function() {
	            $(this).find('.name').removeClass('current');
			    $('.subnav').hide();
	    });    
	}
    $(window).scroll(function () {
       var $scrollTop = $(window).scrollTop();
       if($scrollTop > 70){
         $('.header-fixed').stop().removeClass('special-header');
       } else{
         $('.header-fixed').stop().addClass('special-header');
       }
    })
    // 首页
  	if ($('.index').size()>0) {	
		 $(".section01 .flexslider").flexslider({
	        animation:'slide',
	        animationSpeed: 1000,
            directionNav: false,
	        slideshowSpeed: 4000,
		    pauseOnHover: true
	     });
		 $(".section07 .flexslider").flexslider({
	        animation:'slide',
	        animationSpeed: 2000,
            directionNav: false,
	        slideshowSpeed: 4000,
		    pauseOnHover: true
	     });
  	};

  	// 底部
	$('.footer .wx-icon').mouseover(function(){
	    $('.weixin-img').slideDown();
	})
	$('.footer .weixin').mouseleave(function(){
	    $('.weixin-img').slideUp();
	})
    
    // 菜单切换
	$('.switch a').click(function(){
		var _this=$(this),_index=$(this).index();
		_this.addClass('active').siblings('a').removeClass('active');
		$('.switch-box').eq(_index).fadeIn(1000).siblings('.switch-box').hide();
	})

    //下拉选择
    if ($('.text-select').size()>0) {
        $(".text-select").each(function(){
            var _this=$(this);
            var _text=$(this).children(".text");
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


    //下拉选择
    if ($('.select').size()>0) {
        $(".select").each(function(){
            var _this=$(this);
            var _text=$(this).children(".name");
            var _item=$(this).children(".select-box"),
                _index=$(this).index();
            var _show=function(){
              _item.slideDown(200);
              _this.find('span.name').addClass('up')
            };
            var _hide=function(){
              _item.slideUp(200);
              _this.find('span.name').removeClass('up')
            };
            _this.click(function(){
              _this.addClass('active').siblings().removeClass('active');
              $('.switch-cont').eq(_index).fadeIn(1000).siblings('.switch-cont').hide();
            });
            _text.click(function(){
              _item.is(":hidden")?_show():_hide();
            });
            _item.find("a").click(function(){
              _text.html($(this).html());_hide();
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
                !$(i.target).parents(".select").first().is(_this) ? _hide():"";
            });
        })
    };
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
    
    if ($('.m-login').size()>0) {
        $('.m-login').live('click',function(){
            $(this).children('em').toggleClass('active');
        });
    };

    //企明星常见问题!
    if($('.qa-box').size()>0){
        $('.qa-box').each(function(){
            var _this=$(this);
            _this.attr('data-open','false');
            // $('.qa-box:first').attr('data-open','true');
            // $('.qa-box:first').find('dd').slideDown(500);
        });

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
    if($('.contract').size()>0){      
        $(window).scroll(function () {
           var $scrollTop = $(window).scrollTop(),
               _Height=$('.header').height(),
               _window=$(window).height(),
               _Height1=$('.section').height()-60,
               _Height2=$('.btn').height(),
               _Height3=$('.footer').height();
           if($scrollTop>_Height+_Height1){
             $('.contract .btn').stop().removeClass('fixed');
           }else {
             $('.contract .btn').stop().addClass('fixed');
           }
           if($scrollTop+_window-_Height3 >_Height+_Height1+_Height2){
             $('.contract .btn').stop().removeClass('fixed');
           }
        })
    }
    if($('.personal,.subpage,.details-page').size()>0){
        if($('.page-layer').size()>0){
            $('.nav a').click(function(){
                var _this=$(this),_index=$(this).index();
                _this.addClass('active').siblings('a').removeClass('active');
                $('.nav-box').eq(_index).show().siblings('.nav-box').hide();
            })
        }        
        function nano_height() {
            var $height1=$('.page-layer h2').height(),
                $height2=$('.page-layer .btn').height(),
                $height3=$(window).height();
            $(".page-layer .nano").height($height3-$height2-$height1-33);
            $('#layer-consignee .nano').height($height3-$height1-33);
            $('#layer-examine .nano').height($height3-$height1-10);
        }
        nano_height();
        $(window).resize(function() {
           nano_height();
        })
        if($('.nano').size()>0){
             $(".nano").nanoScroller();
        }
        $(".button-account").click(function(){
            $('#layer-account').animate({'top':0});
            $('html').css('overflow','hidden');
        })
        $(".button-record").click(function(){
            $('#layer-record').animate({'top':0});
            $('html').css('overflow','hidden');
        })
        $(".button-integral").click(function(){
            $('#layer-integral').animate({'top':0});
            $('html').css('overflow','hidden');
        })
        $(".button-consignee").click(function(){
            $('#layer-consignee').animate({'top':0});
            $('html').css('overflow','hidden');
        })
        $(".button-invited").click(function(){
            $('#layer-invited').animate({'top':0});
            $('html').css('overflow','hidden');
        })
        $('.page-layer .close,.page-layer .close-btn').click(function(){
            $('.page-layer').animate({'top':'100%'});
            $('html').css('overflow-y','scroll');
            if($('.layer-stip').size()>0){
                $(".layer-stip ").fadeOut();
            }
            if($('.layer').size()>0){
                $(".layer").fadeOut();
            }
        })
        $('.cash-btn').click(function(){
            $('#layer-cash').fadeIn();
        })
        $('.revoke-btn').click(function(){
            $('#layer-revoke').fadeIn();
        })
        $('.email-btn').click(function(){
            $('#layer-email').fadeIn();
        })
        $('.layer .close,.layer .close-btn').click(function(){
            $(".layer ").fadeOut();
        })
        $(".order-btn").hover(function() {
                $(this).next('.order-item').slideDown();
        }, function() {
                $(this).next('.order-item').hide();
        });
    }

  })();

});

//  if ($('.product-details').size()>0){    
//       $(window).scroll(function () {
//          var $scrollTop = $(window).scrollTop(),
//              _Height=$('.header').height(),
//              _window=$(window).height(),
//              _Height1=$('.location').height(),
//              _Height2=$('.product-idea').height()+30;
//          if($scrollTop >_Height+_Height1+_Height2){
//            $('.scroll-div').stop().addClass('fixed');
//          }else {
//            $('.scroll-div').stop().removeClass('fixed');
//          }
//       })

//       var _width=$(window).width();
     
//       (function(a){
//           a.extend({
//               fastNav: function(b, c) {
//                   b.click(function() {
//                         var d = c.offset().top-40;
//                         a("html, body").animate({scrollTop: d},500);
//                         return false;
//                   })
//               }
//           })
//       })(jQuery); 
//       $(function(){
//         $.fastNav($("#scroll-nav-1"),$("#scroll-show-1"));
//         $.fastNav($("#scroll-nav-2"),$("#scroll-show-2"));
//         $.fastNav($("#scroll-nav-3"),$("#scroll-show-3"));
//         $.fastNav($("#scroll-nav-4"),$("#scroll-show-4"));
//         $.fastNav($("#scroll-nav-5"),$("#scroll-show-5"));
//         $.fastNav($("#scroll-nav-6"),$("#scroll-show-6"));
//         $(window).bind("scroll",fixednav);
//       });
//       var quick_height_1 = $("#scroll-show-1").offset().top;
//       var quick_self_height_1 = quick_height_1 + $("#scroll-show-1").height();
//       var quick_height_2 = $("#scroll-show-2").offset().top;
//       var quick_self_height_2 = quick_height_2 + $("#scroll-show-2").height();
//       var quick_height_3 = $("#scroll-show-3").offset().top;
//       var quick_self_height_3 = quick_height_3 + $("#scroll-show-3").height();
//       var quick_height_4 = $("#scroll-show-4").offset().top;
//       var quick_self_height_4 = quick_height_4 + $("#scroll-show-4").height();
//       var quick_height_5 = $("#scroll-show-5").offset().top;
//       var quick_self_height_5 = quick_height_5 + $("#scroll-show-5").height();
//       var quick_height_6 = $("#scroll-show-6").offset().top;
//       var quick_self_height_6 = quick_height_6 + $("#scroll-show-6").height();
//       function fixednav() {
//         var K = $(".switch").offset().top+200;
//         if (K > quick_height_1 && K < quick_self_height_1) {
//             $(".switch a").siblings().removeClass("active");
//             $("#scroll-nav-1").addClass("active");
//         } else if (K > quick_height_2 && K < quick_self_height_2) {
//             $(".switch a").siblings().removeClass("active");
//             $("#scroll-nav-2").addClass("active")
//         } else if (K > quick_height_3 && K < quick_self_height_3) {
//             $(".switch a").siblings().removeClass("active");
//             $("#scroll-nav-3").addClass("active")
//         } else if (K > quick_height_4 && K < quick_self_height_4) {
//             $(".switch a").siblings().removeClass("active");
//             $("#scroll-nav-4").addClass("active")
//         } else if (K > quick_height_5 && K < quick_self_height_5) {
//             $(".switch a").siblings().removeClass("active");
//             $("#scroll-nav-5").addClass("active")
//         } else if (K > quick_height_6 && K < quick_self_height_6) {
//             $(".switch a").siblings().removeClass("active");
//             $("#scroll-nav-6").addClass("active")
//         }
//       }
//       setTimeout(function(){fixednav();},200);
// }

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