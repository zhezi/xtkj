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
                  // if (event.stopPropagation) { 
                  //   // 针对 Mozilla 和 Opera     
                  //   event.stopPropagation();    
                  // }     
                  // else if (window.event) {    
                  //   // 针对 IE    
                  //   window.event.cancelBubble = true; 
                  // }
                  !$(event.target).parents(".user").first().is(_this) ? _hide():"";
            });
          });
      })
  };
  function Height(){
    $('.idea-box02 .switch-box').each(function () {
      var _this = $(this);
      var len=_this.find("dl").size();
      // console.log(len)
      _this.find('dl').each(function () {
        var _this2 = $(this);
        var _height = _this2.find("dd").height();
        // console.log(_height)
        if(_height > 110 && len>2){
          _this2.find("dd").addClass('height height1')
        }else if(_height > 260 && len<=2){
          _this2.find("dd").addClass('height height2')
        }
      })
    })
    
  }
  if($(".idea-box02").size()>0){
    Height()
  }
  
  function nano_height() {
      var $height1=$('.layer-side .layer-title').height(),
          $height2=$(window).height();
      $(".layer-side .nano").height($height2-120);
  }
  nano_height();
  $(window).resize(function() {
    nano_height();
  })
  if($('.nano').size()>0){
      $(".nano").nanoScroller();
  }

  (function(){
    // 菜单切换
    $('.switch').each(function(){
      $('.switch a').click(function(){
          var _this=$(this),_index=$(this).index();
          _this.addClass('active').siblings('a').removeClass('active');
          $('.switch-box').eq(_index).fadeIn(1000).siblings('.switch-box').hide();
          if($(".nano").size()>0){
            $('.switch-box').eq(_index).find(".nano").nanoScroller();
          }
        })

    })

    if ($('.table-model').size()>0) {
      $('.table-model li').each(function(){
          var _this=$(this);
          _this.attr('data-open','true');
      });
      $('.table-model .idea-up').bind('click',function(){
          var _this=$(this),_dataOpen=_this.attr('data-open');
          if(_dataOpen=='false'){
              _this.prev('.hide-box').slideUp(500);
              _this.removeClass('idea-down');
              _this.attr('data-open','true');
          }else{
              _this.prev('.hide-box').slideDown(500);
              _this.addClass('idea-down');
              _this.attr('data-open','false');
          }
      });
    }


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
              //  if('undefined'!=typeof(event)){
      				//    if (event.stopPropagation) {   
      				// 	  // 针对 Mozilla 和 Opera   
      				// 		event.stopPropagation();   
        			// 		}   
        			// 		else if (window.event) {   
        			// 		// 针对 IE   
        			// 			window.event.cancelBubble = true;   
        			// 		} 
              //  }
                !$(i.target).parents(".text-select").first().is(_this) ? _hide():"";
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
                // if (event.stopPropagation) { 
                //   // 针对 Mozilla 和 Opera     
                //   event.stopPropagation();    
                // }     
                // else if (window.event) {    
                //   // 针对 IE    
                //   window.event.cancelBubble = true; 
                // }
                !$(event.target).parents(".item-select").first().is(_this) ? _hide():"";
            });
        })
    };

    if($('.layer').size()>0){
      $('.remove-btn').bind('click',function () {
         $('#layer-remove').fadeIn();
         // $('#layer-remove .button').bind('click',function () {
         //   if($('.m-check em').hasClass("active")){
         //    var _this=$('.m-check em.active');
         //    _this.parent().parent().parent().parent().remove();
         //   }
         //   $('#layer-remove').fadeOut();
         // })
      })
      $('.layer .cover,.layer .close,.layer .close-btn').click(function(){
          $(".layer ").fadeOut();
          $('html').css('overflow-y','scroll');
      })
      $('#layer-edit .cover').click(function(){
          // $("this").unbind("click");
         $('#layer-edit').stop().fadeIn();

      })
    }
    if($('.layer-side').size()>0){
      $('.layer-side .cover,.layer-side .close').click(function(){
          $(".layer-side").fadeOut();
          $('html').css('overflow-y','scroll');
      })
    }
    // table展开收起
    if($('.show-tr').size()>0){
      $('.show-tr').each(function(){
          var _this=$(this);
          _this.attr('data-open','true');
          _this.bind('click',function(){
              var _this=$(this),_dataOpen=_this.attr('data-open');
              if(_dataOpen=='false'){
                  _this.next('.hide-tr').slideUp().removeClass('show');
                  _this.attr('data-open','true');
              }else{
                  _this.next('.hide-tr').slideDown(500).addClass('show');
                  _this.attr('data-open','false');
              }
          });
      });
      $('.hide-tr').each(function(){
          var _this=$(this);
          _this.bind('click',function(){
            _this.slideUp().removeClass('show');
            _this.prev('.show-tr').attr('data-open','true');
            console.log(1)
          })
      });
    }

    if($('.report-page').size()>0){
        $('.box .up').each(function(){
            var _this=$(this);
            _this.attr('data-open','true');
        });
        $('.box .up').bind('click',function(){
            var _this=$(this),_dataOpen=_this.attr('data-open');
            if(_dataOpen=='false'){
                _this.prev('.hide-box').slideUp(500);
                _this.removeClass('down');
                _this.html('');
                _this.attr('data-open','true');
            }else{
                _this.prev('.hide-box').slideDown(500);
                _this.addClass('down');
                _this.html('收起');
                _this.attr('data-open','false');
            }
        });

        $('.table-model li').each(function(){
            var _this=$(this);
            _this.attr('data-open','true');
        });
        $('.table-model .idea-up').bind('click',function(){
            var _this=$(this),_dataOpen=_this.attr('data-open');
            if(_dataOpen=='false'){
                _this.prev('.hide-box').slideUp(500);
                _this.removeClass('.idea-down');
                _this.html('展开');
                _this.attr('data-open','true');
            }else{
                _this.prev('.hide-box').slideDown(500);
                _this.addClass('.idea-down');
                _this.html('收起');
                _this.attr('data-open','false');
            }
        });

    }
    createImageBg();

    function createImageBg() {
        $('.newsImgCon').each(function () {
            var $this = $(this);
            var $image = $('img', $this).attr('src');
            $this.css({
                'background-image': 'url(' + $image + ')'
            });
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
