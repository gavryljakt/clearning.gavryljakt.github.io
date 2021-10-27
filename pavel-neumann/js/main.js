$(document).ready(function () {
    $('.photos').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        responsive: [
            {
              breakpoint: 1376,
              settings: {
                slidesToShow: 4,
                dots: true
              }
            },
            {
              breakpoint: 1201,
              settings: {
                slidesToShow: 3,
                dots: true
              }
            },
            {
              breakpoint: 869,
              settings: {
                slidesToShow: 2,
                dots: true
              }
            },
            {
              breakpoint: 415,
              settings: {
                slidesToShow: 1,
                dots: true
              }
            }
          ]
    });
    
});



