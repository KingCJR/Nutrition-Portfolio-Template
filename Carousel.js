//Script for responsive Carousel Section
//alert("Script is working");
//Section for the Slick Carousel Block (Recipe)
$(document).ready(function(){
  $('.CarouselBlock-Slide').slick({
    infinite:false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows:true,
    //Arrows funcion for navigating Carousel
    prevArrow: '<button class="slide-arrow prevarrow fas fa-chevron-left"></button>',
    nextArrow: '<button class="slide-arrow nextarrow fas fa-chevron-right"></button>',
    responsive: [
      {breakpoint: 1024,
       settings: {
         slidesToShow: 3,
         slidesToScroll: 1,
         infinite: false,
       }},
      {breakpoint: 600,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1
       }},
      {breakpoint: 480,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1
       }}  ]
  });
});