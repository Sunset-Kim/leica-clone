$(function(){
    $('.product-lnb-list li').click(function(){
        $(this).siblings().children('.product-lnb-sub-list').stop().slideUp();
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $(this).children('.product-lnb-sub-list').stop().slideToggle();
    });

    $('.product-lnb-sub-list').click(function(e){
        e.stopPropagation();
    })
});