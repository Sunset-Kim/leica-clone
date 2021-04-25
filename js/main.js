// slide
$('.banner-container').slick({
    infinite: true,
    arrows: false,
    dots: true,
    autoplay: true,
    customPaging: function(slider,i) {
      return '<span class="pagination">' + $(slider.$slides[i]).find('.banner-slide').attr('data-dot-title') + '</span>';
    },
  });

  $('.slide-container').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  });

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
 