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

  //登录后下拉条
  if ($('.user').size()>0) {
      $(".user").each(function(){
          var _this=$(this);
          var _item=$(this).children("ul");
          var _show=function(){
            _item.slideDown(200);
            _this.addClass('active')
          };
          var _hide=function(){
            _item.slideUp(200);
            _this.removeClass('active')
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

  (function(){
    
    // 菜单切换
  	$('.switch a').click(function(){
  		var _this=$(this),_index=$(this).index();
  		_this.addClass('active').siblings('a').removeClass('active');
  		$('.switch-box').eq(_index).fadeIn(1000).siblings('.switch-box').hide();
  	})

    
    if ($('.m-login').size()>0) {
        $('.m-login').bind('click',function(){
            $(this).children('em').toggleClass('active');
        });
    };

    // 注册下拉选择
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
    //下拉选择
    if ($('.select').size()>0) {
        $(".select").each(function(){
            var _this=$(this);
            var _text=$(this).children(".name");
            var _item=$(this).children(".select-box");
            var _show=function(){
              _item.slideDown(200);
            };
            var _hide=function(){
              _item.slideUp(200);
            };
            _text.click(function(){
              _item.is(":hidden")?_show():_hide();
            });
            _item.find("a").click(function(){
              _text.html($(this).html());_hide();
            });
        })
    };


    //下拉选择
    if ($('.item-select').size()>0) {
        $(".item-select").each(function(){
            var _this=$(this);
            var _text=$(this).children("input");
            var _item=$(this).children("ul");
            var _show=function(){
              _item.slideDown(200);
              _this.css("z-index",3);
              _this.find('.arrow-bottom').addClass('arrow-top');
            };
            var _hide=function(){
              _item.slideUp(200);
              _this.css("z-index",1);
              _this.find('.arrow-bottom').removeClass('arrow-top');
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
                !$(event.target).parents(".item-select").first().is(_this) ? _hide():"";
            });
        })
    };

    $('.layer .close,.layer .close-btn').click(function(){
        $(".layer ").fadeOut();
        $('html').css('overflow-y','scroll');
    })


    if($('.report-page').size()>0){
        $('.report-page .box').each(function(){
            var _this=$(this);
            _this.attr('data-open','true');
           $('.up').addClass('down');
        });
        $('.box .up').bind('click',function(){
            var _this=$(this),_dataOpen=_this.parent().parent().attr('data-open'),_index=_this.parent().parent().index();
            if(_dataOpen=='true'){
                _this.parent().next('.hide-box').slideUp(500);
                _this.removeClass('down');
                _this.parent().parent().attr('data-open','false');
            }else{
                _this.parent().next('.hide-box').slideDown(500);
                _this.addClass('down');
                _this.parent().parent().attr('data-open','true');
            }
        });
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
