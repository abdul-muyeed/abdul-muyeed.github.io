$('.silk-slider').slick({
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000,
    centerPadding: '60px',
    arrows: true,
    slidesToShow: 2,
    slidescroll: 1,
    prevArrow: '<span class="arrow"><i class="fa-solid fa-angle-left"></i></span>',
    nextArrow: '<span class="arrow"><i class="fa-solid fa-angle-right"></i></span>',
    lazyLoad: 'ondemand',
    centerMode: true,


    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
