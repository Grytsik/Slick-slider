const slider = $('.slider');

slider.slick({
  dots: true,
  draggable: false,
  infinite: false,
  pauseOnHover: false,
  draggable: false,
  swipe: false,
  speed: 2000,
  fadeSpeed: 1000,
  fade: true,
  edgeFriction: true,
  slidesToShow: 1,
  nextArrow: ('.next__step'),
  cssEase: 'linear',
});

slider.on('beforeChange', () => {
  whiteDots();
})



slider.on('beforeChange', function(event, slick, currentSlide) {
  if(currentSlide === 0 || currentSlide > 0) {
    $('.time').addClass('show');
    setTimeout(() => {
      $('.time').removeClass('show');
    }, 1400);
  }
});    




function whiteDots() {
  let breakFlag = false;

  $('.slick-dots li').each((index, item) => {
    if (breakFlag) return;

    if ($(item).hasClass('slick-active')) {
      breakFlag = true;
    }

    $(item).addClass('white-color');
  });
}