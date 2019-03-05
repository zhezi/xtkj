$(function($) {

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

    (function(){
    $(window).scroll(function () {
       var $scrollTop = $(window).scrollTop();
       if($scrollTop > 60){
         $('.header-fixed').stop().removeClass('special-header');
       } else{
         $('.header-fixed').stop().addClass('special-header');
       }
    })
    // 首页
    if ($('.flexslider').size()>0) { 
       $(".section01 .flexslider").flexslider({
          animation:'slide',
          animationSpeed: 1000,
          directionNav: false,
          slideshowSpeed: 4000,
          pauseOnHover: true
       });     
      $(".investor01 .flexslider").flexslider({
          animation:'slide',
          animationSpeed: 2000,
          directionNav: false,
          slideshowSpeed: 5000,
          pauseOnHover: true
       });
       $(".video-box .flexslider").flexslider({
          animation:'slide',
          animationSpeed: 1000,
          directionNav: false,
          slideshowSpeed: 4000,
          pauseOnHover: true
       });     
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

    // 投顾-基金对比
    if ($('.flexslider').size()>0) { 
      $(".warn-box .flexslider").flexslider({
          animation:'slide',
          direction:"vertical",
          animationSpeed: 1000,
            directionNav: false,
          slideshowSpeed: 2000,
          pauseOnHover: true,
          controlNav: false
       });
    };

    //登录后下拉条
    if ($('.user').size()>0) {
        $(".user").each(function(){
            var _this=$(this);
            var _item=$(this).children("ul");
            var _show=function(){
              _item.slideDown(200);
            };
            var _hide=function(){
              _item.slideUp(200);
            };
            _this.click(function(){
              _item.is(":hidden")?_show():_hide();
              $("body").click(function(event){
                    if (event.stopPropagation) { 
                      // 针对 Mozilla 和 Opera     
                      event.stopPropagation();    
                    }     
                    else if (window.event) {    
                      // 针对 IE    
                      window.event.cancelBubble = true; 
                    }
                    !$(event.target).parents(".user").first().is(_this) ? _hide():"";
              });
            });
        })
    };
    //登录后下拉条
    if ($('.privacy').size()>0) {
        $(".privacy").each(function(){
            var _this=$(this);
            var _item=$(this).find(".p-box");
            var _show=function(){
              _item.slideDown(200);
              _this.css("z-index",3);
            };
            var _hide=function(){
              _item.slideUp(200);
              _this.css("z-index",2);
            };
            _this.click(function(){
              _item.is(":hidden")?_show():_hide();
            });
              $("body").click(function(event){
                    if (event.stopPropagation) { 
                      // 针对 Mozilla 和 Opera     
                      event.stopPropagation();    
                    }     
                    else if (window.event) {    
                      // 针对 IE    
                      window.event.cancelBubble = true; 
                    }
                    !$(event.target).parents(".privacy").first().is(_this) ? _hide():"";
              });
              $('.p-box').click(function(event){
                    if (event.stopPropagation) { 
                      // 针对 Mozilla 和 Opera     
                      event.stopPropagation();    
                    }     
                    else if (window.event) {    
                      // 针对 IE    
                      window.event.cancelBubble = true; 
                    }
              });
        })
    };

    //企明星常见问题!
    if($('.customer-box').size()>0){
        $('.customer-box .title').each(function(){
            var _this=$(this);
            _this.attr('data-open','false');
            $('.customer-box .title:first').attr('data-open','true');
            $('.customer-box .block:first').slideDown(500);
        });

        $('.customer-box .title').bind('click',function(){
            var _this=$(this),_dataOpen=_this.attr('data-open'),_index=_this.index();
            if(_dataOpen=='false'){
                $('.block').slideUp(500);
                $('.title').attr('data-open','false');
                $('.title .up').addClass('down').html('展开');
                _this.next('.block').slideDown(500);
                _this.find('.up').removeClass('down').html('收起');
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
                _this.next('.block').slideUp(500);
                _this.find('.up').addClass('down').html('展开');
                _this.attr('data-open','false');
            }
        });
        $(".download").click(function(event){
            if (event.stopPropagation) { 
              // 针对 Mozilla 和 Opera     
              event.stopPropagation();    
            }     
            else if (window.event) {    
              // 针对 IE    
              window.event.cancelBubble = true; 
            }
        });
    }

    //下拉选择
    if ($('.text-select').size()>0) {
        $(".text-select").each(function(){
            var _this=$(this);
            var _text=$(this).children(".text");
            var _item=$(this).children(".select-box");
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
            $("body").click(function(event){
                if (event.stopPropagation) { 
                  // 针对 Mozilla 和 Opera     
                  event.stopPropagation();    
                }     
                else if (window.event) {    
                  // 针对 IE    
                  window.event.cancelBubble = true; 
                }
                !$(event.target).parents(".text-select").first().is(_this) ? _hide():"";
            });
        })
    };
    
    if ($('.report').size()>0) {
        $(".report").each(function(){
            var _this=$(this);
            var _item=$(this).children("ul");
            var _show=function(){
              _item.slideDown(200);
            };
            var _hide=function(){
              _item.slideUp(200);
            };
            _this.click(function(){
              _item.is(":hidden")?_show():_hide();
              $("body").click(function(event){
                    if (event.stopPropagation) { 
                      // 针对 Mozilla 和 Opera     
                      event.stopPropagation();    
                    }     
                    else if (window.event) {    
                      // 针对 IE    
                      window.event.cancelBubble = true; 
                    }
                    !$(event.target).parents(".report").first().is(_this) ? _hide():"";
              });
            });
        })
    };

    //下拉选择
    if ($('.select').size()>0) {
        $(".select").each(function(){
            var _this=$(this);
            var _text=$(this).children("span");
            var _item=$(this).children("ul");
            var _show=function(){
              _item.slideDown(200);
              _this.css("z-index",3);
            };
            var _hide=function(){
              _item.slideUp(200);
              _this.css("z-index",1);
            };
            _text.click(function(){
              _item.is(":hidden")?_show():_hide();
            });
            _item.find("li").click(function(){
              _text.html($(this).html());_hide();
            });
            $("body").click(function(event){
                if (event.stopPropagation) { 
                  // 针对 Mozilla 和 Opera     
                  event.stopPropagation();    
                }     
                else if (window.event) {    
                  // 针对 IE    
                  window.event.cancelBubble = true; 
                }
                !$(event.target).parents(".select").first().is(_this) ? _hide():"";
            });
        })
    };

    // 菜单切换
    $('.switch a').click(function(){
        var _this=$(this),_index=$(this).index();
        _this.addClass('active').siblings('a').removeClass('active');
        $('.switch-box').eq(_index).fadeIn(1000).siblings('.switch-box').hide();
    })

    $('.follow').click(function(){
        var _this=$(this);
        _this.addClass('followed')
        _this.find('.name').html('已关注')
    })

    //企明星常见问题
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

    // function setHeight(){
    //   if ($('.row').size()>0){
    //     var l_height = $('.left').height(),
    //         r_height = $('.right').height(),
    //         f_height = $('.footer').height();
    //     if(l_height>r_height){
    //       $('.row .right').height(l_height); 
    //     }
    //     else{
    //       $('.row .left').height(r_height+932); 
    //     }
    //   }
    // } 
    // setHeight(); 
    // $(window).resize(function(){ setHeight();}) 


  })();

});

 if ($('.fixed-box').size()>0){    
      $(window).scroll(function () {
         var $scrollTop = $(window).scrollTop(),
             _Height=$('.header').height(),
             _window=$(window).height(),
             _Height1=$('.right').height(),
             _Height3=$('.footer').height();
         if($scrollTop + _window - _Height3 > _Height+_Height1- _Height3){
           $('.fixed-main').stop().removeClass('fixed-box');
         }else {          
           $('.fixed-main').stop().addClass('fixed-box');
         }
      })
}

 if ($('.type-fixed').size()>0){    
      $(window).scroll(function () {
         var $scrollTop = $(window).scrollTop();
         if($scrollTop > 40){
           $('.type-fixed').css({top:0});
         }else {          
           $('.type-fixed').css({top:'60px'});
         }
      })
}


 if ($('.scroll-div').size()>0){    
      $(window).scroll(function () {
         var $scrollTop = $(window).scrollTop(),
             _Height=$('.header').height(),
             _window=$(window).height(),
             _Height1=$('.idea-box').height()+30,
             _width=$('.left').width();
         // $('.scroll-div .switch').css({'width':_width-70})
         // $(window).resize(function() {
         //   var _width=$('.left').width();
         //   $('.scroll-div .switch').css({'width':_width-70})
         // });

         if($scrollTop >_Height+_Height1){
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
                        var d = c.offset().top-60;
                        a("html, body").animate({scrollTop: d},500);
                        return false;
                  })
              }
          })
      })(jQuery); 
      $(function(){
        $.fastNav($(".switch a"),$("#scroll-show-1"));
        $(window).bind("scroll",fixednav);
      });
      var quick_height_1 = $("#scroll-show-1").offset().top;
      var quick_self_height_1 = quick_height_1 + $("#scroll-show-1").height();
      function fixednav() {
        var K = $(".switch").offset().top+200;
        if (K > quick_height_1 && K < quick_self_height_1) {
            // $(".switch a").siblings().removeClass("active");
            // $("#scroll-nav-1").addClass("active");
        }
      }
      setTimeout(function(){fixednav();},200);
}

