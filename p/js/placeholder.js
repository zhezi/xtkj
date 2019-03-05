$(function(){
    //文本域的事件监听
    $("input[type!='password'][passwordMask!='true'],textarea").bind({
        "focus":function(){
            var placeholderVal = $(this).attr("placeholder");
            var realVal = $(this).val();
            if($.trim(realVal)==placeholderVal){
                $(this).val("");
            }
        },
        "blur":function(){
            var placeholderVal = $(this).attr("placeholder");
            var realVal = $(this).val();
            if($.trim(realVal)==""){
                $(this).val(placeholderVal);
            }
        }
    });

    //初始化除password框之外的文本域
    $("input[type='text'],textarea").each(function(i,n){
        $(this).val($(this).attr("placeholder"));
    });

    //密码框失去焦点，显示文本框
    $("input[type='password']").blur(function(){
        var next = $(this).next("input[type='text'][passwordMask='true']");
        var val = $(this).val();
        if($.trim(val)==""){
            $(next).show();
            $(this).hide();
        }
    });

    //文本框获得焦点，显示密码框
    $("input[type='text'][passwordMask='true']").focus(function(){
        var prev = $(this).prev("input[type='password']");
        $(this).hide();
        $(prev).show().focus();
    });

    //页面初始化密码框为文本框
    $("input[type='text'][passwordMask='true']").each(function(i,n){
        var prev = $(this).prev("input[type='password']");
        $(prev).hide();
        $(this).show();
    });

});