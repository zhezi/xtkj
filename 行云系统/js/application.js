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
        }else if(_height > 110 && len<=2){
          _this2.find("dd").addClass('height height2')
        }
      })
    })
    
  }
  if($(".idea-box02").size()>0){
    Height()
  }

  (function(){
    
    // 菜单切换
    $('.idea-box').each(function(){
      var $this=$(this);
      $this.find('.switch a').click(function(){
          var _this=$(this),_index=$(this).index();
          _this.addClass('active').siblings('a').removeClass('active');
          $this.find('.switch-box').eq(_index).fadeIn(1000).siblings('.switch-box').hide();
          if($(".nano").size()>0){
            $this.find('.switch-box').eq(_index).find(".nano").nanoScroller();
          }
          if($(".idea-box02").size()>0){
            Height()
          }
        })

    })

    
    if ($('.m-login').size()>0) {
        $('.m-login').bind('click',function(){
            $(this).children('em').toggleClass('active');
        });
    };
    
    if ($('.m-check').size()>0) {
        $('.m-check em').bind('click',function(){
            $(this).toggleClass('active');
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

    //下拉选择银行模板
    if ($('.item-select02').size()>0) {
      $(".item-select02").each(function(){
          var _this=$(this);
          var _text=$(this).children("input");
          var _item=$(this).children("ul");
          var _lookLink=$(this).children(".lookLink");
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
            var _url= $(this).find('a').attr('href');
            _text.val($(this).find('.name').html());_hide();
            _lookLink.html($(this).find('a').html()).attr("href",_url);_hide();
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
              !$(event.target).parents(".item-select02").first().is(_this) ? _hide():"";
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
      $('.report-btn').bind('click',function () {
         $('#layer-report').fadeIn();
      })
      $('.exclude-btn').bind('click',function () {
         $('#layer-exclude').fadeIn();
         $('html').css('overflow','hidden');
         $(".nano").nanoScroller();
      })

      $('#add_sus').bind('click',function () {
        $('#layer-examine').fadeIn();
        $('html').css('overflow','hidden');
        $(".nano").nanoScroller();
        $('.add-button').bind('click',function(){
          $('.nano table').append('<tr><td width="41%">四川苍蓝印务有限公司</td><td width="41%">四川苍蓝印务有限公司5</td><td width="18%"><a href="javascript:void(0);" class="delete-tr">删除</a></td></tr>');
          $(".nano").nanoScroller();
        })
      })

      $('.merge-btn').bind('click',function () {
         $('#layer-merge').fadeIn();
      })
      $('.match-btn').bind('click',function () {
         $('#layer-match').fadeIn();
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
