
$(document).ready(function(){
  $('.my-slider').slick({
   
    infinite: false,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    
  });
});


$(function(){
  $('.multiple-items').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1000,
  });
    
}

);












