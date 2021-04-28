$(function(){
    // gnb side menu
$('.btn-trigger').click(function(e){
    e.stopPropagation();
    $(this).toggleClass('active');
    $('.gnb-side').toggleClass('active');
  });
  
  $(document).click(function(e){
    $('.btn-trigger').removeClass('active');
    $('.gnb-side').removeClass('active');
    $('.header-menu').stop().slideUp();
  })
 
  // btn top
  $(document).scroll(function(){
    if($(document).scrollTop() > 100) {
      $('.btn-top').addClass('active');
    } else {
      $('.btn-top').removeClass('active');
    }  
  })

  // header submenu
  $('button.btn-link').click(function(e){
    e.stopPropagation();
    $('.header-menu').stop().slideToggle();
  })
  $('.gnb-depth1 > li > a').mouseover(function(e){
    e.stopPropagation();
    $('.header-menu').stop().slideUp();
  })
}) 

