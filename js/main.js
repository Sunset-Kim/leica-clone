$(function(){
    // gnb side menu
$('.btn-trigger').click(function(e){
    e.stopPropagation();
    $(this).toggleClass('active');
    $('.gnb-side').toggleClass('active');
  });
  
  $('.gnb-side .gnb-depth2 a,#gnb .wrap, section, footer').click(function(e){
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
  $('button.btn-link').click(function(){
    $('.header-menu').stop().slideToggle();
  })
  $('.gnb-depth1 > li > a').mouseover(function(){
    console.log('여기');
    $('.header-menu').stop().slideUp();
  })
}) 

