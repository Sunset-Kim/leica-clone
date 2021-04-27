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
  })
 
  // btn top
  $(document).scroll(function(){
    if($(document).scrollTop() > 100) {
      $('.btn-top').addClass('active');
    } else {
      $('.btn-top').removeClass('active');
    }  
  })
}) 

