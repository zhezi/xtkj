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
   if($('.header02').size()>0){
     $(window).scroll(function () {
         var $scrollTop = $(window).scrollTop();
         if($scrollTop > 60){
           $('.header02').stop().addClass('header-white');
         } else{
           $('.header02').removeClass('header-white')
         }
     })
   }
   if($('.subheader').size()>0){
     $(window).scroll(function () {
         var $scrollTop = $(window).scrollTop();
         if($scrollTop > 60){
           $('.subheader').stop().addClass('subheader-fixed');
         } else{
           $('.subheader').removeClass('subheader-fixed')
         }
     })
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
   // 右侧弹层不带底部按钮
   function nano_height() {
       var $height=$(window).height();
       $(".layer-side .nano").height($height-120);
   }
   // 右侧弹层带底部按钮
   function nano_height2() {
       var $height=$(window).height();
       $(".layer-side .nano").height($height-200);
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
 
     // 财务报表table单行展开收起
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
     // 二级页面增加默认滚动条
     if($('.subpage').size()>0){
      $('html').css({'overflow-y':'scroll'});
     }
     // 弹层中间区域展示
     if($('.layer').size()>0){
      var width = $(document.body).width();
       $('.add-file').bind('click',function () {
          $('#layer-file').fadeIn();
          $('html').css({'overflow-y':'hidden','max-width':width});
          // $('.subheader-fixed').css({'max-width':width});
       })
       if($('.nano').size()>0){
           $(".nano").nanoScroller();
       }
       $('.layer .cover,.layer .close,.layer .close-btn').click(function(){
           $(".layer ").hide();
           $('html').css({'overflow-y':'scroll','max-width':'100%'});
           $('.subheader-fixed').css({'max-width':'100%'});
       })
     }
     // 弹层右侧展示
     if($('.layer-side').size()>0){
       var width = $(document.body).width();
       $('.report-change').bind('click',function () {
          $('#layer-report-file').animate({right:"0"}).find('.cover').fadeIn();
          $('html').css({'overflow-y':'hidden','max-width':width});
          // $('.subheader-fixed').css({'max-width':width});
          nano_height2();
          $(window).resize(function() {
            nano_height2();
          })
          if($('.nano').size()>0){
              $(".nano").nanoScroller();
          }
       })
       $('.member-btn').bind('click',function () {
          $('#layer-member').animate({right:"0"}).find('.cover').fadeIn();
          $('html').css({'overflow-y':'hidden','max-width':width});
       })
       $('.history-btn').bind('click',function () {
          $('#layer-history').animate({right:"0"}).find('.cover').fadeIn();
          $('html').css({'overflow-y':'hidden','max-width':width});
          nano_height();
          $(window).resize(function() {
            nano_height();
          })
          if($('.nano').size()>0){
              $(".nano").nanoScroller();
          }
       })
       $('.layer-side').each(function(){
           var _this=$(this);
           _this.find('.cover,.close').bind('click',function(){
             $('html').css({'overflow-y':'scroll','max-width':'100%'});
             _this.animate({right:"-100%"}).find('.cover').fadeOut();
             $('.subheader-fixed').css({'max-width':'100%'});
           });
       });
     }
     // 普通table单行展开收起
     if($('.layer-side').size()>0){
       $('.layer-side .show-tr').each(function(){
           var _this=$(this);
           _this.attr('data-open','true');
           _this.bind('click',function(){
               var _this=$(this),_index=_this.index(),_dataOpen=_this.attr('data-open');
              //  console.log(_index)
               if(_dataOpen=='false'){
                   _this.next('.hide-tr').hide().removeClass('show');
                   _this.attr('data-open','true')
                   _this.find('.idea-up').removeClass('idea-down');
               }else{
                   _this.next('.hide-tr').slideDown(500).addClass('show');
                   _this.find('.idea-up').addClass('idea-down');
                   _this.attr('data-open','false');
               }
           });
       });
       $('.layer-side .hide-tr').each(function(){
           var _this=$(this);
           _this.bind('click',function(){
             _this.slideUp().removeClass('show');
             _this.prev('.show-tr').attr('data-open','true');
           })
       });
     }
     // 特殊table单行展开收起
     if($('.fixed-table-box').size()>0){
       $('.fixed-table-box .show-tr').each(function(){
           var _this=$(this);
           _this.attr('data-open','true');
           _this.bind('click',function(){
               var _this=$(this),_index=_this.index(),_dataOpen=_this.attr('data-open');
              //  console.log(_index)
               if(_dataOpen=='false'){
                  _this.parents('.fixed-table-box').find('.fixed-table_body-wraper').find('.tr').eq(_index).removeClass('left-tr').attr('data-open','true').find('.idea-up').removeClass('idea-down');
                  _this.parents('.fixed-table-box').find('.fixed-table_fixed-left .fixed-table_body-wraper').find('.tr').eq(_index).removeClass('left-tr').attr('data-open','true').find('.idea-up').removeClass('idea-down');
                  //  _this.next('.hide-tr').hide().removeClass('show');
                  //  _this.attr('data-open','true')
                  //  _this.find('.idea-up').removeClass('idea-down');
               }else{
                  _this.parents('.fixed-table-box').find('.fixed-table_body-wraper').find('.tr').eq(_index).addClass('left-tr').attr('data-open','false').find('.idea-up').addClass('idea-down')
                  _this.parents('.fixed-table-box').find('.fixed-table_fixed-left .fixed-table_body-wraper').find('.tr').eq(_index).addClass('left-tr').attr('data-open','false').find('.idea-up').addClass('idea-down')
                  //  _this.next('.hide-tr').slideDown(500).addClass('show');
                  //  _this.find('.idea-up').addClass('idea-down');
                  //  _this.attr('data-open','false');
               }
           });
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
     if ($('.m-check').size()>0) {
         $('.m-check em').bind('click',function(){
             $(this).toggleClass('active');
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
 
   })();
 
 });
 