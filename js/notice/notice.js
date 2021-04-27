$(function(){

    // notice contents slide up & down
    $('.notice-contents-item-title').click(function() {
        $(this).parent().siblings().removeClass('active');
        $(this).parent().siblings().children('.notice-contents-item-desc').slideUp();
        if($(this).parent().hasClass('active')) {
            $(this).parent().removeClass('active');
            $(this).siblings('.notice-contents-item-desc').stop().slideUp();
            return
        } else {
            $(this).parent().addClass('active');
            $(this).siblings('.notice-contents-item-desc').stop().slideDown();
        }
    });
});