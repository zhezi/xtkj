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
            $(this).children('em').toggleClass('active');
        });
    };

    if ($('.check-box').size()>0) {
        $('.check-box01').bind('click',function(){
            $(this).toggleClass('active');
        });
        $('.check-box02').bind('click',function(){
            $(this).addClass('active').siblings().removeClass('active');
        });
    };
    // 左侧滚动条
    if ($('.side-box').size()>0) {
      function nano_height() {
          var $height=$(window).height();
          $(".nano").height($height);
      }
      nano_height();
      $(window).resize(function() {
         nano_height();
         $(".nano").nanoScroller();
      })
      $(".nano").nanoScroller();
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


    $('.remove-btn').click(function(){
        $('#layer-remove').fadeIn();
    })
    $('.layer .close,.layer .close-btn').click(function(){
        $(".layer ").fadeOut();
    })

    // 左侧导航切换
    if($('.qa-box').size()>0){
        $('.qa-box').each(function(){
            var _this=$(this);
            _this.attr('data-open','false');
            // $('.qa-box:first').attr('data-open','true');
            // $('.qa-box:first').find('dd').slideDown(500);
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
