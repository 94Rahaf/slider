'use strict';
(function($){
$(document).ready(function(){
  $('.slider').slick({
      initialSlide: 0.5,
      infinite: true,
      slidesToShow: 3.5,
      slidesToScroll: 1.5,
      prevArrow: '<div class="slider__arrow--prev slider__arrow"> < </div>',
      nextArrow: '<div class="slider__arrow slider__arrow--next"> > </div>',
     //appendArrows: 
      

      
  });
});
})(jQuery);